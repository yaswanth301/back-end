-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2022 at 06:29 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `audio_player`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_new_audio` (IN `title` VARCHAR(50), IN `artistName` VARCHAR(50), IN `audioUrl` VARCHAR(200), IN `thumbnailUrl` VARCHAR(200), IN `gender` VARCHAR(8))  READS SQL DATA
    DETERMINISTIC
BEGIN
INSERT INTO music (title,artist_name,audio_url,thumbnail,gender) VALUES (title, artistName,audioUrl,thumbnailUrl,gender); 

SELECT "New audio added successfully" as Msg;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_audios` ()  SELECT * from music$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `artist_name` varchar(50) NOT NULL,
  `audio_url` varchar(200) NOT NULL,
  `thumbnail` varchar(200) NOT NULL,
  `gender` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `music`
--

INSERT INTO `music` (`id`, `title`, `artist_name`, `audio_url`, `thumbnail`, `gender`) VALUES
(1, 'policodu', 'unknown', '/audio/Policeodu.mp3', '/thumbnail/policeodu.jpg', 'male'),
(2, 'policodu', 'unknown', '/audio/Policeodu.mp3', '/thumbnail/policeodu.jpg', 'male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
