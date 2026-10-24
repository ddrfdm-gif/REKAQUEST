# REKAQUEST — Kod Kendiri · Tema Merah Jambu, Putih & Biru Muda

Permainan pengembaraan RBT dengan log masuk passcode, dashboard admin dan dashboard guru. Tiada GPT Site, akaun ChatGPT, OAuth, analitik, CDN atau API AI diperlukan. Semua aset permainan dibekalkan secara setempat. Aplikasi berkomunikasi dengan pelayan REKAQUEST yang kamu jalankan sendiri.

## Cara paling cepat mencuba pada komputer

1. Pasang **Node.js 24**.
2. Ekstrak ZIP ini.
3. Buka Terminal / Command Prompt dalam folder yang mengandungi `package.json`.
4. Jalankan:

```sh
npm start
```

5. Buka **http://localhost:3000**.
6. Pilih **Admin**, masukkan **`admie`**.
7. Tambah nama guru dan passcode guru. Catat passcode tersebut.
8. Keluar, pilih **Guru**, masukkan passcode guru yang didaftarkan.
9. Tambah nama murid, kelas dan passcode murid.
10. Keluar, pilih **Murid**, masukkan passcode murid. Permainan dibuka terus.

Tiada pakej tambahan diperlukan. SQLite dan pelayan HTTP menggunakan modul terbina dalam Node.js. Jangan buka `public/index.html` dengan klik dua kali: log masuk dan rekod memerlukan pelayan berjalan.

## Skrin dan aliran

Skrin hadapan hanya memaparkan **“Selamat Datang ke REKAQUEST”** dan tiga pilihan: **Admin**, **Guru**, **Murid**.

- **Admin:** tambah guru, tetapkan passcode guru, aktif/nyahaktif akaun, lihat semua murid dan laporan.
- **Guru:** tambah murid dan passcode mereka, tapis mengikut nama/kelas, pantau markah serta kemajuan enam misi, buka laporan peribadi, eksport CSV.
- **Murid:** masuk terus ke permainan dengan nama akaun yang diberikan guru; pilih avatar lelaki/perempuan dan warna; sambung kemajuan yang disimpan.
- Guru B tidak boleh mengakses rekod murid Guru C, termasuk melalui permintaan API terus.
- Passcode tidak dipaparkan semula selepas pendaftaran; gunakan Tetap semula jika terlupa. Passcode guru sekurang-kurangnya 6 aksara; murid sekurang-kurangnya 4. Passcode mesti unik dalam peranan yang sama.
- Passcode admin pertama ialah `admie`, seperti diminta. `ADMIN_PASSCODE` boleh menentukan nilai berbeza **sebelum** pangkalan data pertama dicipta. Menukar pemboleh ubah itu kemudian tidak menukar akaun sedia ada.

## Apa yang guru boleh lihat

- MP permainan, maksimum **300 MP**, dan kemajuan cabaran setiap misi.
- Soalan atau ujian yang murid cuba; jawapan murid; jawapan/kriteria yang tepat; masa dan urutan percubaan.
- Kesilapan yang sudah dibaiki dan item yang masih belum tepat.
- Ketepatan percubaan pertama bagi setiap item yang telah dicuba.
- Konsep RBT yang memerlukan bimbingan, dengan cadangan tindakan.
- Keputusan **Semakan RBT**: dua situasi baharu bagi setiap misi yang selesai.
- Percubaan latihan obby bebas diasingkan daripada rekod rasmi. Bantuan melompat tidak mengurangkan MP RBT.

Jawapan bermakna direkodkan bagi lima cabaran Misi 1, pemilihan idea, pemilihan prototaip, pengiraan kos, ujian produk, pembentangan dan 12 item semakan situasi baharu. Tindakan penerokaan/pembinaan yang bukan jawapan direkodkan sebagai kemajuan cabaran, bukan “jawapan salah”. Petunjuk Misi 1 juga kekal dalam rekod permainan.

MP aktiviti dikira pada pelayan berdasarkan cabaran yang dilaporkan selesai; aktiviti permainan masih bergantung pada laporan klien. Ini instrumen formatif, bukan peperiksaan dengan perlindungan antimanipulasi. Ketepatan item dan kriteria ujian dinilai semula pada pelayan. Tahap PBD tidak ditentukan secara automatik.

## Profil murid, mata, lencana dan nyawa

Tema utama antara muka ialah **merah jambu, putih dan biru muda**, termasuk skrin tiga peranan, dashboard dan panel profil permainan.

Dalam permainan, tekan **Profil murid** atau kotak **♥ nyawa / ✦ mata**. Profil menunjukkan avatar, nama, markah RBT, baki mata boleh ditebus, nyawa semasa, kemajuan enam misi dan enam lencana. Lencana diperoleh apabila semua cabaran misi berkenaan selesai.

| Peraturan awal | Nilai |
|---|---|
| Nyawa permulaan | 3 |
| Nyawa maksimum | 5 |
| Kos tebus 1 nyawa | 20 mata |
| Jatuh ke jurang obby | Tolak 1 nyawa |
| Jawapan salah tanpa jatuh | Tidak menolak nyawa |
| Checkpoint secara manual / Lompat bantu | Tidak menolak nyawa |
| Nyawa habis tanpa mata mencukupi | Pulih 1 nyawa percuma selepas 60 saat |

**Markah RBT dan baki mata adalah berasingan.** Contoh: murid memperoleh 50 MP daripada Misi 1. Sebanyak 50 mata ganjaran dikreditkan sekali. Selepas menebus satu nyawa, baki menjadi 30 mata, tetapi markah dalam laporan guru kekal 50/300 MP. Mengulang cabaran tidak mengkreditkan mata tambahan. Mata tidak boleh dibeli dengan wang.

Penebusan, had nyawa dan baki disemak pada pelayan. ID tindakan menghalang penghantaran semula permintaan yang sama daripada menolak mata atau nyawa dua kali. Menghantar `balance` atau `lives` dalam simpanan permainan tidak mengubah dompet pelayan. Semakan ini melindungi transaksi ganjaran; kredit MP masih berdasarkan aktiviti permainan yang dilaporkan klien seperti diterangkan di atas.

Nyawa digunakan untuk cabaran obby, termasuk latihan bebas. Apabila nyawa habis, pergerakan dan bantuan lompat dalam obby berhenti sehingga nyawa ditambah. Murid boleh keluar ke kawasan pembelajaran lain. Blok yang betul, checkpoint dan markah tidak dipadamkan.

Pemulihan percuma hanya tersedia apabila nyawa ialah sifar dan tempoh menunggu telah tamat. Ia memberikan satu nyawa, tanpa menolak mata; ia tidak mengisi lima nyawa sekali gus. Tujuannya mengelakkan murid tersekat apabila belum mempunyai mata.

Peraturan pelayan berada dalam `lib/rewards.mjs` (`REWARDS`). Modul antara muka profil ialah `public/play/student-profile.js`; gayanya dalam `public/play/profile-theme.css`. Pangkalan data lama daripada versi kod kendiri sebelumnya boleh terus digunakan: jadual dompet dan transaksi ditambah secara automatik pada startup. Simpan seluruh folder data asal; murid sedia ada menerima kredit berdasarkan pencapaian yang disimpan, tanpa pendua. Guru boleh melihat baki mata, mata dibelanjakan dan nyawa dalam laporan murid.

## GitHub dan Render

1. Buat repositori GitHub baharu.
2. Muat naik **isi folder** ini supaya `package.json`, `server.mjs`, `public/` dan `lib/` berada di akar repositori. Jangan muat naik folder `data/` atau fail `.env`.
3. Dalam Render, pilih **New → Web Service**, sambungkan repositori.
4. Tetapkan:

| Tetapan | Nilai |
|---|---|
| Runtime | Node |
| Build Command | `npm install --omit=dev` |
| Start Command | `npm start` |
| Health Check | `/health` |
| `NODE_VERSION` | `24` |
| `COOKIE_SECURE` | `true` |
| `DATA_DIR` | `/var/data/rekaquest` |
| `ADMIN_PASSCODE` | `admie` atau pilihan kamu sebelum kali pertama dijalankan |

5. Tambah **persistent disk**, mount path **`/var/data`**, supaya akaun dan markah kekal selepas restart/redeploy. Render menyediakan disk ini pada servis berbayar. Tanpa disk kekal, data SQLite boleh hilang apabila servis dimulakan semula atau dideploy.
6. Deploy, buka URL Render dan masuk sebagai Admin.

`render.yaml` juga disertakan untuk aliran Blueprint. Fail itu menggunakan pelan `starter` dengan disk 1 GB; semak kos dalam akaun Render sebelum menggunakannya. Tiada deployment dibuat oleh pakej ini.

Rujukan rasmi: https://render.com/docs/web-services · https://render.com/docs/disks · https://render.com/docs/node-version

**Ini Web Service, bukan Static Site / GitHub Pages**, kerana log masuk dan pangkalan data perlu dijalankan pada pelayan. Jika mahu mengelakkan disk Render, jalankan pada komputer/pelayan sendiri yang mempunyai storan kekal; versi ini menggunakan SQLite, bukan pangkalan data luaran.

## Fail utama

```text
server.mjs                 Pelayan, sesi, kawalan akses dan API
lib/catalog.mjs            Pemarkahan jawapan pada pelayan
lib/rbt.mjs                Struktur misi, normalisasi state dan pengiraan MP
public/index.html          Skrin tiga peranan
public/portal.js           Borang log masuk dan dashboard
public/portal.css          Gaya dashboard
public/portal-extra.css    Gaya skrin hadapan dan laporan
public/play/               Permainan 3D dan avatar
public/play/cloud-profile.js  Simpan kemajuan dan barisan jawapan
public/play/learning-check.js Semakan situasi baharu
public/play/student-profile.js Profil, mata, nyawa dan lencana
public/play/profile-theme.css Tema merah jambu, putih dan biru muda
lib/rewards.mjs             Peraturan ganjaran dan transaksi nyawa
render.yaml                Pilihan konfigurasi Render
.env.example               Contoh pemboleh ubah persekitaran
```

Data sebenar disimpan dalam `DATA_DIR`: `rekaquest.sqlite`, fail jurnal SQLite, dan `auth.key`. `auth.key` perlu kekal bersama pangkalan data untuk passcode terus berfungsi. Passcode disimpan sebagai scrypt hash dengan salt; carian log masuk menggunakan HMAC dengan kunci pelayan; sesi menggunakan cookie HttpOnly. Akaun dan kebenaran disemak pada setiap permintaan. Sesi bertahan 12 jam; log keluar atau tetap semula passcode membatalkan sesi berkenaan.

Untuk sandaran, hentikan aplikasi seketika dan salin **seluruh** `DATA_DIR`; pulihkan folder itu pada storan kekal. Jangan masukkan sandaran murid ke repositori awam. Pakej ZIP ini tidak mengandungi data pengguna atau rekod daripada site lama.

Status simpanan permainan dipaparkan di atas skrin. Jika rangkaian terputus, kemajuan dan jawapan yang belum dihantar disimpan sementara pada peranti dan dihantar semula apabila sambungan pulih. Log keluar permainan menunggu rekod dihantar. Permainan memerlukan log masuk dan pelayan; ini bukan aplikasi luar talian sepenuhnya.

## Ujian

```sh
npm test
```

Ujian integrasi menggunakan pelayan sebenar dan SQLite sementara: log masuk admin/guru/murid, dua guru dengan murid berasingan, akses silang ditolak, pengiraan MP, rekod kesilapan/pembetulan, penghantaran semula tanpa pendua, semakan terkunci sehingga misi selesai, passcode baharu, logout, nyahaktif akaun dan rekod kekal selepas restart. Ujian ganjaran meliputi had nyawa, baki mata, markah tidak berkurang, permintaan berulang, pemulihan 60 saat dan nyawa obby sebenar.

## Lesen aset

Three.js r170 disertakan di `public/play/three.module.js` di bawah lesen MIT. Lihat `THIRD_PARTY_NOTICES.txt`.
