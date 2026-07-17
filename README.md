# 🕋 Tuntunan Tata Cara Shalat Sesuai HPT Muhammadiyah

Aplikasi web interaktif pembelajaran tata cara shalat fardhu lima waktu (Subuh sampai Isya) berbasis mobile-first, yang disusun berdasarkan putusan resmi **Himpunan Putusan Tarjih (HPT) Muhammadiyah**. Proyek ini dikembangkan untuk memenuhi tugas mata kuliah **Pengembangan Aplikasi Web / Praktikum Pemrograman Web**.

---

## 🏫 Identitas Akademik
* **Mata Kuliah:** Pengembangan Aplikasi Web / Praktikum Pemrograman Web
* **Dosen Pengampu:** Dedy Susanto, S.Pd.I., M.M.
* **Institusi:** Universitas Muhammadiyah
* **Tahun Akademik:** 2026

---

## 👥 Kelompok 4 - Anggota & Pembagian Peran
Berdasarkan keputusan internal tim, proses rekayasa sistem dibagi secara terstruktur sebagai berikut:

1. **Unadiya Rahma Tiara (Project Manager)**
   * *Tugas:* Manajemen repositori, kontrol integrasi sistem, dokumentasi proyek, dan koordinasi alur kerja tim.
2. **Adrian Fernanda (Back-end & Full Coder)**
   * *Tugas:* Menuliskan keseluruhan baris kode aplikasi (Logika PHP, Routing backend, API data dinamis, Struktur HTML, presentasi CSS Grid/Flexbox, dan skrip interaktivitas Javascript).
3. **Suci Fitri Andini (Database & Content Engineer)**
   * *Tugas:* Merancang arsitektur database relasional, mengolah data tekstual Arab (charset `utf8mb4`), teks Latin, serta validasi konten keagamaan sesuai HPT Muhammadiyah.
4. **Wirananda Dwi Saputra (QA, Multimedia & Deployment)**
   * *Tugas:* Melakukan kurasi, pemotongan (*cutting*), kompresi audio makhraj bacaan format MP3, optimasi gambar gerakan, serta penanganan rilis aplikasi web.
5. **Natasya Artika Melagis (Front-end Planner & UI/UX Validator)**
   * *Tugas:* Merancang kerangka *user flow*, konsep visual antarmuka (*wireframing*), serta melakukan pengujian kualitas responsivitas pada perangkat seluler (*mobile testing*).

---

## 🛠️ Fitur Utama Aplikasi
* **Rujukan HPT Valid:** Seluruh bacaan bersumber dari dokumen resmi Majelis Tarjih Muhammadiyah.
* **Penyajian Multi-lapis (Multilinear Reading):** Menampilkan variasi doa HPT (seperti 3 lapis potongan doa Iftitah) dalam satu rangkaian gerakan shalat.
* **Mode Pengguna Ganda:** Pilihan konten dinamis untuk mode Dewasa (terjemahan lengkap) dan mode Anak (terjemahan ringkas ramah anak).
* **Multimedia Autoplay:** Audio makhraj bacaan `.mp3` dan video peragaan `.mp4` berputar otomatis (*sync*) begitu pengguna bergeser menggunakan tombol Navigasi (Next/Prev).
* **Header Identitas Permanen:** Menyertakan informasi Nama Kelompok, Prodi, Mata Kuliah, dan Dosen Pengampu secara konsisten pada bagian atas aplikasi.

---

## 📂 Struktur Direktori Proyek
```text
tuntunan-sholat-aik/
├── assets/
│   ├── css/          # File style.css responsif (Adrian)
│   ├── js/           # Skrip media-player.js kontrol autoplay (Adrian)
│   ├── img/          # Aset gambar panduan visual posisi tubuh (Wirananda)
│   └── audio/        # Potongan audio bacaan shalat MP3 (Wirananda)
├── config/
│   └── database.php  # Berkas koneksi MySQL PDO/MySQLi (Adrian)
├── core/
│   ├── PrayerController.php  # Logika pengambil data index shalat (Adrian)
│   └── api.php               # Endpoint JSON data gerakan dinamis (Adrian)
├── database/
│   ├── schema.sql    # Struktur pembuatan tabel basis data (Suci)
│   └── seeder.sql    # Data teks HPT Muhammadiyah lengkap (Suci)
├── views/
│   └── prayer-view.php # Halaman antarmuka utama aplikasi (Adrian)
├── docs/             # Dokumentasi wireframe dan laporan uji mobile (Natasya)
├── index.php         # Entry point / routing utama sistem (Adrian)
└── README.md         # File dokumentasi utama ini (Unadiya)
