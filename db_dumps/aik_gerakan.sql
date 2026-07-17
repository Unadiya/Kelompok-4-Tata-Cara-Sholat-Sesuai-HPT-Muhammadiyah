CREATE DATABASE  IF NOT EXISTS `aik` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `aik`;
-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: aik
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gerakan`
--

DROP TABLE IF EXISTS `gerakan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gerakan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_kategori` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `urutan` smallint(6) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `gambar_url` varchar(255) DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `durasi_autoplay` int(11) DEFAULT 5,
  PRIMARY KEY (`id`),
  KEY `id_kategori` (`id_kategori`),
  CONSTRAINT `gerakan_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gerakan`
--

LOCK TABLES `gerakan` WRITE;
/*!40000 ALTER TABLE `gerakan` DISABLE KEYS */;
INSERT INTO `gerakan` VALUES (1,1,'Niat',1,'Menghadirkan niat di dalam hati untuk melaksanakan sholat ikhlas karena Allah Ta\'ala.','assets/img/dewasa/1_niat.png',NULL,5),(2,1,'Takbiratul Ihram',2,'Berdiri tegak menghadap kiblat, mengangkat kedua tangan sejajar telinga atau bahu seraya mengucapkan takbir.','assets/img/dewasa/2_takbir.png','assets/img/video/2_takbir.mp4',10),(3,1,'Bersedekap',3,'Meletakkan tangan kanan di atas pergelangan tangan kiri di dada, kemudian membaca Doa Iftitah.','assets/img/dewasa/3_bersedekap.png','assets/img/video/3.bersedekap.mp4',20),(4,1,'Berdiri Membaca',4,'Posisi tetap bersedekap, membaca Surat Al-Fatihah dilanjutkan dengan salah satu surat pendek Al-Qur\'an.','assets/img/dewasa/4_membaca.png','assets/img/video/4.membaca.mp4',30),(5,1,'Rukuk',5,'Membungkukkan badan, punggung rata sejajar, tangan memegang lutut dengan jari-jari meregang.','assets/img/dewasa/5_rukuk.png','assets/img/video/5.rukuk.mp4',15),(6,1,'I\'tidal',6,'Bangkit dari rukuk kembali tegak berdiri (tangan dilepaskan ke samping badan atau bersedekap kembali).','assets/img/dewasa/6_itidal.png','assets/img/video/6.itidal.mp4',12),(7,1,'Sujud',7,'Sujud bertumpu pada 7 anggota badan: dahi dan hidung, dua telapak tangan, dua lutut, dan ujung jari kedua kaki.','assets/img/dewasa/7_sujud.png','assets/img/video/7.sujud.mp4',15),(8,1,'Duduk antara dua sujud',8,'Bangkit dari sujud pertama, duduk di atas kaki kiri sedangkan kaki kanan ditegakkan (Duduk Iftirasy).','assets/img/dewasa/8_duduk_antara.png','assets/img/video/8.duduk_antara.mp4',12),(9,1,'Sujud Kedua',9,'Kembali bersujud dengan posisi dan ketumakninahan yang sama seperti sujud yang pertama.','assets/img/dewasa/7_sujud.png','assets/img/video/9.sujud2.mp4',15),(10,1,'Berdiri ke rakaat berikutnya',10,'Bangkit dari sujud kedua menuju berdiri tegak untuk memulai rakaat selanjutnya (boleh bertumpu pada tangan).','assets/img/dewasa/10_berdiri_lagi.png','assets/img/video/2_takbir.mp4',5),(11,1,'Tasyahud Awal (Iftirasy)',11,'Duduk setelah rakaat kedua dengan posisi Iftirasy, jari telunjuk tangan kanan lurus mengacung berisyarat.','assets/img/dewasa/11_tasyahud_awal.png','assets/img/video/11.tasyahud_awal.mp4',20),(12,1,'Tasyahud Akhir (Tawarruk)',12,'Duduk pada rakaat terakhir dengan posisi Tawarruk (pantat menyentuh lantai, kaki kiri diselipkan di bawah kaki kanan).','assets/img/dewasa/12_tasyahud_akhir.png','assets/img/video/12.tasyahud_akhir.mp4',25),(13,1,'Salam',13,'Memalingkan wajah ke kanan sampai pipi kanan terlihat dari belakang, kemudian memalingkan wajah ke kiri.','assets/img/dewasa/13_salam.png','assets/img/video/13.salam.mp4',10),(14,2,'Niat',1,'Berniat di dalam hati untuk sholat dengan ikhlas karena Allah.','assets/img/anak/1_niat.png',NULL,5),(15,2,'Takbiratul Ihram',2,'Berdiri tegak, angkat tangan sampai sejajar telinga lalu mengucap takbir.','assets/img/anak/2_takbir.png','assets/img/video/2_takbir.mp4',10),(16,2,'Bersedekap',3,'Letakkan tangan kanan di atas tangan kiri di dada, lalu membaca doa Iftitah.','assets/img/anak/3_bersedekap.png','assets/img/video/3.bersedekap.mp4',20),(17,2,'Berdiri Membaca',4,'Segala puji bagi Allah, Tuhan semesta alam.','assets/img/anak/4_membaca.png','assets/img/video/4.membaca.mp4',30),(18,2,'Rukuk',5,'Membungkukkan badan dengan lurus, lalu pegang lutut menggunakan kedua tangan.','assets/img/anak/5_rukuk.png','assets/img/video/5.rukuk.mp4',15),(19,2,'I\'tidal',6,'Bangkit berdiri tegak kembali setelah rukuk secara tenang.','assets/img/anak/6_itidal.png','assets/img/video/6.itidal.mp4',12),(20,2,'Sujud',7,'Sujud dengan meletakkan dahi, hidung, kedua telapak tangan, lutut, dan jari kaki di lantai.','assets/img/anak/7_sujud.png','assets/img/video/7.sujud.mp4',15),(21,2,'Duduk antara dua sujud',8,'Bangkit dari sujud lalu duduk dengan tenang di atas kaki kiri.','assets/img/anak/8_duduk_antara.png','assets/img/video/8.duduk_antara.mp4',12),(22,2,'Sujud Kedua',9,'Melakukan sujud yang kedua kalinya sama persis seperti sujud yang pertama.','assets/img/anak/9_sujud2.png','assets/img/video/9.sujud2.mp4',15),(23,2,'Berdiri ke rakaat berikutnya',10,'Bangkit berdiri kembali untuk melanjutkan rakaat sholat berikutnya.','assets/img/anak/10_berdiri_lagi.png',NULL,5),(24,2,'Tasyahud Awal (Iftirasy)',11,'Duduk setelah mendapat dua rakaat, angkat telunjuk tangan kanan untuk berisyarat.','assets/img/anak/11_tasyahud_awal.png','assets/img/video/11.tasyahud_awal.mp4',20),(25,2,'Tasyahud Akhir (Tawarruk)',12,'Duduk di rakaat terakhir dengan menyelipkan kaki kiri ke bawah kaki kanan.','assets/img/anak/12_tasyahud_akhir.png','assets/img/video/12.tasyahud_akhir.mp4',25),(26,2,'Salam',13,'Menengokkan kepala ke arah kanan terlebih dahulu, lalu menengok ke arah kiri.','assets/img/anak/13_salam.png','assets/img/video/13.salam.mp4',10);
/*!40000 ALTER TABLE `gerakan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-17  9:56:10
