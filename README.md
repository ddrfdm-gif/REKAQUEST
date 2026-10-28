# REKAQUEST 2.2.0 — Pengembaraan 48 Cabaran

Aplikasi Node.js 24 dengan node-postgres (pg) untuk storan PostgreSQL. Enam zon bersambung dengan 48 stesen pembelajaran, platform lompat, pintu kemajuan dan checkpoint. Warna merah jambu, putih dan biru muda.

## Jalankan

1. Pasang Node.js 24.
2. Buka terminal dalam folder yang mengandungi package.json.
3. Jalankan `npm ci`, kemudian `npm start`.
4. Buka http://localhost:3000.

Jangan buka index.html terus: login, markah dan simpanan memerlukan pelayan Node.

## Akaun

- Admin: pilih Admin, passcode awal `admie`.
- Admin menambah guru dan passcode guru (minimum 6 aksara).
- Guru menambah murid, kelas dan passcode murid (minimum 4 aksara).
- Murid log masuk menggunakan passcode sendiri dan masuk permainan.
- Guru hanya boleh melihat dan mengurus muridnya sendiri. Admin mengurus guru serta boleh melihat laporan keseluruhan. Admin tidak menambah murid.

## Cara bermain

- WASD / anak panah: bergerak; Space: lompat; E: buka cabaran berdekatan.
- Butang arah dan Lompat disediakan untuk skrin sentuh.
- Periksa bukti dan selesaikan cabaran di stesen bercahaya untuk membuka pintu.
- Laluan antara stesen mengandungi platform dan jurang. Lompat bantu memindahkan watak ke platform berikutnya yang telah dibuka.
- Checkpoint kembali ke stesen yang telah benar-benar dicapai. Kedudukan checkpoint disimpan pada peranti; rekod cabaran disimpan pada pelayan. Pada peranti baharu, murid boleh kembali ke zon yang sudah dicapai melalui perjalanan semula.
- Peta membenarkan kembali ke zon yang sudah dibuka.
- Profil menunjukkan mata, kemajuan, lencana dan rekod percubaan. Avatar lelaki/perempuan serta warna dan aksesori boleh diubah.
- Jatuh menggunakan satu nyawa. Jawapan salah tidak menolak nyawa. 20 mata boleh ditebus untuk satu nyawa; maksimum lima nyawa. Apabila kosong, satu nyawa percuma boleh dipulihkan selepas 60 saat.

## Kandungan dan pemarkahan

Semua 48 nama cabaran daripada PDF asal disenaraikan dalam PETA-CABARAN.md. Lapan cabaran bagi setiap zon, 95 MP bagi setiap zon, 570 MP keseluruhan. Markah terbaik diberikan sekali; percubaan dan petunjuk direkodkan berasingan. Mata yang dibelanjakan tidak mengurangkan markah pencapaian.

Jenis aktiviti: pemeriksaan maklumat, pilihan tunggal/berbilang, padanan, susunan langkah, lakaran SVG, pengiraan, pelan bajet dan ujian produk berasaskan peraturan. Pintu kemajuan dibuka oleh jawapan yang disemak pelayan. Guru melihat jawapan salah, jawapan/kriteria betul, percubaan, petunjuk dan kemajuan setiap cabaran.

Halangan fizikal merangkumi platform bergerak, lif, platform rapuh, palang berputar, lantai tenaga berkala, penghantar dan laluan sempit. Setiap zon menggunakan gabungan berbeza dan hiasan bertema. Cabaran bercabang membuka laluan pemulihan di sisi selepas kesilapan. Permainan ini ialah aplikasi pelayar sendiri, bukan permainan di platform Roblox. Lakaran ialah contoh yang diperiksa/dipilih, bukan editor lukisan bebas. Ujian produk berasaskan peraturan dan paparan hasil, bukan enjin fizik produk sebenar. Petunjuk tiga tahap disediakan dalam kod, bukan API AI langsung. Urutan rasmi buku teks belum disahkan. Selepas cabaran ke-48, murid masih perlu sampai ke gerbang penamat untuk membuka sijil yang boleh dicetak/disimpan sebagai PDF. Penguasaan perlu disahkan guru melalui penerangan dan hasil kerja, bukan mata sahaja.

## Storan kekal pada Render Free — WAJIB baca

Versi 2.2.0 menyokong PostgreSQL luaran. Ikuti **MULA-DI-SINI-POSTGRESQL.md** untuk mencipta pangkalan data Neon Free, mengisi DATABASE_URL di Render dan upload pakej ini sekali.

Dalam Render, DATABASE_URL diwajibkan. Akaun, sesi, passcode yang dihash, markah, jawapan, nyawa dan kunci pengesahan disimpan dalam PostgreSQL. Aplikasi tidak lagi menggunakan fail sementara Render untuk data ini. Tiada cakera berbayar diperlukan.

Untuk ujian pada komputer sendiri, npm ci diikuti npm start boleh menggunakan SQLite jika DATABASE_URL tidak diisi. Node.js 24 diperlukan. Jangan buka HTML secara terus.

Akaun lama yang telah hilang tidak boleh dipulihkan oleh sambungan baharu. Data lama yang masih wujud memerlukan migrasi berasingan; jangan upload SQLite atau auth.key ke GitHub.

## Semakan

`npm test` menjalankan ujian tempatan: peranan/akses, simpanan jawapan, ganjaran/nyawa, fizik obby lama, paparan portal dan semua 48 cabaran baharu. Ujian API melengkapkan semua cabaran dan menyemak 570 MP, penguncian, percubaan berulang, petunjuk dan pengasingan guru. Semakan pelayar tempatan menggunakan pelayan sebenar melengkapkan semua 48 cabaran, semua 144 langkah laluan dengan lompat bantu, gerbang penamat dan sijil. Penebusan nyawa, simpanan selepas muat semula serta laporan guru 48 cabaran turut diperiksa. Ujian fizik juga mengesahkan semua 144 jurang mempunyai laluan lompatan biasa pada fasa halangan yang sesuai. Ini tidak menggantikan pemerhatian penggunaan oleh murid pada peranti sebenar.

Three.js disertakan secara setempat di bawah lesen MIT; lihat THIRD_PARTY_NOTICES.txt. Audio dijana oleh Web Audio; suara bergantung pada sokongan pelayar.

Ujian PostgreSQL berasingan dijalankan dengan `RQ_TEST_DATABASE_URL` pada pangkalan data ujian kosong. Ia mencipta akaun ujian; jangan gunakan pangkalan data kelas sebenar. Tanpa pemboleh ubah itu, ujian PostgreSQL dilangkau.
