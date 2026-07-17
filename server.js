const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'aik',
  charset: 'utf8mb4',
  timezone: 'Z',
};

const pool = mysql.createPool(dbConfig);

app.use(express.static(path.join(__dirname)));

app.get('/api/data', async (req, res) => {
  try {
    const [gerakanRows] = await pool.query(
      'SELECT id, id_kategori, nama, urutan, deskripsi, gambar_url, video_url, durasi_autoplay FROM gerakan ORDER BY id_kategori, urutan'
    );
    const [bacaanRows] = await pool.query(
      'SELECT id, id_gerakan, urutan, teks_arab, teks_latin, terjemahan, terjemahan_ringkas, audio_url, sumber FROM bacaan ORDER BY id_gerakan, urutan'
    );
    const [kategoriRows] = await pool.query('SELECT id, nama FROM kategori ORDER BY id');
    const [kelompokRows] = await pool.query(
      'SELECT nama_kelompok AS nama, prodi, mata_kuliah AS mata_kuliah, dosen, link_github AS link_github FROM kelompok ORDER BY id'
    );

    res.json({
      gerakan: gerakanRows,
      bacaan: bacaanRows,
      kategori: kategoriRows,
      kelompok: kelompokRows,
    });
  } catch (error) {
    console.error('API /api/data error:', error);
    res.status(500).json({ error: 'Database access failed', message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Sholat app listening on http://localhost:${port}`);
  console.log(`Database: ${dbConfig.database} @ ${dbConfig.host}`);
});
