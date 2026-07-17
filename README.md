# Aplikasi Web Tata Cara Sholat HPT Muhammadiyah

Aplikasi web interaktif pembelajaran tata cara shalat fardhu lima waktu (Subuh sampai Isya) berbasis *mobile-first*, yang disusun berdasarkan putusan resmi Himpunan Putusan Tarjih (HPT) Muhammadiyah. Proyek ini dikembangkan untuk memenuhi tugas mata kuliah Pengembangan Aplikasi Web / Praktikum Pemrograman Web.

**Live Demo:** [https://tatacarasholathpt.my.id/](https://tatacarasholathpt.my.id/)

---

## Identitas Akademik
* **Mata Kuliah:** Pengembangan Aplikasi Web / Praktikum Pemrograman Web
* **Dosen Pengampu:** Dedy Susanto, S.Pd.I., M.M.
* **Institusi:** Universitas Muhammadiyah
* **Tahun Akademik:** 2026

---

## Kelompok 4 - Anggota & Pembagian Peran
Berdasarkan keputusan internal tim, proses rekayasa sistem dibagi secara terstruktur sebagai berikut:
* **Unadiya Rahma Tiara (Project Manager)**
    * *Tugas:* Manajemen repositori, kontrol integrasi sistem, dokumentasi proyek, dan koordinasi alur kerja tim.
* **Adrian Fernanda (Back-end & Full Coder)**
    * *Tugas:* Menuliskan keseluruhan baris kode aplikasi (Logika PHP, Routing backend, API data dinamis, Struktur HTML, presentasi CSS Grid/Flexbox, dan skrip interaktivitas Javascript).
* **Suci Fitri Andini (Database & Content Engineer)**
    * *Tugas:* Merancang arsitektur database relasional, mengolah data tekstual Arab (*charset* utf8mb4), teks Latin, serta validasi konten keagamaan sesuai HPT Muhammadiyah.
* **Wirananda Dwi Saputra (QA, Multimedia & Deployment)**
    * *Tugas:* Melakukan kurasi, pemotongan (*cutting*), kompresi audio makhraj bacaan format MP3, optimasi gambar gerakan, serta penanganan rilis aplikasi web.
* **Natasya Artika Melagis (Front-end Planner & UI/UX Validator)**
    * *Tugas:* Merancang kerangka *user flow*, konsep visual antarmuka awal (**https://www.figma.com/design/1d10iTfAO13FjeOjSK4XAH/WIREFRAME-AIK-KELOMPOK-4?node-id=0-1&t=7NJP1hIGU8dilKcK-0**), serta melakukan pengujian kualitas responsivitas pada perangkat seluler (*mobile testing*).

---

## Fitur Utama Aplikasi
* **Rujukan HPT Valid:** Seluruh bacaan bersumber dari dokumen resmi Majelis Tarjih Muhammadiyah.
* **Desain UI Awal Terstruktur:** Alur antarmuka dikembangkan dengan mengacu pada *wireframe* awal digital untuk memastikan akurasi tata letak responsive layout (**[Link Figma Wireframe]https://www.figma.com/design/1d10iTfAO13FjeOjSK4XAH/WIREFRAME-AIK-KELOMPOK-4?node-id=0-1&t=7NJP1hIGU8dilKcK-0**).
* **Penyajian Multi-lapis (*Multilinear Reading*):** Menampilkan variasi doa HPT (seperti 3 lapis potongan doa Iftitah) dalam satu rangkaian gerakan shalat.
* **Mode Pengguna Ganda:** Pilihan konten dinamis untuk mode Dewasa (terjemahan lengkap) dan mode Anak (terjemahan ringkas ramah anak).
* **Multimedia Autoplay:** Audio makhraj bacaan `.mp3` dan video peragaan `.mp4` berputar otomatis (*sync*) begitu pengguna bergeser menggunakan tombol Navigasi (Next/Prev).
* **Header Identitas Permanen:** Menyertakan informasi Nama Kelompok, Prodi, Mata Kuliah, dan Dosen Pengampu secara konsisten pada bagian atas aplikasi.

---

## Daftar Aset Audio & Video (Wirananda Dwi Saputra)
* **Audio Bacaan Shalat (Lokal):** `takbir.mp3`, `iftitah.mp3`, `ruku.mp3`, `sujud.mp3`, `tahiyat.mp3`, `salam.mp3`
* **Video Panduan (Lokal):** `video_tata_cara_sholat.mp4`

> **Catatan Teknis:** Semua file media di atas disimpan secara lokal di laptop karena ukurannya yang besar untuk batas unggah GitHub. Aset tersebut akan diunggah langsung ke server (cPanel/File Manager) pada saat proses web deployment/hosting dilakukan.

---

## Laporan Rincian Kontribusi Tim (Per Pertemuan)

### Pertemuan Ke-1: Analisis Kebutuhan & Perancangan Sistem
| No | Nama | NIM | Peran | Rincian Kontribusi |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Unadiya Rahma Tiara | 241220055 | Ketua/PM | Melakukan koordinasi tim dan pembagian tugas anggota kelompok, Membuat repositori organisasi/proyek di GitHub dan mengundang kolaborator, Mengkomplikasi seluruh materi perancangan menjadi dokumen laporan akhir (PDF), dan mengecek semua tugas dari masing-masing anggota apakah sudah dikerjakan dan ikut serta merapikannya. |
| **2** | Natasya Artika Melagis | 241220054 | Front-end Developer | Menganalisis kebutuhan antarmuka pengguna berbasis *mobile-first layout*. Merancang sketsa kasar/*wireframe* awal untuk Halaman Beranda, Halaman Daftar Gerakan, dan Halaman Detail Gerakan dalam versi perangkat HP dan Laptop (**(https://www.figma.com/design/1d10iTfAO13FjeOjSK4XAH/WIREFRAME-AIK-KELOMPOK-4?node-id=0-1&t=7NJP1hIGU8dilKcK-0)**). |
| **3** | Adrian Fernanda | 241220059 | Back-end Developer | Menganalisis logika pemrosesan fitur fungsional sistem (F-01 sampai F-09), dan Merancang logika alur perpindahan halaman serta menyusun diagram Struktur Navigasi Aplikasi. |
| **4** | Suci Fitri Andini | 241220056 | Database & Content Engineer | Merancang arsitektur basis data minimum dan mengembangkannya ke dalam model skema EER di MySQL Workbench. Menentukan tipe data, *primary key*, *foreign key*, serta relasi antar-tabel (kategori, gerakan, bacaan, kelompok), dan Mengumpulkan data aset konten 13 gerakan sholat beserta teks doa sahih yang bersumber asli dari HPT Muhammadiyah. |
| **5** | Wirananda Dwi Saputra | 241220023 | QA, Dokumentasi & Deployment | Melakukan analisis dan validasi kesesuaian antara rencana rancangan tim dengan lembar spesifikasi teknis wajib dari dosen, Menyiapkan standarisasi dokumen pengujian awal dan merencanakan strategi *deployment* daring (*online*) untuk pertemuan berikutnya, dan Menyusun Bab I Pendendahuluan dan Bab II Analisis Kebutuhan Sistem. |

### Pertemuan Ke-2: Pengembangan Fitur Dasar & Struktur Kode
| No | Nama | NIM | Peran | Rincian Kontribusi |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Unadiya Rahma Tiara | 241220055 | Ketua/PM | Mengkoordinasikan pembagian tugas anggota tim agar pengerjaan berjalan sesuai jadwal. Membantu melakukan pengecekan ulang (*double-check*) pada hasil kodingan *Front-end* dan struktur *database* kelompok. Membantu meninjau ulang dan merapikan susunan akhir dokumen Laporan Progres Pertemuan 2. |
| **2** | Natasya Artika Melagis | 241220054 | Front-end | Melakukan modifikasi (*editing*) dan merapikan tampilan antarmuka dari kodingan dasar yang sudah disediakan. Menyusun file `style.css` (Flexbox/Grid) agar tampilan web rapi dan responsif di berbagai ukuran layar. |
| **3** | Adrian Fernanda | 241220059 | Back-end | Membangun dan menyediakan seluruh struktur kodingan dasar aplikasi (HTML/JS dasar). Membuat fungsi dasar agar komponen halaman utama dan detail gerakan dapat berjalan. |
| **4** | Suci Fitri Andini | 241220056 | Database & Konten | Membuat skema *database_aik* dan tabel bacaan (kolom teks_arab, teks_latin, dll) di MySQL. Mengonfigurasi tipe data (*charset* `utf8mb4`) agar teks Arab dapat tersimpan tanpa rusak. |
| **5** | Wirananda Dwi Saputra | 241220023 | QA & Deployment | Melakukan *editing* dan pemotongan (*cutting*) file video/audio panduan per gerakan shalat untuk aset media aplikasi. Menyusun draf awal Dokumen Laporan Progres Pertemuan 2 sebelum difinalisasi bersama Ketua Kelompok. |

### Pertemuan Ke-3: Integrasi Sistem, Fitur Autoplay, & Finalisasi
| No | Nama | NIM | Peran | Rincian Kontribusi |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Unadiya Rahma Tiara | 241220055 | Ketua/PM | Mengoordinasikan integrasi seluruh modul front-end, back-end, database; melakukan pengecekan akhir; merapikan struktur proyek; memastikan seluruh fitur berjalan dengan baik; menyusun laporan akhir; serta mengelola proses pengumpulan dan deployment proyek. |
| **2** | Natasya Artika Melagis | 241220054 | Front-end Developer | Menyempurnakan tampilan antarmuka, responsivitas halaman, pengaturan layout, warna, typography, navbar, bagian gerakan, progress bar, serta keseluruhan styling aplikasi. |
| **3** | Adrian Fernanda | 241220059 | Back-end Developer | Mengembangkan seluruh bagian back-end aplikasi, konfigurasi koneksi database, endpoint pengambilan data, server Node.js, logika integrasi PHP, serta fungsi JavaScript yang berkaitan dengan integrasi data (Next/Previous, Autoplay, Toggle Video, Load Data API). |
| **4** | Suci Fitri Andini | 241220056 | Database & Content Engineer | Menyusun dan mengekspor dump database (db_dumps: kategori, kelompok, gerakan, bacaan), mengisi 26 baris data gerakan (13 Dewasa + 13 Anak) beserta bacaan dan kolom durasi_autoplay, serta memastikan kolom sumber terisi rujukan HPT Muhammadiyah. |
| **5** | Wirananda Dwi Saputra | 241220023 | QA, Dokumentasi & Deployment | Menyiapkan seluruh aset multimedia, melakukan pengujian aplikasi pada berbagai perangkat, dokumentasi, serta membantu proses deployment dan menyusun draf BAB IV–VI laporan akhir. |
