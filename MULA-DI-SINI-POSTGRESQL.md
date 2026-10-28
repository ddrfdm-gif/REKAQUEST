# REKAQUEST 2.2.0 — Render Free + PostgreSQL luaran

## Apa yang berubah

Akaun admin/guru/murid, passcode yang dihash, sesi, kemajuan 48 cabaran, jawapan salah/betul, mata dan nyawa disimpan dalam PostgreSQL luaran apabila DATABASE_URL diisi. Kunci pengesahan akaun disimpan dalam pangkalan data yang sama. Tiada fail SQLite atau auth.key tempatan diperlukan pada Render.

Pangkalan data kekal di luar Render apabila aplikasi Render tidur, restart atau deploy semula. Akaun boleh log masuk semula dengan passcode yang sama. Tamat sesi selepas 12 jam memerlukan log masuk semula, bukan pendaftaran akaun baharu.

## 1. Cipta pangkalan data percuma

1. Buka https://neon.com dan daftar/log masuk.
2. Pilih pelan Free. Cipta satu projek bernama REKAQUEST.
3. Pilih rantau berhampiran rantau Render jika tersedia.
4. Buka Connect untuk mendapatkan sambungan PostgreSQL. Gunakan sambungan pooled jika ditawarkan.
5. Salin connection string. Ia biasanya bermula dengan postgresql:// dan mengandungi pengguna, kata laluan, host dan nama pangkalan data.

Tiada SQL yang perlu ditaip untuk mencipta jadual: aplikasi menyiapkannya semasa sambungan pertama. Simpan projek/pangkalan data yang sama; jangan cipta pangkalan data baharu untuk setiap deploy.

## 2. Isi Environment di Render dahulu

Dalam perkhidmatan REKAQUEST sedia ada di Render, buka Environment dan tambah:

| Key | Value |
| --- | --- |
| DATABASE_URL | Connection string sebenar daripada Neon |
| NODE_VERSION | 24 |
| COOKIE_SECURE | true |
| ADMIN_PASSCODE | Passcode admin yang dipilih; admie ialah nilai asal |

DATABASE_URL ialah rahsia. Tampal terus dalam Render Environment. Jangan tampal dalam chat, GitHub, fail public/, atau tangkap layar yang menunjukkan nilainya. Fail .env.example hanyalah contoh dan tidak dibaca secara automatik oleh npm start.

Jika menyimpan Environment mencetuskan deploy kod lama, teruskan upload pakej baharu di langkah berikutnya; deploy kod baharu itulah yang akan menggunakan PostgreSQL. Jangan mendaftarkan kelas sebenar semasa peralihan ini.

## 3. Upload semua kod baharu sekali

1. Ekstrak ZIP ini.
2. Buka folder REKAQUEST di dalamnya.
3. Di halaman utama repositori GitHub, pilih Add file → Upload files.
4. Upload semua ISI folder, termasuk package.json, package-lock.json, server.mjs, lib/ dan public/. Jangan upload ZIP atau folder luarnya.
5. Commit changes. Tidak perlu padam repositori atau fail lama.

## 4. Tetapan deploy Render

- Runtime: Node.
- Root directory: kosong.
- Build command: npm ci --omit=dev
- Start command: npm start
- Pelan: Free.
- Tidak memerlukan persistent disk atau DATA_DIR di Render.

Jika Auto-Deploy aktif, tunggu deploy commit terkini. Jika tidak, Manual Deploy → Deploy latest commit. Jika build command lama ialah npm install --omit=dev, ia juga boleh memasang pg, tetapi npm ci menggunakan versi dalam package-lock.json.

render.yaml dalam versi ini sudah menggunakan Free dan tidak meminta cakera berbayar. Untuk perkhidmatan Render sedia ada, mengupload render.yaml sahaja tidak menukar Environment perkhidmatan secara automatik; isi DATABASE_URL melalui dashboard.

## 5. Sahkan sambungan

Log Render yang berjaya bermula akan menyebut PostgreSQL luaran. Selepas login, bahagian bawah dashboard admin/guru memaparkan Storan: PostgreSQL luaran.

Kemudian:
1. Admin log masuk dan daftar seorang guru ujian.
2. Guru itu daftar seorang murid ujian.
3. Murid selesaikan satu cabaran. Pastikan 10 MP direkodkan.
4. Keluar dan log masuk semula menggunakan passcode sama.
5. Lakukan deploy semula dan semak sekali lagi. Akaun serta 10 MP mesti masih wujud.

Ujian terakhir ini mengesahkan konfigurasi Neon/Render sebenar milik pengguna. Pakej telah diuji dengan PostgreSQL serasi protokol secara setempat, tetapi sambungan Neon milik pengguna belum boleh diuji sebelum DATABASE_URL dipasang.

## Maklumat lama

Akaun/markah yang sudah hilang daripada cakera sementara tidak akan muncul semula secara automatik. Jika data lama sudah tiada, daftar semula sekali selepas sambungan PostgreSQL siap. Selepas itu gunakan pangkalan data yang sama untuk semua sesi dan deploy.

Jika masih ada fail pangkalan data lama yang perlu dipindahkan, simpan fail rekaquest.sqlite bersama auth.key sebelum peralihan dan dapatkan bantuan migrasi. Jangan masukkan fail ini ke repositori awam. Pakej ini tidak mengimport data lama secara automatik.

## Jika sambungan gagal

Pada Render, aplikasi sengaja tidak bermula jika DATABASE_URL kosong; ia tidak akan beralih diam-diam kepada storan sementara. Semak bahawa kod 2.2.0 sudah dideploy, URL sambungan tepat, pangkalan data wujud dan kebenaran rangkaian membenarkan Render mengaksesnya. Jika menukar kata laluan Neon, kemas kini DATABASE_URL di Render juga.

Jangan padam projek atau pangkalan data Neon yang digunakan aplikasi. Free tertakluk pada kuota penyedia; tidak bermaksud simpanan tanpa had. Buat sandaran berkala apabila digunakan dengan data sebenar.

Rujukan: https://neon.com/docs/connect/connect-from-any-app dan https://render.com/docs/free
