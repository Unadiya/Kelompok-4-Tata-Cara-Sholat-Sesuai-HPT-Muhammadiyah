# 🕋 Aplikasi Web Panduan Shalat Fardhu (HPT Muhammadiyah)

Aplikasi web interaktif pembelajaran tata cara shalat fardhu lima waktu (Subuh sampai Isya) berbasis *mobile-first*, yang disusun berdasarkan putusan resmi Himpunan Putusan Tarjih (HPT) Muhammadiyah. Proyek ini dikembangkan untuk memenuhi tugas mata kuliah Pengembangan Aplikasi Web / Praktikum Pemrograman Web.

🚀 **Live Demo:** [Teks ini diganti dengan Link Domain Kalian Nanti]

## 🏫 Identitas Akademik
*   **Mata Kuliah:** Pengembangan Aplikasi Web / Praktikum Pemrograman Web
*   **Dosen Pengampu:** Dedy Susanto, S.Pd.I., M.M.
*   **Institusi:** Universitas Muhammadiyah
*   **Tahun Akademik:** 2026

## 👥 Kelompok 4 - Anggota & Pembagian Peran
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
    *   
## ✨ Fitur Utama Aplikasi
*   **Rujukan HPT Valid:** Seluruh bacaan bersumber dari dokumen resmi Majelis Tarjih Muhammadiyah.
*   **Penyajian Multi-lapis (*Multilinear Reading*):** Menampilkan variasi doa HPT (seperti 3 lapis potongan doa Iftitah) dalam satu rangkaian gerakan shalat.
*   **Mode Pengguna Ganda:** Pilihan konten dinamis untuk mode Dewasa (terjemahan lengkap) dan mode Anak (terjemahan ringkas ramah anak).
*   **Multimedia Autoplay:** Audio makhraj bacaan `.mp3` dan video peragaan `.mp4` berputar otomatis (*sync*) begitu pengguna bergeser menggunakan tombol Navigasi (Next/Prev).
*   **Header Identitas Permanen:** Menyertakan informasi Nama Kelompok, Prodi, Mata Kuliah, dan Dosen Pengampu secara konsisten pada bagian atas aplikasi.

## 🎙️ Daftar Aset Audio & Video (Wirananda)

*   **Audio Bacaan Shalat (Lokal):** `takbir.mp3`, `iftitah.mp3`, `ruku.mp3`, `sujud.mp3`, `tahiyat.mp3`, `salam.mp3`
*   **Video Panduan (Lokal):** `video_tata_cara_sholat.mp4`
> ⚠️ **Catatan Teknis:** Semua file media di atas disimpan secara lokal di laptop karena ukurannya yang besar untuk batas unggah GitHub. Aset tersebut akan diunggah langsung ke server (cPanel/File Manager) pada saat proses web deployment/hosting dilakukan.
