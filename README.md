# Aplikasi Web Tata Cara Sholat HPT Muhammadiyah

Aplikasi web interaktif pembelajaran tata cara shalat fardhu lima waktu (Subuh sampai Isya) berbasis *mobile-first*, yang disusun berdasarkan putusan resmi Himpunan Putusan Tarjih (HPT) Muhammadiyah. Proyek ini dikembangkan untuk memenuhi tugas mata kuliah Pengembangan Aplikasi Web / Praktikum Pemrograman Web.

**Live Demo:** https://tatacarasholathpt.my.id/.

## Identitas Akademik
*   **Mata Kuliah:** Pengembangan Aplikasi Web / Praktikum Pemrograman Web
*   **Dosen Pengampu:** Dedy Susanto, S.Pd.I., M.M.
*   **Institusi:** Universitas Muhammadiyah
*   **Tahun Akademik:** 2026

## Kelompok 4 - Anggota & Pembagian Peran
Berdasarkan keputusan internal tim, proses rekayasa sistem dibagi secara terstruktur sebagai berikut:
*   **Unadiya Rahma Tiara (Project Manager)**
    *   *Tugas:* Manajemen repositori, kontrol integrasi sistem, dokumentasi proyek, dan koordinasi alur kerja tim.
*   **Adrian Fernanda (Back-end & Full Coder)**
    *   *Tugas:* Menuliskan keseluruhan baris kode aplikasi (Logika PHP, Routing backend, API data dinamis, Struktur HTML, presentasi CSS Grid/Flexbox, dan skrip interaktivitas Javascript).
*   **Suci Fitri Andini (Database & Content Engineer)**
    *   *Tugas:* Merancang arsitektur database relasional, mengolah data tekstual Arab (*charset* utf8mb4), teks Latin, serta validasi konten keagamaan sesuai HPT Muhammadiyah.
*   **Wirananda Dwi Saputra (QA, Multimedia & Deployment)**
    *   *Tugas:* Melakukan kurasi, pemotongan (*cutting*), kompresi audio makhraj bacaan format MP3, optimasi gambar gerakan, serta penanganan rilis aplikasi web.
*   **Natasya Artika Melagis (Front-end Planner & UI/UX Validator)**
    *   *Tugas:* Merancang kerangka *user flow*, konsep visual antarmuka (*wireframing*), serta melakukan pengujian kualitas responsivitas pada perangkat seluler (*mobile testing*).
    
## Fitur Utama Aplikasi
*   **Rujukan HPT Valid:** Seluruh bacaan bersumber dari dokumen resmi Majelis Tarjih Muhammadiyah.
*   **Penyajian Multi-lapis (*Multilinear Reading*):** Menampilkan variasi doa HPT (seperti 3 lapis potongan doa Iftitah) dalam satu rangkaian gerakan shalat.
*   **Mode Pengguna Ganda:** Pilihan konten dinamis untuk mode Dewasa (terjemahan lengkap) dan mode Anak (terjemahan ringkas ramah anak).
*   **Multimedia Autoplay:** Audio makhraj bacaan `.mp3` dan video peragaan `.mp4` berputar otomatis (*sync*) begitu pengguna bergeser menggunakan tombol Navigasi (Next/Prev).
*   **Header Identitas Permanen:** Menyertakan informasi Nama Kelompok, Prodi, Mata Kuliah, dan Dosen Pengampu secara konsisten pada bagian atas aplikasi.

## Daftar Aset Audio & Video (Wirananda Dwi Saputra)

*   **Audio Bacaan Shalat (Lokal):** `takbir.mp3`, `iftitah.mp3`, `ruku.mp3`, `sujud.mp3`, `tahiyat.mp3`, `salam.mp3`
*   **Video Panduan (Lokal):** `video_tata_cara_sholat.mp4`
> **Catatan Teknis:** Semua file media di atas disimpan secara lokal di laptop karena ukurannya yang besar untuk batas unggah GitHub. Aset tersebut akan diunggah langsung ke server (cPanel/File Manager) pada saat proses web deployment/hosting dilakukan.

## Laporan Rincian Kontribusi Tim (Per Pertemuan)
Berikut adalah rincian kontribusi, peran, dan tanggung jawab setiap anggota kelompok dalam pengembangan aplikasi dari Pertemuan 1 hingga Pertemuan 3.
### Pertemuan Ke-1: Analisis Kebutuhan & Perancangan Sistem

| No | Nama | NIM | Peran | Rincian Kontribusi |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Unadiya Rahma Tiara | 241220055 | Ketua/PM | Melakukan koordinasi tim dan pembagian tugas anggota kelompok, Membuat repositori organisasi/proyek di GitHub dan mengundang kolaborator, Mengkomplikasi seluruh materi perancangan menjadi dokumen laporan akhir (PDF), dan mengecek semua tugas dari masing-masing anggota apakah sudah dikerjakan dan ikut serta merapikannya. |
| **2** | Natasya Artika Melagis | 241220054 | Front-end Developer | Menganalisis kebutuhan antarmuka pengguna berbasis *mobile-first layout*. Merancang sketsa kasar/*wireframe* untuk Halaman Beranda, Halaman Daftar Gerakan, dan Halaman Detail Gerakan dalam versi perangkat HP dan Laptop. |
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
| **5** | Wirananda Dwi Saputra | 241220023 | QA & Deployment | Melakukan *editing* dan pemotongan (*cutting*) file video/audio panduan per gerakan shalat untuk aset media aplikasi. Menyusun draf awal Dokumen Laporan Progres Pertemuan 2 sebelum difinalisasi bersama Ketua Kelompok. 

### Pertemuan Ke-3: Integrasi Sistem, Fitur Autoplay, & Finalisasi

| No | Nama | NIM | Peran | Rincian Kontribusi |
| :---: | :--- | :---: | :---: | :--- |
| **1** | Unadiya Rahma Tiara | 241220055 | Ketua/PM | Mengoordinasikan integrasi akhir modul *front-end*, *back-end* (`data.php`/`server.js`), dan *database*; memimpin pengujian bersama; menyusun dan merapikan Laporan Akhir Kelompok (BAB IV-VI serta Lampiran); mengoordinasikan pengumpulan tautan ke Google Classroom. |
| **2** | Natasya Artika Melagis | 241220054 | Front-end Developer | Menyelesaikan tampilan `assets/style.css` (*identity-bar*, *navbar* responsif, kartu animasi, palet Mode Anak), memastikan tampilan tetap rapi pada *breakpoint* 900px dan 640px, serta merapikan *step pills* dan *progress bar* pada halaman Daftar Gerakan. |
| **3** | Adrian Fernanda | 241220059 | Back-end Developer | Menyelesaikan `data.php` dan `server.js` sebagai *endpoint* pengambilan data, mengimplementasikan logika SSR pada `index.php` (`window.SERVER_DATA`), serta menuliskan logika navigasi *Next/Previous*, *autoplay* (`startAutoplay`), dan *toggle* video pada `assets/main.js`. |
| **4** | Suci Fitri Andini | 241220056 | Database & Content Engineer | Menyusun dan mengekspor *dump database* (`db_dumps`: kategori, kelompok, gerakan, bacaan), mengisi 26 baris data gerakan (13 Dewasa + 13 Anak) beserta bacaan dan kolom `durasi_autoplay`, serta memastikan kolom sumber terisi rujukan HPT Muhammadiyah. |
| **5** | Wirananda Dwi Saputra | 241220023 | QA, Dokumentasi & Deployment | Melakukan pengujian fungsional dan lintas perangkat, menyusun `start-server.bat` dan `README IMPORT.md`, men-*deploy* aplikasi ke *hosting* daring, memperbarui `README` repositori GitHub, dan menyusun draf BAB IV-VI laporan akhir. |
