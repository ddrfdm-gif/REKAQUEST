# Hasil semakan REKAQUEST 2.1.1

Pakej ZIP diekstrak dan diuji, kemudian tiga pembaikan disertakan:

1. Input produk di luar julat tidak lagi mengunci barisan penghantaran. Murid boleh membetulkan nilai dan menghantar semula.
2. Tindakan nyawa yang ditolak kerana syarat belum dipenuhi tidak lagi disalah anggap sebagai gangguan rangkaian yang mesti dicuba semula selama-lamanya.
3. Penghantaran semula ID jawapan lama memulangkan jumlah markah dan kemajuan terkini.

Mod grafik ringan juga mengehadkan kadar lukisan supaya kawalan lebih responsif apabila WebGL tidak tersedia.

## Semakan pelayar dengan pelayan sebenar

- Akaun ujian admin, guru dan murid dicipta melalui API sebenar dalam persekitaran ujian sahaja. Pembungkus ujian tidak dimasukkan dalam ZIP.
- Semua 48 tugasan dijawab melalui kawalan UI, termasuk pemeriksaan objek, susunan, padanan, lakaran, simulasi, bajet dan produk.
- Setiap tiga langkah lompat bantu di antara stesen digunakan untuk memeriksa keseluruhan laluan hingga platform 144.
- Markah pada akhir setiap zon: 95, 190, 285, 380, 475, 570 MP.
- Gerbang akhir membuka keputusan dan sijil setelah semua cabaran dan laluan selesai.
- Input tapak 99 cm ditolak; selepas ditukar kepada 12 cm dan tinggi 16 cm, tugasan berjaya disimpan.
- Tebus 20 mata: nyawa 3 → 4, baki mata 570 → 550, markah kekal 570.
- Muat semula mengekalkan kemajuan, nyawa, baki mata dan sijil pada peranti sama.
- Dashboard dan laporan guru memaparkan 570 MP, enam misi dan semua 48 rekod.

## Ujian automatik

Sepuluh ujian memeriksa peranan dan pengasingan guru, penghantaran semula jawapan, ganjaran dan pemulihan nyawa, semua 48 cabaran, keadaan halangan, laluan bantu dan lompatan biasa. Setiap satu daripada 144 jurang diuji dengan trajektori lompatan biasa pada fasa halangan yang sesuai.

## Had semakan

Belum deploy ke akaun Render pengguna. Ujian pelayar dibuat pada komputer ujian, bukan tablet fizikal atau semua model peranti. Semua jurang disahkan melalui simulasi, tetapi perjalanan pelayar penuh menggunakan lompat bantu; ia bukan bukti bahawa tahap kesukaran sesuai untuk semua murid. Urutan pembelajaran rasmi masih memerlukan pengesahan buku teks. Data Render Free tetap bergantung pada cakera sementara.
