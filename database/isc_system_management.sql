-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.19 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for isc_system_management
CREATE DATABASE IF NOT EXISTS `isc_system_management` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `isc_system_management`;

-- Dumping structure for table isc_system_management.entrance_exams
CREATE TABLE IF NOT EXISTS `entrance_exams` (
  `id_EXS` int(11) NOT NULL AUTO_INCREMENT,
  `code_EXS` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `date_EXS` date NOT NULL,
  `idITK` int(11) NOT NULL,
  PRIMARY KEY (`id_EXS`),
  UNIQUE KEY `code_EXS` (`code_EXS`),
  KEY `idITK` (`idITK`),
  CONSTRAINT `FK_entrance_exams_intakes` FOREIGN KEY (`idITK`) REFERENCES `intakes` (`id_ITK`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table isc_system_management.entrance_exams: ~1 rows (approximately)
DELETE FROM `entrance_exams`;
/*!40000 ALTER TABLE `entrance_exams` DISABLE KEYS */;
INSERT INTO `entrance_exams` (`id_EXS`, `code_EXS`, `date_EXS`, `idITK`) VALUES
	(1, 'EXS01', '2017-04-14', 1);
/*!40000 ALTER TABLE `entrance_exams` ENABLE KEYS */;

-- Dumping structure for table isc_system_management.intakes
CREATE TABLE IF NOT EXISTS `intakes` (
  `id_ITK` int(11) NOT NULL AUTO_INCREMENT,
  `name_ITK` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `dayStart_ITK` date NOT NULL,
  `dayEnd_ITK` date NOT NULL,
  `maxQuantity_ITK` int(11) NOT NULL,
  `status_ITK` char(3) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '0: chưa mở, 1: đang học,2: đã hoàn thành,3: hủy do thiếu học viên',
  PRIMARY KEY (`id_ITK`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table isc_system_management.intakes: ~5 rows (approximately)
DELETE FROM `intakes`;
/*!40000 ALTER TABLE `intakes` DISABLE KEYS */;
INSERT INTO `intakes` (`id_ITK`, `name_ITK`, `dayStart_ITK`, `dayEnd_ITK`, `maxQuantity_ITK`, `status_ITK`) VALUES
	(1, 'Khóa 1', '2017-04-11', '2017-07-29', 50, '2'),
	(2, 'Khóa 2', '2017-02-06', '2017-05-31', 50, '2'),
	(3, 'Khóa 3', '2017-06-12', '2017-10-31', 50, '2'),
	(4, 'Khóa 4', '2017-12-18', '2018-05-31', 50, '1'),
	(8, 'Khóa 5', '2018-04-03', '2018-07-31', 50, '1');
/*!40000 ALTER TABLE `intakes` ENABLE KEYS */;

-- Dumping structure for table isc_system_management.majors
CREATE TABLE IF NOT EXISTS `majors` (
  `id_MJR` int(11) NOT NULL AUTO_INCREMENT,
  `code_MJR` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name_MJR` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status_MJR` char(1) NOT NULL DEFAULT '0' COMMENT '0:inactive; 1: active',
  PRIMARY KEY (`id_MJR`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table isc_system_management.majors: ~8 rows (approximately)
DELETE FROM `majors`;
/*!40000 ALTER TABLE `majors` DISABLE KEYS */;
INSERT INTO `majors` (`id_MJR`, `code_MJR`, `name_MJR`, `status_MJR`) VALUES
	(1, 'CN01', 'Web Application Development using .NET', '0'),
	(2, 'CN02', 'Web Application Development using Java', '0'),
	(3, 'CN03', 'Web Application Development using Node.js', '1'),
	(4, 'CN04', 'Web Application Development using PHP', '0'),
	(5, 'CN05', 'Web Application development using RUBY on RAILS', '0'),
	(6, 'CN06', 'Mobile Application Development for Android', '0'),
	(7, 'CN07', 'Mobile Application Development for iOS', '0'),
	(8, 'CN08', 'Software Testing', '0');
/*!40000 ALTER TABLE `majors` ENABLE KEYS */;

-- Dumping structure for table isc_system_management.rooms
CREATE TABLE IF NOT EXISTS `rooms` (
  `id_PHG` int(11) NOT NULL AUTO_INCREMENT,
  `code_PHG` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `kinOf_PHG` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `maxQuantity_PHG` int(11) NOT NULL,
  `active` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_PHG`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- Dumping data for table isc_system_management.rooms: ~7 rows (approximately)
DELETE FROM `rooms`;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` (`id_PHG`, `code_PHG`, `kinOf_PHG`, `maxQuantity_PHG`, `active`) VALUES
	(1, 'QT-L609', 'LAB', 50, '0'),
	(2, 'QT-R702', 'No Comment', 30, '0'),
	(7, 'QT_L610', 'Phòng ISC Management', 20, '0'),
	(8, 'QT-R608', 'asd', 20, '0'),
	(16, 'QT-L444', 'Phòng Vip', 52, '0'),
	(17, 'QT-L501', 'PHGH', 51, '1'),
	(21, 'Phong', 'phong', 0, '0');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;

-- Dumping structure for table isc_system_management.schools
CREATE TABLE IF NOT EXISTS `schools` (
  `id_SCL` int(11) NOT NULL AUTO_INCREMENT,
  `code_SCL` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name_SCL` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `address_SCL` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_SCL` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status_SCL` char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '0: không kích hoạt, 1: kích hoạt',
  PRIMARY KEY (`id_SCL`),
  UNIQUE KEY `code_SCL` (`code_SCL`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table isc_system_management.schools: ~2 rows (approximately)
DELETE FROM `schools`;
/*!40000 ALTER TABLE `schools` DISABLE KEYS */;
INSERT INTO `schools` (`id_SCL`, `code_SCL`, `name_SCL`, `address_SCL`, `contact_SCL`, `status_SCL`) VALUES
	(1, 'DTM', 'Đại học Tài Nguyên và Môi Trường TP HCM', '236B Lê Văn Sỹ, ', '090999999', '0'),
	(2, 'HUFI', 'Đại học Công Nghiệp thực phẩm', '140 Lê Trọng Tấn, P Tây Thạnh, Q. Tân Phú', '06666666', '0');
/*!40000 ALTER TABLE `schools` ENABLE KEYS */;

-- Dumping structure for table isc_system_management.students
CREATE TABLE IF NOT EXISTS `students` (
  `id_STD` int(11) NOT NULL AUTO_INCREMENT,
  `code_STD` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `lastname_STD` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstname_STD` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birth_STD` date NOT NULL,
  `gender_STD` char(1) COLLATE utf8_unicode_ci NOT NULL COMMENT '0: nữ , 1: nam',
  `email_STD` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address_STD` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status_STD` char(3) COLLATE utf8_unicode_ci NOT NULL COMMENT '0: đang học, 1: đã tốt nghiệp, 2: nghỉ học, 3: bảo lưu',
  `avatar_STD` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idSCL` int(11) NOT NULL,
  PRIMARY KEY (`id_STD`),
  UNIQUE KEY `code_STD` (`code_STD`),
  KEY `idSCL` (`idSCL`),
  CONSTRAINT `FK_students_schools` FOREIGN KEY (`idSCL`) REFERENCES `schools` (`id_SCL`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table isc_system_management.students: ~0 rows (approximately)
DELETE FROM `students`;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id_STD`, `code_STD`, `lastname_STD`, `firstname_STD`, `birth_STD`, `gender_STD`, `email_STD`, `address_STD`, `status_STD`, `avatar_STD`, `idSCL`) VALUES
	(1, 'ISC04-18-0-1001', 'Trần Tiến', 'Đạt', '1996-10-20', '1', NULL, NULL, '0', NULL, 1);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Dumping structure for table isc_system_management.subjects
CREATE TABLE IF NOT EXISTS `subjects` (
  `id_SBJ` int(11) NOT NULL AUTO_INCREMENT,
  `code_SBJ` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `name_SBJ` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hour_SBJ` int(11) NOT NULL,
  `status_SBJ` char(3) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1' COMMENT '0:inactive, 1:active',
  `kindOfRoom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_SBJ`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table isc_system_management.subjects: ~8 rows (approximately)
DELETE FROM `subjects`;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` (`id_SBJ`, `code_SBJ`, `name_SBJ`, `hour_SBJ`, `status_SBJ`, `kindOfRoom`) VALUES
	(8, 'G03', 'Professional Speaking', 24, '0', 'Phòng học'),
	(9, 'G04', 'Technical Writing', 24, '1', 'Thuong'),
	(10, 'G05', 'Software Testing Process', 12, '0', 'LAB'),
	(11, 'G06', 'Database Management Systems', 24, '0', 'LAB'),
	(12, 'G07', 'Front-End', 36, '1', 'LAB'),
	(13, 'J01', 'Node JS Back_End', 36, '2', 'LAB'),
	(14, 'OnJob', 'On-job training', 180, '2', 'LAB'),
	(33, 'G01', 'Technical Writing', 24, '1', 'Phòng học'),
	(34, 'c', 'c', 1, '0', '1');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;

-- Dumping structure for table isc_system_management.subject_entrance_exams
CREATE TABLE IF NOT EXISTS `subject_entrance_exams` (
  `id_SEE` int(11) NOT NULL AUTO_INCREMENT,
  `code_SEE` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name_SEE` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `describe_SEE` longtext COLLATE utf8_unicode_ci,
  `idEXS` int(11) NOT NULL,
  PRIMARY KEY (`id_SEE`),
  KEY `idEXS` (`idEXS`),
  CONSTRAINT `FK_subject_entrance_exams_entrance_exams` FOREIGN KEY (`idEXS`) REFERENCES `entrance_exams` (`id_EXS`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table isc_system_management.subject_entrance_exams: ~2 rows (approximately)
DELETE FROM `subject_entrance_exams`;
/*!40000 ALTER TABLE `subject_entrance_exams` DISABLE KEYS */;
INSERT INTO `subject_entrance_exams` (`id_SEE`, `code_SEE`, `name_SEE`, `describe_SEE`, `idEXS`) VALUES
	(1, 'TT', 'Technical Testing', 'SQL Sever, HTML, OOP', 1),
	(2, 'ET', 'English Testing', 'as', 1);
/*!40000 ALTER TABLE `subject_entrance_exams` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
