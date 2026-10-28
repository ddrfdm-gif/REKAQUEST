import fs from 'node:fs';
import path from 'node:path';
import {DatabaseSync} from 'node:sqlite';
import {AsyncLocalStorage} from 'node:async_hooks';
import {randomBytes} from 'node:crypto';

export function postgresSql(sql){
 let s=sql.replace(/PRAGMA[^;]*;/g,'').replace(/BEGIN IMMEDIATE/g,'BEGIN').replace(/MAX\(earned,\?\)/g,'GREATEST(earned,?)');
 s=s.replace(/(CREATE TABLE IF NOT EXISTS (?:accounts|events)\(id) INTEGER PRIMARY KEY/g,'$1 SERIAL PRIMARY KEY');
 s=s.replace(/\b(expires|until_ms|recovery_at|created) INTEGER/g,'$1 BIGINT');
 const ignore=/INSERT OR IGNORE INTO/i.test(s);s=s.replace(/INSERT OR IGNORE INTO/gi,'INSERT INTO');if(ignore)s=s.trim().replace(/;$/,'')+' ON CONFLICT DO NOTHING';
 let i=0;s=s.replace(/\?/g,()=>'$'+(++i));return s;
}
export async function openStorage({databaseUrl,dataDir,pool:providedPool}={}){
 if(!databaseUrl&&!providedPool){
  if(process.env.RENDER)throw Error('DATABASE_URL belum diisi. REKAQUEST memerlukan PostgreSQL luaran pada Render Free.');
  fs.mkdirSync(dataDir,{recursive:true,mode:0o700});const sqlite=new DatabaseSync(path.join(dataDir,'rekaquest.sqlite'));sqlite.exec('PRAGMA foreign_keys=ON;PRAGMA journal_mode=WAL;');let queue=Promise.resolve();
  return {kind:'sqlite',prepare:s=>sqlite.prepare(s),exec:s=>sqlite.exec(s),close:()=>sqlite.close(),withSession(fn){const next=queue.then(async()=>{try{return await fn()}finally{try{sqlite.exec('ROLLBACK')}catch{}}});queue=next.catch(()=>{});return next},raw:sqlite};
 }
 const {default:pg}=await import('pg');pg.types.setTypeParser(20,Number);
 let pool=providedPool;
 if(!pool){const url=new URL(databaseUrl);if(!['postgres:','postgresql:'].includes(url.protocol))throw Error('DATABASE_URL mesti sambungan PostgreSQL.');const local=['localhost','127.0.0.1','::1'].includes(url.hostname);if(!local){for(const name of ['sslmode','sslcert','sslkey','sslrootcert'])url.searchParams.delete(name);}pool=new pg.Pool({connectionString:url.toString(),max:Math.max(1,Math.min(10,Number(process.env.DATABASE_POOL_SIZE)||5)),connectionTimeoutMillis:20000,idleTimeoutMillis:30000,...(!local?{ssl:{rejectUnauthorized:true},enableChannelBinding:true}:{}),application_name:'rekaquest'});pool.on('error',()=>console.error('REKAQUEST: Sambungan PostgreSQL terputus. Permintaan baharu akan cuba menyambung semula.'));}
 const scope=new AsyncLocalStorage();
 async function query(sql,params=[]){const client=scope.getStore();try{return await (client||pool).query(postgresSql(sql),params)}catch(e){if(e.code==='23505')throw Object.assign(Error('UNIQUE constraint: nilai sudah digunakan.'),{code:e.code});throw e}}
 return {kind:'postgres',prepare(sql){return {async get(...params){return (await query(sql,params)).rows[0]},async all(...params){return (await query(sql,params)).rows},async run(...params){const needsId=/^INSERT INTO accounts\(/.test(sql);const result=await query(sql+(needsId?' RETURNING id':''),params);return {changes:result.rowCount,lastInsertRowid:result.rows?.[0]?.id}}}},async exec(sql){await query(sql);if(/^BEGIN(?: IMMEDIATE)?$/i.test(sql.trim()))await query('SELECT pg_advisory_xact_lock(72651001)');},async close(){await pool.end()},async withSession(fn){if(scope.getStore())return fn();const client=await pool.connect();try{return await scope.run(client,fn)}finally{try{await client.query('ROLLBACK')}catch{}client.release()}},async check(){await query('SELECT 1 AS ok')}};
}
export async function persistentAuthKey(db,dataDir){
 if(db.kind==='sqlite'){const file=path.join(dataDir,'auth.key');if(!fs.existsSync(file))fs.writeFileSync(file,randomBytes(32),{mode:0o600});return fs.readFileSync(file)}
 await db.exec('CREATE TABLE IF NOT EXISTS app_settings(key TEXT PRIMARY KEY,value TEXT NOT NULL)');
 await db.prepare('INSERT OR IGNORE INTO app_settings(key,value) VALUES(?,?)').run('auth_key',randomBytes(32).toString('hex'));
 const row=await db.prepare('SELECT value FROM app_settings WHERE key=?').get('auth_key');if(!/^[a-f0-9]{64}$/i.test(row?.value||''))throw Error('Kunci pengesahan pangkalan data tidak sah.');return Buffer.from(row.value,'hex');
}
