Folder ini berisi dump database AIK yang dipakai oleh aplikasi sholat.

File yang tersedia di folder db_dumps:
- aik_full.sql — dump lengkap untuk membuat dan mengisi database `aik`.
- aik_kategori.sql, aik_kelompok.sql, aik_gerakan.sql, aik_bacaan.sql, aik_routines.sql — file import terpisah.

Petunjuk impor (Windows, menggunakan client MySQL/MariaDB):

1. Buka terminal PowerShell dan masuk ke folder proyek:

```powershell
cd "d:\sholat"
```

2. Impor dump menggunakan mysql (ganti `root` dan password sesuai setup Anda):

```powershell
mysql -u root -p < .\db_dumps\aik_full.sql
```

Atau impor ke database tertentu:

```powershell
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS aik CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
mysql -u root -p aik < .\db_dumps\aik_full.sql
```

3. Verifikasi di MySQL:

```powershell
mysql -u root -p -e "SHOW DATABASES LIKE 'aik';"
mysql -u root -p -e "USE aik; SHOW TABLES;"
```

Catatan:
- Aplikasi Node.js di `d:\sholat\server.js` mengharapkan database `aik`.
- Jika Anda memakai variabel lingkungan, atur `DB_HOST`, `DB_USER`, `DB_PASS`, dan `DB_NAME` sesuai kebutuhan.