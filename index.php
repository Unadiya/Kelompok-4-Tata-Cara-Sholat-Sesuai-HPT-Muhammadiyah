<?php
$config = file_exists(__DIR__ . '/db_config.php') ? include __DIR__ . '/db_config.php' : [];
$host = getenv('DB_HOST') ?: ($config['host'] ?? '127.0.0.1');
$user = getenv('DB_USER') ?: ($config['user'] ?? 'root');
$pass = getenv('DB_PASS') ?: ($config['pass'] ?? '');
$db   = getenv('DB_NAME') ?: ($config['db'] ?? 'aik');
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$serverData = ['error' => 'Database connection failed', 'message' => 'Tidak dapat terhubung ke database.'];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    $stmt = $pdo->query('SELECT id, id_kategori, nama, urutan, deskripsi, gambar_url, video_url, durasi_autoplay FROM gerakan ORDER BY id_kategori, urutan');
    $gerakanRows = $stmt->fetchAll();
    $stmt = $pdo->query('SELECT id_gerakan, urutan, teks_arab, teks_latin, terjemahan, terjemahan_ringkas, audio_url, sumber FROM bacaan ORDER BY id_gerakan, urutan');
    $bacaanRows = $stmt->fetchAll();
    $serverData = ['gerakan' => $gerakanRows, 'bacaan' => $bacaanRows];
} catch (PDOException $e) {
    $serverData = ['error' => 'Database connection failed', 'message' => $e->getMessage()];
}
$serverJson = json_encode($serverData, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_UNICODE);
?>
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tata Cara Sholat — Sesuai HPT Muhammadiyah</title>
<link rel="stylesheet" href="assets/style.css">
<script>window.SERVER_DATA = <?php echo $serverJson; ?>;</script>
</head>
<body>

<!-- ===== IDENTITY BAR ===== -->
<div class="identity-bar">
  <div class="identity-inner">
    <div class="identity-left">
      <span class="kelompok">🕌 Kelompok 4 — Tata Cara Sholat HPT Muhammadiyah</span>
      <span class="prodi">Program Studi Teknik Informatika</span>
    </div>
    <div class="identity-right">
      <div class="identity-item">
        <div class="label">Mata Kuliah</div>
        <div class="value">Pengembangan Aplikasi Web</div>
      </div>
      <div class="identity-item">
        <div class="label">Dosen Pengampu</div>
        <div class="value">Dedy Susanto, S.Pd.I., M.M.</div>
      </div>
    </div>
  </div>
</div>

<!-- ===== NAVBAR ===== -->
<header class="navbar">
  <div class="navbar-inner">
    <div class="logo">
      <div class="logo-icon">🕌</div>
      <div class="logo-text">
        <h1>Tata Cara Sholat</h1>
        <p>Sesuai HPT Muhammadiyah</p>
      </div>
    </div>
    <nav class="nav-links" id="navLinks">
      <a href="#" id="nav-beranda" onclick="showPage('beranda'); return false;">Beranda</a>
      <a href="#" id="nav-gerakan" onclick="showPage('gerakan'); return false;">Daftar Gerakan</a>
      <a href="#" id="nav-tentang" onclick="showPage('tentang'); return false;">Tentang Kami</a>
    </nav>
    <button class="nav-toggle" id="navToggle">&#9776;</button>
  </div>
</header>


<!-- ==========================================
     HALAMAN: BERANDA
     ========================================== -->
<div class="page" id="page-beranda">

  <!-- HERO -->
  <div class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <h2>Belajar Sholat<br>Mudah &amp; Benar</h2>
        <p>Panduan lengkap dengan audio, gambar, gerakan, dan video demonstrasi sesuai Himpunan Putusan Tarjih Muhammadiyah.</p>
        <button class="btn-hero" onclick="showPage('gerakan')">📖 Mulai Belajar</button>
      </div>
      <div class="hero-img">
        <img class="hero-img-src" src="assets/img/sholat.jpg" alt="Ilustrasi Sholat">
      </div>
    </div>
  </div> 

  <!-- ANGGOTA KELOMPOK -->
  <section class="anggota-section">
    <div class="container">
      <div class="section-label" style="display:block;text-align:center;">Tim Pengembang</div>
      <h2 class="section-title">Anggota Kelompok</h2>
      <p class="section-sub">Kelompok 4 — Teknik Informatika</p>

      <div class="fan-slider-wrap">
        <button class="fan-btn prev" onclick="prevSlide()" aria-label="Sebelumnya">&#8249;</button>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;">
          <div class="fan-track" id="fanTrack"></div>
          <div class="fan-info"  id="fanInfo"></div>
          <div class="fan-dots"  id="fanDots"></div>
        </div>
        <button class="fan-btn next" onclick="nextSlide()" aria-label="Berikutnya">&#8250;</button>
      </div>

      <!-- DOSEN -->
      <div class="dosen-section">
        <div class="dosen-avatar-wrap">
          <div class="dosen-avatar">👨‍🏫</div>
          <span class="dosen-badge">Dosen</span>
        </div>
        <div class="dosen-info">
          <div class="dosen-label">Dosen Pengampu</div>
          <div class="dosen-name">Dedy Susanto, S.Pd.I., M.M.</div>
          <div class="dosen-matkul"><strong>Pengembangan Aplikasi Web</strong><br>Program Studi Teknik Informatika</div>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">@ Prodi Teknik Informatika — Kelompok 4</footer>
</div>


<!-- ==========================================
     HALAMAN: DAFTAR GERAKAN (animasi)
     ========================================== -->
<div class="page" id="page-gerakan">

  <div class="animasi-wrap">

    <!-- MODE SWITCH -->
    <div class="mode-switch">
      <button class="mode-btn active" data-mode="dewasa" onclick="setAnimMode('dewasa')">📖 Mode Dewasa</button>
      <button class="mode-btn"        data-mode="anak"   onclick="setAnimMode('anak')">🌟 Mode Anak-anak</button>
    </div>

    <div class="anim-card">

      <h2 class="anim-h1">Animasi Gerakan Sholat</h2>
      <p class="anim-subtitle">Belajar Gerakan dan Bacaan Sholat · Sesuai HPT Muhammadiyah</p>

      <!-- COUNTER + PROGRESS -->
      <div class="anim-counter" id="animCounter">1 / 13</div>
      <div class="anim-progress-wrap">
        <div class="anim-progress-bar" id="animProgressBar" style="width:7.69%"></div>
      </div>

      <!-- JUDUL & DESC -->
      <h3 class="anim-title" id="animTitle"></h3>
      <p  class="anim-desc"  id="animDesc"></p>

      <!-- GAMBAR -->
      <div class="anim-img-area">
        <img id="animGambar" src="" alt="Gerakan Sholat"
             onerror="this.style.display='none';document.getElementById('animPlaceholder').style.display='flex'">
        <div class="anim-img-placeholder" id="animPlaceholder" style="display:none;">
          <span>&#129463;</span><span>Gambar belum tersedia</span>
          <small>Taruh file di assets/img/</small>
        </div>
      </div>

      <!-- TOMBOL VIDEO -->
      <div style="text-align:center;margin-top:10px;">
        <button class="btn-video" id="btnVideo" onclick="toggleAnimVideo()">&#9654; Lihat Video Demonstrasi</button>
      </div>

      <!-- VIDEO -->
      <div class="video-wrap" id="videoWrap">
        <iframe id="videoFrame" src="" allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
      </div>

      <!-- AUDIO -->
      <audio id="animAudio" controls style="width:100%;margin-top:14px;border-radius:50px;"></audio>

    </div><!-- end anim-card -->

    <!-- BACAAN -->
    <div class="bacaan-box" id="bacaanBox">
      <div class="bacaan-arab"   id="bacaanArab"></div>
      <div class="bacaan-latin"  id="bacaanLatin"></div>
      <div class="bacaan-arti arti-panjang" id="bacaanArtiPanjang"></div>
      <div class="bacaan-arti arti-ringkas" id="bacaanArtiRingkas" style="display:none;"></div>
      <div class="no-bacaan"    id="noBacaan" style="display:none;">Gerakan ini tidak memiliki bacaan khusus</div>
      <div style="text-align:center;margin-top:10px;">
        <span class="sumber-badge" id="sumberBadge"></span>
      </div>
    </div>

    <!-- AUTOPLAY ROW -->
    <div class="autoplay-row">
      <span class="autoplay-label">Autoplay berikutnya dalam:</span>
      <span class="autoplay-timer" id="autoplayTimer">-</span>
      <button class="btn-autoplay" id="btnAutoplay" onclick="toggleAutoplay()">&#9208; Jeda</button>
    </div>

    <!-- CONTROLS -->
    <div class="anim-controls">
      <button class="btn-anim prev-anim" onclick="animPrev()">&#9198; Prev</button>
      <button class="btn-anim play-anim" onclick="toggleAutoplay()">&#9199; Play / Pause</button>
      <button class="btn-anim next-anim" onclick="animNext()">Next &#9197;</button>
    </div>

    <!-- STEP PILLS -->
    <div class="anim-steps" id="animSteps"></div>

  </div><!-- end animasi-wrap -->

  <footer class="site-footer">@ Prodi Teknik Informatika — Kelompok 4</footer>
</div>

<!-- HALAMAN - TETNANG KAMI -->
<div class="page" id="page-tentang">
  <div class="container" style="padding:48px 28px 64px;">

    <div class="about-grid">
      <div class="about-text">
        <div class="section-label">Tentang Project</div>
        <h2 class="about-h2">Tentang Aplikasi<br>Tata Cara Sholat</h2>
        <p>Aplikasi ini dibuat sebagai tugas mata kuliah <strong>Pengembangan Aplikasi Web</strong> oleh Kelompok 4, Program Studi Teknik Informatika. Tujuannya membantu umat Muslim mempelajari tata cara sholat yang benar sesuai Himpunan Putusan Tarjih (HPT) Muhammadiyah.</p>
        <p>Panduan disusun secara sistematis mulai dari niat, gerakan per gerakan, bacaan arab, hingga salam penutup — agar mudah dipahami oleh semua kalangan.</p>
        <div class="about-badge-list">
          <div class="about-badge"><span class="ic">👥</span><div><strong>Kelompok 4</strong><p>Program Studi Teknik Informatika</p></div></div>
          <div class="about-badge"><span class="ic">📚</span><div><strong>Mata Kuliah</strong><p>Pengembangan Aplikasi Web</p></div></div>
          <div class="about-badge"><span class="ic">👨‍🏫</span><div><strong>Dosen Pengampu</strong><p>Dedy Susanto, S.Pd.I., M.M.</p></div></div>
          <div class="about-badge"><span class="ic">📖</span><div><strong>Sumber Rujukan</strong><p>Himpunan Putusan Tarjih Muhammadiyah (HPT)</p></div></div>
        </div>
      <div class="about-img-placeholder">
        <img class="about-img-src" src="assets/img/masjid.png" alt="Ilustrasi Masjid">
      </div>

    <!-- ANGGOTA DI TENTANG -->
    <div style="margin-top:64px;">
      <div class="section-label" style="display:block;text-align:center;">Tim Pengembang</div>
      <h2 class="section-title" style="text-align:center;margin-bottom:6px;">Anggota Kelompok 4</h2>
      <p class="section-sub" style="text-align:center;margin:0 auto 40px;">Mahasiswa yang mengembangkan aplikasi ini.</p>
      <div id="anggotaGrid" class="anggota-card-grid"></div>

      <!-- DOSEN -->
      <div class="dosen-section" style="margin-top:32px;">
        <div class="dosen-avatar-wrap">
          <div class="dosen-avatar">👨‍🏫</div>
          <span class="dosen-badge">Dosen</span>
        </div>
        <div class="dosen-info">
          <div class="dosen-label">Dosen Pengampu</div>
          <div class="dosen-name">Dedy Susanto, S.Pd.I., M.M.</div>
          <div class="dosen-matkul"><strong>Pengembangan Aplikasi Web</strong><br>Program Studi Teknik Informatika</div>
        </div>
      </div>
    </div>
  </div>
  <footer class="site-footer">@ Prodi Teknik Informatika — Kelompok 4</footer>
</div>


<!-- JS -->
<script src="assets/main.js"></script>
</body>
</html>