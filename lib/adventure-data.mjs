export const zoneNames=["Jejak Petunjuk","Makmal Idea Kreatif","Studio Lakaran","Arena Pemilihan Reka Bentuk","Bengkel Bahan dan Kos","Arena Master Pereka"];
export const zoneBadges=["Detektif RekaQuest","Pencetus Idea Kreatif","Pakar Lakaran","Pembuat Keputusan Bijak","Perancang Produk","Master Pereka"];
export const challenges=[
  {
    "id": 0,
    "mission": 0,
    "title": "Jejak Petunjuk",
    "kind": "multi",
    "prompt": "Periksa ketiga-tiga objek. Pilih SEMUA objek yang memerlukan penambahbaikan reka bentuk.",
    "options": [
      "Bekas pensel tumbang setiap kali diisi",
      "Buku berselerak tetapi tidak rosak",
      "Bekas retak dan pensel terkeluar"
    ],
    "answer": [
      0,
      2
    ],
    "why": "Bekas tidak stabil dan retak mempunyai masalah produk. Buku yang elok hanya perlu dikemas.",
    "evidence": "Klik setiap objek untuk menyiasat.",
    "points": 10,
    "inspect": [
      "Tapak 4 cm, badan 18 cm. Tumbang dengan 12 pensel.",
      "Buku masih elok. Pengguna belum menyusunnya.",
      "Retakan membesar apabila diisi; pensel terkeluar."
    ],
    "hints": [
      "Fokus pada jejak petunjuk. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 1,
    "mission": 0,
    "title": "Detektif Punca dan Kesan",
    "kind": "match",
    "prompt": "Padankan setiap situasi dengan punca atau kesannya.",
    "options": [
      "Tapak terlalu sempit",
      "Pensel jatuh dan berselerak",
      "Pensel keluar melalui retakan",
      "Dinding bahan terlalu nipis"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": "Punca menerangkan mengapa masalah berlaku. Kesan ialah perkara yang berlaku selepas masalah.",
    "evidence": "",
    "points": 10,
    "rows": [
      "Bekas tumbang → PUNCA",
      "Bekas tumbang → KESAN",
      "Bekas retak → KESAN",
      "Bekas retak → PUNCA"
    ],
    "hints": [
      "Fokus pada detektif punca dan kesan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Tentukan maksud setiap baris dahulu, kemudian padankan dengan ciri atau hubungan yang ditunjukkan.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 2,
    "mission": 0,
    "title": "Bilik Aduan Pengguna",
    "kind": "multi",
    "prompt": "Baca semua aduan. Pilih aduan paling relevan DAN alasan pemilihannya.",
    "options": [
      "Aina: Bekas tumbang apabila saya isi 12 pensel",
      "Badrul: Saya mahu warna ungu",
      "Chong: Saya suka corak bintang",
      "Aduan memberi bukti muatan dan keadaan penggunaan",
      "Warna kegemaran menentukan kestabilan"
    ],
    "answer": [
      0,
      3
    ],
    "why": "Aduan Aina menerangkan keadaan kegagalan dan kesan kepada penggunaan.",
    "evidence": "",
    "points": 10,
    "inspect": [
      "Muatan 12 pensel, bekas tumbang dua kali setiap hari.",
      "Bekas masih digunakan; warna ialah pilihan peribadi.",
      "Corak tidak menjelaskan sebab bekas tumbang.",
      "",
      ""
    ],
    "hints": [
      "Fokus pada bilik aduan pengguna. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 3,
    "mission": 0,
    "title": "Susun Siasatan",
    "kind": "order",
    "prompt": "Susun tindakan penyiasatan mengikut urutan tugasan.",
    "options": [
      "Memerhatikan situasi",
      "Mengumpulkan maklumat",
      "Mengenal pasti masalah",
      "Menentukan keperluan pengguna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": "Pemerhatian diikuti maklumat, rumusan masalah dan keperluan pengguna. Ini urutan aktiviti simulasi, belum pengesahan buku teks.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada susun siasatan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Cari tindakan yang perlu berlaku sebelum tindakan lain. Semak keperluan sebelum membuat keputusan akhir.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 4,
    "mission": 0,
    "title": "Masalah atau Sekadar Hiasan?",
    "kind": "match",
    "prompt": "Kelaskan setiap situasi berdasarkan bukti.",
    "options": [
      "Fungsi",
      "Keselamatan",
      "Ketahanan",
      "Pilihan estetik",
      "Keselamatan dan ketahanan"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "why": "Nilai kesan penggunaan. Bucu tajam membahayakan; retakan juga boleh melibatkan lebih satu kategori.",
    "evidence": "",
    "points": 10,
    "rows": [
      "Pensel tidak boleh dimasukkan",
      "Bucu tajam melukakan tangan",
      "Dinding mudah koyak selepas digunakan",
      "Mahukan warna merah jambu",
      "Retakan tajam semakin membesar"
    ],
    "hints": [
      "Fokus pada masalah atau sekadar hiasan?. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Tentukan maksud setiap baris dahulu, kemudian padankan dengan ciri atau hubungan yang ditunjukkan.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 5,
    "mission": 0,
    "title": "Misi Keutamaan",
    "kind": "choice",
    "prompt": "Masalah manakah perlu ditangani dahulu berdasarkan risiko dan kekerapan?",
    "options": [
      "Bekas berbucu tajam melukakan pengguna setiap hari",
      "Pelekat kurang menarik",
      "Warna tidak sepadan dengan meja"
    ],
    "answer": 0,
    "why": "Utamakan keselamatan yang menjejaskan pengguna dengan kerap. Pilihan ini membawa kamu ke laluan keselamatan.",
    "evidence": "",
    "points": 10,
    "branch": true,
    "hints": [
      "Fokus pada misi keutamaan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 6,
    "mission": 0,
    "title": "OOPS! Maklumat Tidak Lengkap",
    "kind": "multi",
    "prompt": "Sebelum memilih saiz bekas baharu, maklumat penting manakah masih diperlukan?",
    "options": [
      "Bilangan alat tulis yang perlu dimuatkan",
      "Saiz ruang meja pengguna",
      "Warna kasut pengguna"
    ],
    "answer": [
      0,
      1
    ],
    "why": "Kapasiti dan ruang menentukan keperluan produk. Dapatkan maklumat sebelum memutuskan saiz.",
    "evidence": "",
    "points": 15,
    "hints": [
      "Fokus pada oops! maklumat tidak lengkap. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 7,
    "mission": 0,
    "title": "Ketua Detektif — Cabaran Utama",
    "kind": "multi",
    "prompt": "Kes baharu: bekas tinggi tumbang dengan 15 pensel di meja kecil. Pilih masalah utama, bukti dan keperluan.",
    "options": [
      "Masalah: tidak stabil ketika digunakan",
      "Bukti: tumbang dengan 15 pensel",
      "Keperluan: stabil, muat 15 pensel dan sesuai ruang meja",
      "Masalah utama: corak kurang cantik"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": "Kesimpulan perlu menghubungkan masalah, bukti ujian dan keperluan pengguna.",
    "evidence": "",
    "points": 20,
    "hints": [
      "Fokus pada ketua detektif — cabaran utama. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Kerusi bergoyang: sambungan kaki longgar ialah punca; murid tidak selesa ialah kesan. Periksa bukti sebelum membuat kesimpulan. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 8,
    "mission": 1,
    "title": "Peta Idea",
    "kind": "multi",
    "prompt": "Kumpul TIGA idea berbeza untuk mengatasi bekas mudah tumbang.",
    "options": [
      "Lebarkan tapak",
      "Rendahkan badan mengikut kapasiti",
      "Gunakan pengapit meja yang selamat",
      "Tukar warna kepada ungu",
      "Tukar warna kepada biru"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": "Tiga pendekatan berbeza menyasarkan kestabilan; menukar warna tidak mengatasi puncanya.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada peta idea. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 9,
    "mission": 1,
    "title": "Gabungkan Idea",
    "kind": "multi",
    "prompt": "Pilih semua ciri yang praktikal bagi bekas stabil dan selamat.",
    "options": [
      "Tapak lebar",
      "Bucu licin",
      "Kadbod tebal yang sesuai muatan",
      "Hiasan berat di bahagian atas"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": "Tapak, bucu dan bahan menyokong fungsi. Hiasan atas yang berat meningkatkan risiko tumbang.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada gabungkan idea. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 10,
    "mission": 1,
    "title": "Laluan Idea Bercabang",
    "kind": "choice",
    "prompt": "Meja sempit, tiada kebenaran menggerudi. Pilih idea sesuai.",
    "options": [
      "Bekas sederhana rendah dengan tapak muat meja",
      "Bekas tinggi dengan hiasan logam berat",
      "Pengikat yang perlu menggerudi meja"
    ],
    "answer": 0,
    "why": "Idea perlu memenuhi fungsi dan kekangan. Idea tidak praktikal membuka laluan pembaikan sebelum kamu boleh maju.",
    "evidence": "",
    "points": 10,
    "branch": true,
    "hints": [
      "Fokus pada laluan idea bercabang. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 11,
    "mission": 1,
    "title": "Cabaran Kekangan",
    "kind": "multi",
    "prompt": "Stor: 3 kadbod tebal, 1 gam; masa simulasi 10 minit. Pilih pelan yang boleh dilaksanakan.",
    "options": [
      "Guna 3 kadbod dan 1 gam",
      "Proses ringkas dianggarkan 8 minit",
      "Guna 5 kadbod dan cat yang tiada",
      "Proses rumit dianggarkan 20 minit"
    ],
    "answer": [
      0,
      1
    ],
    "why": "Sumber dan masa mesti mencukupi. Pelan yang memerlukan bahan tambahan belum boleh dilaksanakan.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada cabaran kekangan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 12,
    "mission": 1,
    "title": "Idea Pengguna",
    "kind": "choice",
    "prompt": "Aina perlukan 12 pensel di meja kecil. Badrul mahu hiasan besar. Tugasan utama untuk Aina. Pilih…",
    "options": [
      "Bekas kompak yang muat 12 pensel",
      "Bekas besar penuh hiasan walaupun tidak muat meja",
      "Bekas kecil yang hanya muat 3 pensel"
    ],
    "answer": 0,
    "why": "Keperluan pengguna sasaran ialah kapasiti 12 pensel dan ruang meja kecil.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada idea pengguna. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 13,
    "mission": 1,
    "title": "Cari Kelemahan Idea",
    "kind": "match",
    "prompt": "Padankan kelemahan idea dengan pembaikan yang mengatasi punca.",
    "options": [
      "Lebarkan tapak",
      "Ganti dengan bahan lebih kukuh",
      "Licinkan atau lindungi bucu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": "Pembaikan perlu berkaitan terus dengan punca, bukan menambah hiasan.",
    "evidence": "",
    "points": 10,
    "rows": [
      "Tapak sempit menyebabkan tumbang",
      "Dinding nipis melendut",
      "Bucu tajam mencederakan"
    ],
    "hints": [
      "Fokus pada cari kelemahan idea. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Tentukan maksud setiap baris dahulu, kemudian padankan dengan ciri atau hubungan yang ditunjukkan.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 14,
    "mission": 1,
    "title": "Bengkel Idea OOPS!",
    "kind": "choice",
    "prompt": "Idea pertama stabil tetapi terlalu besar untuk meja 15 cm. Apakah pembaikan sesuai?",
    "options": [
      "Kecilkan lebar kepada 12 cm dan semak kestabilan semula",
      "Tambah pelekat supaya kelihatan kecil",
      "Abaikan had meja"
    ],
    "answer": 0,
    "why": "Baiki syarat saiz yang gagal sambil mengekalkan fungsi; uji semula selepas perubahan.",
    "evidence": "",
    "points": 15,
    "hints": [
      "Fokus pada bengkel idea oops!. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 15,
    "mission": 1,
    "title": "Ketua Makmal — Idea Terbaik",
    "kind": "multi",
    "prompt": "Pilih idea akhir dan DUA alasan. Syarat: muat 12 pensel, stabil, kos ≤ RM10.",
    "options": [
      "Idea B: tapak lebar, kadbod tebal, kos RM8, muat 12 pensel",
      "Idea A: cantik, kos RM14, mudah tumbang",
      "Alasan: memenuhi fungsi dan kapasiti",
      "Alasan: boleh dihasilkan dalam bajet",
      "Alasan: warna sahaja"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "why": "Idea B memenuhi fungsi, kesesuaian dan kebolehlaksanaan; alasan perlu merujuk bukti.",
    "evidence": "",
    "points": 20,
    "hints": [
      "Fokus pada ketua makmal — idea terbaik. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Untuk menyusun buku, rak rendah dan pengikat rak ialah dua pendekatan berbeza. Dua warna rak yang sama bukan dua penyelesaian fungsi. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 16,
    "mission": 2,
    "title": "Cari Lakaran Tersembunyi",
    "kind": "choice",
    "prompt": "Buka dan periksa tiga lakaran. Pilih bekas bertapak lebar dan berbucu licin.",
    "options": [
      "Lakaran A",
      "Lakaran B",
      "Lakaran C"
    ],
    "answer": 1,
    "why": "Lakaran B menunjukkan tapak lebar dan bucu licin; ciri visual perlu memenuhi tugasan.",
    "evidence": "",
    "points": 10,
    "sketches": true,
    "hints": [
      "Fokus pada cari lakaran tersembunyi. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 17,
    "mission": 2,
    "title": "Teka Maklumat yang Hilang",
    "kind": "multi",
    "prompt": "Lakaran B belum berlabel. Pilih maklumat yang membantu pembuat memahami produk.",
    "options": [
      "Label lebar tapak 12 cm",
      "Label bahan kadbod tebal",
      "Nama permainan kegemaran",
      "Corak latar belakang"
    ],
    "answer": [
      0,
      1
    ],
    "why": "Label ukuran dan bahan menjelaskan reka bentuk tanpa bercanggah dengan lakaran.",
    "evidence": "",
    "points": 10,
    "sketches": true,
    "hints": [
      "Fokus pada teka maklumat yang hilang. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 18,
    "mission": 2,
    "title": "Susun Proses Lakaran",
    "kind": "order",
    "prompt": "Susun aliran aktiviti lakaran dalam simulasi ini.",
    "options": [
      "Semak keperluan tugasan",
      "Lakar bentuk produk",
      "Tambah label bahagian dan ukuran",
      "Semak lakaran dengan syarat"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": "Mulakan dengan keperluan dan semak semula hasil. Urutan buku teks masih perlu pengesahan guru.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada susun proses lakaran. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Cari tindakan yang perlu berlaku sebelum tindakan lain. Semak keperluan sebelum membuat keputusan akhir.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 19,
    "mission": 2,
    "title": "Detektif Kesalahan Lakaran",
    "kind": "multi",
    "prompt": "Lakaran A hanya menunjukkan badan tinggi tanpa tapak atau ukuran. Tandakan kelemahan yang perlu dibaiki.",
    "options": [
      "Tapak tidak ditunjukkan dengan jelas",
      "Ukuran tidak dilabel",
      "Tidak mempunyai pelekat kartun"
    ],
    "answer": [
      0,
      1
    ],
    "why": "Tapak dan ukuran membantu memahami reka bentuk; pelekat tidak wajib.",
    "evidence": "",
    "points": 10,
    "sketches": true,
    "hints": [
      "Fokus pada detektif kesalahan lakaran. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 20,
    "mission": 2,
    "title": "Pilih Lakaran Mengikut Syarat",
    "kind": "choice",
    "prompt": "Syarat wajib: tapak 12 cm, tinggi 16 cm, bucu licin. Pilih lakaran sesuai.",
    "options": [
      "A: tapak 4 cm, tinggi 22 cm",
      "B: tapak 12 cm, tinggi 16 cm, bucu licin",
      "C: tapak 12 cm, tinggi 16 cm, bucu tajam"
    ],
    "answer": 1,
    "why": "Semua syarat wajib mesti dipenuhi, termasuk keselamatan.",
    "evidence": "",
    "points": 10,
    "sketches": true,
    "hints": [
      "Fokus pada pilih lakaran mengikut syarat. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 21,
    "mission": 2,
    "title": "Bengkel Penambahbaikan",
    "kind": "multi",
    "prompt": "Pengguna tidak memahami bahagian bawah lakaran. Pilih pembaikan yang menjelaskannya.",
    "options": [
      "Tambah pandangan tapak",
      "Label lebar tapak",
      "Gelapkan latar supaya bahagian hilang"
    ],
    "answer": [
      0,
      1
    ],
    "why": "Pandangan tambahan dan label menjelaskan bahagian yang kabur.",
    "evidence": "",
    "points": 10,
    "sketches": true,
    "hints": [
      "Fokus pada bengkel penambahbaikan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 22,
    "mission": 2,
    "title": "Cabaran Lakaran Bercabang",
    "kind": "choice",
    "prompt": "Lakaran pilihan muat meja, tetapi tiada maklumat bahan. Apakah tindakan sebelum membina?",
    "options": [
      "Tambah label bahan yang sesuai dan semak semula",
      "Terus bina menggunakan apa sahaja",
      "Tambah nama produk sahaja"
    ],
    "answer": 0,
    "why": "Maklumat bahan yang hilang perlu dilengkapkan sebelum penghasilan.",
    "evidence": "",
    "points": 15,
    "branch": true,
    "sketches": true,
    "hints": [
      "Fokus pada cabaran lakaran bercabang. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 23,
    "mission": 2,
    "title": "Ketua Studio — Lakaran Akhir",
    "kind": "multi",
    "prompt": "Pilih lakaran akhir dan alasan berdasarkan syarat tugasan.",
    "options": [
      "Lakaran B lengkap ukuran dan bahan",
      "Lakaran A tanpa ukuran",
      "Bentuk dan ciri utama jelas",
      "Tapak sesuai ruang dan kapasiti pengguna",
      "Alasan: paling banyak hiasan"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "why": "Lakaran akhir perlu jelas, relevan dan memenuhi syarat; bukti visual menyokong alasan.",
    "evidence": "",
    "points": 20,
    "sketches": true,
    "hints": [
      "Fokus pada ketua studio — lakaran akhir. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Lakaran botol lebih jelas apabila penutup, badan dan ukuran dilabel. Tambah maklumat yang membantu orang lain memahami idea. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 24,
    "mission": 3,
    "title": "Galeri Prototaip",
    "kind": "match",
    "prompt": "Periksa prototaip dan padankan dengan ciri yang ditunjukkan.",
    "options": [
      "Menarik tetapi mudah tumbang",
      "Stabil dan bucu licin",
      "Murah tetapi dinding melendut"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": "Kekuatan dan kelemahan dinilai berdasarkan ciri dan hasil ujian yang ditunjukkan.",
    "evidence": "",
    "points": 10,
    "rows": [
      "A: tinggi 24 cm, tapak 4 cm, kos RM8",
      "B: tinggi 16 cm, tapak 12 cm, kos RM9",
      "C: kertas nipis, kos RM4"
    ],
    "inspect": [
      "A tumbang dengan 12 pensel.",
      "B kekal tegak dengan 12 pensel; bucu dilindungi.",
      "C melendut apabila diisi 12 pensel."
    ],
    "hints": [
      "Fokus pada galeri prototaip. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Tentukan maksud setiap baris dahulu, kemudian padankan dengan ciri atau hubungan yang ditunjukkan.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 25,
    "mission": 3,
    "title": "Padankan Kriteria",
    "kind": "match",
    "prompt": "Padankan ciri dengan kriteria yang paling langsung.",
    "options": [
      "Fungsi",
      "Kestabilan",
      "Keselamatan",
      "Kos"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": "Kriteria membantu membandingkan reka bentuk secara tersusun.",
    "evidence": "",
    "points": 10,
    "rows": [
      "Memuatkan 12 pensel",
      "Tidak tumbang ketika ujian",
      "Bucu licin tidak melukakan",
      "Jumlah perbelanjaan RM9"
    ],
    "hints": [
      "Fokus pada padankan kriteria. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Tentukan maksud setiap baris dahulu, kemudian padankan dengan ciri atau hubungan yang ditunjukkan.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 26,
    "mission": 3,
    "title": "Keputusan Sukar",
    "kind": "multi",
    "prompt": "A lebih cantik tetapi tumbang. B sederhana tetapi stabil. Tugasan utamakan kestabilan. Pilih reka bentuk dan alasan.",
    "options": [
      "Pilih B",
      "Pilih A",
      "B kekal tegak dalam ujian yang sama",
      "A lebih cantik sahaja"
    ],
    "answer": [
      0,
      2
    ],
    "why": "Keputusan memenuhi keutamaan kestabilan dan disokong hasil ujian.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada keputusan sukar. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 27,
    "mission": 3,
    "title": "Uji Keputusan",
    "kind": "simulation",
    "prompt": "Jalankan ujian A dan B dengan 12 pensel. Pilih rumusan berdasarkan hasil.",
    "options": [
      "B lebih stabil dalam keadaan ujian yang sama",
      "A lebih stabil kerana tinggi",
      "Kedua-duanya lulus walaupun A tumbang"
    ],
    "answer": 0,
    "why": "Perbandingan adil menggunakan muatan dan keadaan yang sama.",
    "evidence": "",
    "points": 10,
    "simulation": true,
    "hints": [
      "Fokus pada uji keputusan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Gunakan muatan dan keadaan ujian yang sama. Bandingkan hasil yang diperhatikan.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 28,
    "mission": 3,
    "title": "Kekangan Baharu",
    "kind": "choice",
    "prompt": "Had ruang berubah kepada lebar maksimum 10 cm. B bertapak 12 cm; D bertapak 10 cm dan lulus ujian. Pilih…",
    "options": [
      "D kerana memenuhi had baharu dan lulus ujian",
      "B tanpa perubahan walaupun terlalu lebar",
      "A kerana sudah dikenali"
    ],
    "answer": 0,
    "why": "Apabila keadaan berubah, semak semula keputusan menggunakan syarat baharu.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada kekangan baharu. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 29,
    "mission": 3,
    "title": "Baiki Reka Bentuk Pilihan",
    "kind": "choice",
    "prompt": "Bekas pilihan stabil tetapi bucunya tajam. Pilih penambahbaikan terbaik.",
    "options": [
      "Licinkan dan lindungi bucu, kemudian semak fungsi",
      "Tambah hiasan pada badan",
      "Kecilkan tapak sehingga tumbang"
    ],
    "answer": 0,
    "why": "Atasi kelemahan keselamatan tanpa merosakkan kestabilan.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada baiki reka bentuk pilihan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 30,
    "mission": 3,
    "title": "OOPS! Pilihan Tidak Menepati Syarat",
    "kind": "choice",
    "prompt": "Reka bentuk RM12 gagal bajet wajib RM10. Alternatif manakah sesuai?",
    "options": [
      "RM9, stabil, muat 12 pensel, bucu licin",
      "RM8 tetapi hanya muat 3 pensel",
      "RM14 dan lebih cantik"
    ],
    "answer": 0,
    "why": "Semak kriteria kos yang gagal sambil mengekalkan semua fungsi wajib.",
    "evidence": "",
    "points": 15,
    "hints": [
      "Fokus pada oops! pilihan tidak menepati syarat. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 31,
    "mission": 3,
    "title": "Ketua Arena — Pertahankan Pilihan",
    "kind": "multi",
    "prompt": "Pilih reka bentuk akhir dan sekurang-kurangnya DUA kriteria yang disokong bukti.",
    "options": [
      "B: kos RM9, muat 12 pensel, lulus ujian, bucu licin",
      "A: kos RM8 tetapi tumbang",
      "Kestabilan: B kekal tegak dengan 12 pensel",
      "Keselamatan: bucu B licin",
      "Alasan: saya suka namanya"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "why": "Pilihan dan alasan perlu konsisten dengan syarat serta bukti ujian.",
    "evidence": "",
    "points": 20,
    "hints": [
      "Fokus pada ketua arena — pertahankan pilihan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Dua beg diuji dengan muatan yang sama. Beg yang kekal utuh mempunyai bukti ketahanan; warna sahaja bukan bukti ujian. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 32,
    "mission": 4,
    "title": "Eksplorasi Stor Bahan",
    "kind": "choice",
    "prompt": "Periksa sifat bahan. Pilih bahan badan bekas untuk menampung 12 pensel dalam bilik kering.",
    "options": [
      "Kadbod tebal",
      "Tisu nipis",
      "Kertas nipis"
    ],
    "answer": 0,
    "why": "Kadbod tebal lebih sesuai menampung muatan dalam situasi ini.",
    "evidence": "",
    "points": 10,
    "inspect": [
      "Agak tegar, boleh dipotong dengan alat sesuai; elakkan air.",
      "Mudah koyak dan tidak menyokong muatan.",
      "Mudah melendut dengan muatan pensel."
    ],
    "hints": [
      "Fokus pada eksplorasi stor bahan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 33,
    "mission": 4,
    "title": "Alatan yang Tepat",
    "kind": "match",
    "prompt": "Padankan tugas dengan alatan dan penggunaan yang selamat.",
    "options": [
      "Pembaris untuk mengukur",
      "Gunting sesuai dengan pengawasan guru",
      "Gam yang sesuai untuk mencantum"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": "Alatan perlu sesuai tugas dan digunakan dengan selamat.",
    "evidence": "",
    "points": 10,
    "rows": [
      "Menentukan lebar kadbod",
      "Memotong kadbod mengikut garisan",
      "Mencantum bahagian bekas"
    ],
    "hints": [
      "Fokus pada alatan yang tepat. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Tentukan maksud setiap baris dahulu, kemudian padankan dengan ciri atau hubungan yang ditunjukkan.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 34,
    "mission": 4,
    "title": "Cabaran Kuantiti",
    "kind": "number",
    "prompt": "Satu produk memerlukan 3 keping kadbod. Dua produk memerlukan berapa keping?",
    "options": [],
    "answer": 6,
    "why": "3 keping × 2 produk = 6 keping.",
    "evidence": "",
    "points": 10,
    "unit": "keping",
    "hints": [
      "Fokus pada cabaran kuantiti. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Kenal pasti kuantiti dan nilai seunit. Tentukan operasi pengiraan dan semak unit jawapan.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 35,
    "mission": 4,
    "title": "Pengira Kos",
    "kind": "number",
    "prompt": "4 keping bahan × RM2.50 seunit. Berapakah jumlah kos?",
    "options": [],
    "answer": 10,
    "why": "4 × RM2.50 = RM10.00.",
    "evidence": "",
    "points": 10,
    "unit": "RM",
    "hints": [
      "Fokus pada pengira kos. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Kenal pasti kuantiti dan nilai seunit. Tentukan operasi pengiraan dan semak unit jawapan.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 36,
    "mission": 4,
    "title": "Bajet Terhad",
    "kind": "budget",
    "prompt": "Bajet RM10. Wajib: 3 kadbod dan 1 gam. Pilih kuantiti bahan; hiasan pilihan.",
    "options": [
      "Kadbod RM2/keping",
      "Gam RM2/bekas",
      "Hiasan RM3/set"
    ],
    "answer": [
      3,
      1,
      0
    ],
    "why": "3 × RM2 + 1 × RM2 = RM8. Hiasan RM3 menjadikan kos RM11, melebihi bajet.",
    "evidence": "",
    "points": 10,
    "budget": true,
    "hints": [
      "Fokus pada bajet terhad. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Asingkan bahan wajib dan pilihan. Darab kuantiti dengan harga seunit; bandingkan jumlah dengan had bajet.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 37,
    "mission": 4,
    "title": "Pelan Penghasilan",
    "kind": "fields",
    "prompt": "Lengkapkan pelan: 3 kadbod pada RM2 setiap satu dan 1 gam pada RM2.",
    "options": [
      "Kos kadbod (RM)",
      "Kos gam (RM)",
      "Jumlah keseluruhan (RM)"
    ],
    "answer": [
      6,
      2,
      8
    ],
    "why": "Kuantiti × harga seunit menghasilkan kos setiap bahan. RM6 + RM2 = RM8.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada pelan penghasilan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Kira setiap komponen dahulu. Semak kuantiti × harga seunit, kemudian jumlah dan baki jika diminta.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 38,
    "mission": 4,
    "title": "OOPS! Bajet Melebihi Had",
    "kind": "choice",
    "prompt": "Pelan RM11: kadbod RM6 + gam RM2 + hiasan RM3. Bajet RM10. Baiki tanpa menjejaskan fungsi.",
    "options": [
      "Buang hiasan pilihan: jumlah RM8",
      "Buang gam wajib: bahagian tidak bercantum",
      "Kurangkan kadbod wajib sehingga badan tidak lengkap"
    ],
    "answer": 0,
    "why": "Hiasan pilihan boleh ditangguh. Bahan wajib mengekalkan fungsi dan keselamatan.",
    "evidence": "",
    "points": 15,
    "hints": [
      "Fokus pada oops! bajet melebihi had. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 39,
    "mission": 4,
    "title": "Ketua Bengkel — Pelan Terbaik",
    "kind": "fields",
    "prompt": "Dua produk: setiap satu 3 kadbod RM2/keping. Kongsi 1 gam RM2. Bajet RM15. Lengkapkan pelan.",
    "options": [
      "Jumlah keping kadbod",
      "Kos semua kadbod (RM)",
      "Kos gam (RM)",
      "Jumlah akhir (RM)"
    ],
    "answer": [
      6,
      12,
      2,
      14
    ],
    "why": "6 × RM2 = RM12; tambah gam RM2 menjadi RM14, dalam bajet RM15.",
    "evidence": "",
    "points": 20,
    "hints": [
      "Fokus pada ketua bengkel — pelan terbaik. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Kira setiap komponen dahulu. Semak kuantiti × harga seunit, kemudian jumlah dan baki jika diminta.",
      "Jika 2 pembaris berharga RM3 setiap satu, kosnya 2 × RM3 = RM6. Tambah kos setiap bahan dan bandingkan dengan bajet. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 40,
    "mission": 5,
    "title": "Persediaan Cabaran Akhir",
    "kind": "multi",
    "prompt": "Tugasan akhir: bekas 12 pensel, meja lebar 15 cm, kos ≤ RM10, stabil dan selamat. Kenal pasti semua keperluan utama.",
    "options": [
      "Kapasiti 12 pensel",
      "Lebar tidak melebihi 15 cm",
      "Kos maksimum RM10",
      "Stabil dan bucu selamat",
      "Mesti mempunyai hiasan emas"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": "Semak fungsi, ruang, bajet dan keselamatan sebelum membuat pilihan.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada persediaan cabaran akhir. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 41,
    "mission": 5,
    "title": "Urutan Kerja Pereka",
    "kind": "order",
    "prompt": "Susun proses projek dalam simulasi ini.",
    "options": [
      "Kenal pasti masalah dan keperluan",
      "Jana idea dan sediakan lakaran",
      "Pilih reka bentuk dan rancang bahan serta kos",
      "Hasilkan, uji dan tambah baik produk"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": "Langkah saling berkait. Urutan rasmi buku teks masih perlu pengesahan sebelum penggunaan akhir.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada urutan kerja pereka. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Cari tindakan yang perlu berlaku sebelum tindakan lain. Semak keperluan sebelum membuat keputusan akhir.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 42,
    "mission": 5,
    "title": "Pilih Penyelesaian Lengkap",
    "kind": "multi",
    "prompt": "Gabungkan reka bentuk, bahan dan pelan kos yang konsisten.",
    "options": [
      "Tapak 12 cm, tinggi 16 cm, bucu licin",
      "3 kadbod tebal dan 1 gam",
      "Pelan kos RM8, kapasiti 12 pensel",
      "Tapak 20 cm walaupun meja 15 cm",
      "Kertas nipis yang gagal muatan"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": "Reka bentuk, bahan dan kos mesti memenuhi tugasan tanpa bercanggah.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada pilih penyelesaian lengkap. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 43,
    "mission": 5,
    "title": "Ujian Produk Maya",
    "kind": "design",
    "prompt": "Bina produk yang lulus ujian kestabilan, muatan, saiz dan bajet. Laraskan ciri, kemudian jalankan ujian.",
    "options": [
      "Lebar tapak (cm)",
      "Tinggi badan (cm)",
      "Bahan: 0 kadbod, 1 kayu, 2 kertas nipis"
    ],
    "answer": null,
    "why": "Model simulasi: tapak sekurang-kurangnya separuh tinggi; lebar ≤15 cm; bahan kukuh; kos ≤RM10.",
    "evidence": "",
    "points": 10,
    "design": true,
    "hints": [
      "Fokus pada ujian produk maya. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan nisbah tapak dengan tinggi. Semak kekuatan bahan, saiz maksimum dan kos selepas perubahan.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 44,
    "mission": 5,
    "title": "Diagnosis Kegagalan",
    "kind": "choice",
    "prompt": "Bukti: bekas kadbod tinggi 20 cm, tapak 4 cm, kos RM8. Bekas tumbang dengan muatan. Punca paling munasabah?",
    "options": [
      "Tapak terlalu sempit berbanding tinggi",
      "Warna tidak menarik",
      "Kos terlalu rendah semata-mata"
    ],
    "answer": 0,
    "why": "Bukti menuding kepada kestabilan geometri, bukan warna.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada diagnosis kegagalan. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan setiap pilihan dengan syarat wajib. Pilih tindakan yang mengatasi punca dan disokong bukti.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 45,
    "mission": 5,
    "title": "OOPS! Reka Semula",
    "kind": "design",
    "prompt": "Ujian pertama: tapak 4 cm, tinggi 20 cm — TUMBANG. Ubah ciri dan jalankan ujian kedua.",
    "options": [
      "Lebar tapak (cm)",
      "Tinggi badan (cm)",
      "Bahan: 0 kadbod, 1 kayu, 2 kertas nipis"
    ],
    "answer": null,
    "why": "Bandingkan sebelum dan selepas. Lebarkan tapak atau rendahkan badan sambil menjaga muatan, saiz dan kos.",
    "evidence": "",
    "points": 15,
    "design": true,
    "hints": [
      "Fokus pada oops! reka semula. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Bandingkan nisbah tapak dengan tinggi. Semak kekuatan bahan, saiz maksimum dan kos selepas perubahan.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 46,
    "mission": 5,
    "title": "Pembentangan Pereka Muda",
    "kind": "multi",
    "prompt": "Pilih maklumat untuk ringkasan pembentangan yang lengkap.",
    "options": [
      "Masalah: bekas asal tumbang",
      "Idea: tapak lebih lebar",
      "Reka bentuk: sesuai kapasiti dan ruang",
      "Bahan dan kos: kadbod tebal, gam, RM8",
      "Penambahbaikan dan bukti ujian semula",
      "Nama produk sahaja sudah mencukupi"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "why": "Pembentangan menghubungkan masalah, idea, reka bentuk, bahan dan bukti penambahbaikan.",
    "evidence": "",
    "points": 10,
    "hints": [
      "Fokus pada pembentangan pereka muda. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Semak setiap pilihan satu demi satu. Mungkin ada lebih daripada satu pilihan diperlukan; kaitkan setiap pilihan dengan syarat tugasan.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  },
  {
    "id": 47,
    "mission": 5,
    "title": "Cabaran Master Pereka",
    "kind": "fields",
    "prompt": "Kes baharu: bekas 2 ruang untuk 16 pensel. Perlu 4 kadbod pada RM2.50 dan gam RM2. Bajet RM13. Ujian awal tumbang; tapak dilebarkan dan ujian sama berjaya. Lengkapkan keputusan.",
    "options": [
      "Kos kadbod (RM)",
      "Jumlah termasuk gam (RM)",
      "Baki bajet (RM)",
      "Bilangan ruang yang diperlukan"
    ],
    "answer": [
      10,
      12,
      1,
      2
    ],
    "why": "RM10 + RM2 = RM12, baki RM1. Dua ruang memenuhi tugasan. Bukti ujian semula menyokong penambahbaikan.",
    "evidence": "",
    "points": 20,
    "master": true,
    "hints": [
      "Fokus pada cabaran master pereka. Apakah keperluan pengguna atau bukti yang perlu diperiksa?",
      "Kira setiap komponen dahulu. Semak kuantiti × harga seunit, kemudian jumlah dan baki jika diminta.",
      "Jika rak gagal menampung buku kerana sambungan longgar, kukuhkan sambungan dan uji semula dengan muatan yang sama. Bandingkan bukti sebelum dan selepas. Sekarang cuba cabaran asal semula."
    ]
  }
];
