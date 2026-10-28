# Semakan storan 2.2.0

Ujian SQLite tempatan sedia ada lulus. Ujian integrasi baharu menggunakan pg melalui TCP kepada enjin PostgreSQL PGlite pada mesin ujian, bukan sambungan Neon pengguna.

Ujian integrasi mencipta dua guru, seorang murid, menyelesaikan semua 48 cabaran dan menyimpan 570 MP. Penebusan 20 mata menghasilkan baki 550 dan 4 nyawa. Avatar turut disimpan.

Aplikasi ditutup dan folder tempatan lama dipadam sepenuhnya. Aplikasi baharu menggunakan direktori tempatan kosong dan sambungan PostgreSQL yang sama. Akaun guru/murid masih boleh log masuk; sesi, 48 rekod jawapan, 570 MP, baki 550, 4 nyawa dan avatar masih tersedia. Direktori tempatan baharu kekal kosong: tiada SQLite atau auth.key diperlukan.

Akses guru lain kepada murid ini ditolak. Jadual dan kunci pengesahan dicari/dicipta dalam pangkalan data secara automatik, bukan dijana semula pada setiap deploy. Transaksi menggunakan satu client PostgreSQL yang sama dan kunci transaksi bagi operasi kemajuan/nyawa.

Belum disambungkan kepada Neon/Render pengguna. Sahkan semula dengan akaun ujian dan satu deploy selepas mengisi DATABASE_URL.

Ujian protokol PostgreSQL menggunakan satu sambungan kerana had multiplexer PGlite. Sambungan Neon sebenar, TLS awam dan beban banyak pengguna masih perlu disahkan selepas konfigurasi.
