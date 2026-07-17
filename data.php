<?php
header('Content-Type: application/json; charset=utf-8');

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

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed', 'message' => $e->getMessage()]);
    exit;
}

try {
    $stmt = $pdo->query('SELECT id, id_kategori, nama, urutan, deskripsi, gambar_url, video_url, durasi_autoplay FROM gerakan ORDER BY id_kategori, urutan');
    $gerakanRows = $stmt->fetchAll();

    $stmt = $pdo->query('SELECT id, id_gerakan, urutan, teks_arab, teks_latin, terjemahan, terjemahan_ringkas, audio_url, sumber FROM bacaan ORDER BY id_gerakan, urutan');
    $bacaanRows = $stmt->fetchAll();

    $stmt = $pdo->query('SELECT id, nama FROM kategori ORDER BY id');
    $kategoriRows = $stmt->fetchAll();

    $stmt = $pdo->query('SELECT nama_kelompok AS nama, prodi, mata_kuliah AS mata_kuliah, dosen, link_github AS link_github FROM kelompok ORDER BY id');
    $kelompokRows = $stmt->fetchAll();

    echo json_encode([
        'gerakan' => $gerakanRows,
        'bacaan'  => $bacaanRows,
        'kategori'=> $kategoriRows,
        'kelompok'=> $kelompokRows,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Query failed', 'message' => $e->getMessage()]);
    exit;
}
