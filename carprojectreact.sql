-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2021 at 12:35 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carprojectreact`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `car_info`
--

CREATE TABLE `car_info` (
  `car_id` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `make` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `status` int(4) NOT NULL,
  `description` varchar(8000) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `made_year` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `date` date NOT NULL,
  `fuel` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `transition` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `warranty` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `car_info`
--

INSERT INTO `car_info` (`car_id`, `make`, `model`, `status`, `description`, `made_year`, `cost`, `date`, `fuel`, `transition`, `warranty`) VALUES
('2448-D', 'Mirage Range', 'Mirage Range', 1, 'This 2018 model car is Brilliant Black Crystal Pearlcoat with a Black/Diesel Gray interior. Buy confidence knowing Jeep Dodge Ram Surprise has been exceeding customer expectations for many years and always provide customers with a great value!\n\nSit amet c', 2009, 450, '2021-03-17', 'Hybrid', 'Manual', 'Yes'),
('2478-H', 'Forester Subaru', 'Subaru', 1, 'This 2018 model car is Brilliant Black Crystal Pearlcoat with a Black/Diesel Gray interior. Buy confidence knowing Jeep Dodge Ram Surprise has been exceeding customer expectations for many years and always provide customers with a great value!\n\nSit amet c', 2009, 490, '2021-03-15', 'Hybrid', 'Manual', 'Yes'),
('4750-H', 'Mirage Range', 'Mirage Range', 1, 'This 2018 model car is Brilliant Black Crystal Pearlcoat with a Black/Diesel Gray interior. Buy confidence knowing Jeep Dodge Ram Surprise has been exceeding customer expectations for many years and always provide customers with a great value!\n\nSit amet c', 2020, 480, '2021-03-18', 'Electric', 'Automatic', 'Yes'),
('478-H', 'Mitsubishi', 'Mitsubishi Lancer', 1, 'This 2018 model car is Brilliant Black Crystal Pearlcoat with a Black/Diesel Gray interior. Buy confidence knowing Jeep Dodge Ram Surprise has been exceeding customer expectations for many years and always provide customers with a great value!\n\nSit amet c', 2009, 470, '2021-03-16', 'Gas', 'Manual', 'Yes'),
('asdasd', 'asdsad', 'ad', 1, 'lorem !!', 2009, 450, '2021-03-26', 'Electric', 'Manual', 'Yes'),
('car2020', 'asdsad', 'asdasd', 1, 'lorem!', 2040, 450, '2021-03-20', 'Electric', 'Manual', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `car_pic_style`
--

CREATE TABLE `car_pic_style` (
  `car_style_id` int(11) NOT NULL,
  `car_id` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `color` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `car_pic_style`
--

INSERT INTO `car_pic_style` (`car_style_id`, `car_id`, `path`, `color`) VALUES
(30, '2478-H', 'uploaded/604fa351865167.39143142.jpg', 'black'),
(31, '2478-H', 'uploaded/604fa3519239c6.84022488.jpg', 'blue'),
(32, '2478-H', 'uploaded/604fa3519a3838.57639268.jpg', 'brown'),
(33, '478-H', 'uploaded/604fa922e637e2.77914844.jpg', 'black'),
(34, '478-H', 'uploaded/604fa923408026.09489228.jpg', 'white'),
(35, '478-H', 'uploaded/604fa9234b7017.35107144.jpg', 'silver'),
(36, '478-H', 'uploaded/604fa92363c9b9.30622588.jpg', 'red'),
(37, '478-H', 'uploaded/604fa9236bfeb9.68173382.jpg', 'blue'),
(55, '2448-D', 'uploaded/6050afbe8e5391.86049902.jpg', 'black'),
(56, '2448-D', 'uploaded/6050afbe9ab246.41931481.jpg', 'blue'),
(57, '2448-D', 'uploaded/6050afbea2efb6.67370115.jpg', 'brown'),
(58, '2448-D', 'uploaded/6050afbeaaf9b8.98190327.jpg', 'pink'),
(59, '2448-D', 'uploaded/6050afbeb5e111.10499505.jpg', 'white'),
(60, '2448-D', 'uploaded/6050afbed3aa24.55799419.jpg', 'red'),
(61, '2448-D', 'uploaded/6050b001c2b276.41367074.jpg', 'black'),
(62, '2448-D', 'uploaded/6050b001d477a4.61206294.jpg', 'blue'),
(63, '2448-D', 'uploaded/6050b001df2650.52330820.jpg', 'brown'),
(64, '2448-D', 'uploaded/6050b002039c90.33852975.jpg', 'pink'),
(65, '2448-D', 'uploaded/6050b002142246.81549294.jpg', 'white'),
(66, '2448-D', 'uploaded/6050b0021bfde7.46589682.jpg', 'red'),
(67, '2448-D', 'uploaded/6050b02d864d59.15134904.jpg', 'black'),
(68, '2448-D', 'uploaded/6050b02d93c1b5.61980956.jpg', 'blue'),
(69, '2448-D', 'uploaded/6050b02dac2083.93050490.jpg', 'brown'),
(70, '2448-D', 'uploaded/6050b02db45ac5.77603787.jpg', 'pink'),
(71, '2448-D', 'uploaded/6050b02dbc6100.09198446.jpg', 'white'),
(72, '2448-D', 'uploaded/6050b02dc4a105.47491721.jpg', 'red'),
(73, '2448-D', 'uploaded/6050b0354f1b74.07147881.jpg', 'black'),
(74, '2448-D', 'uploaded/6050b0356376f5.82268919.jpg', 'blue'),
(75, '2448-D', 'uploaded/6050b0356b25d2.37469125.jpg', 'brown'),
(76, '2448-D', 'uploaded/6050b035732835.00151937.jpg', 'pink'),
(77, '2448-D', 'uploaded/6050b0357b6cf4.12769468.jpg', 'white'),
(78, '2448-D', 'uploaded/6050b0358374c4.36464689.jpg', 'red'),
(79, '2448-D', 'uploaded/6050b0400a2cd6.97098534.jpg', 'black'),
(80, '2448-D', 'uploaded/6050b0401ce0f1.11531061.jpg', 'blue'),
(81, '2448-D', 'uploaded/6050b040270c57.91354187.jpg', 'brown'),
(82, '2448-D', 'uploaded/6050b0402fa895.08599049.jpg', 'pink'),
(83, '2448-D', 'uploaded/6050b040402fa8.41130603.jpg', 'white'),
(84, '2448-D', 'uploaded/6050b040507e12.37752751.jpg', 'red'),
(85, '4750-H', 'uploaded/6050b10dbca800.62746224.jpg', 'blue'),
(86, '4750-H', 'uploaded/6050b10e1cffd9.65541137.jpg', 'black'),
(87, '4750-H', 'uploaded/6050b10e298d21.00186049.jpg', 'brown'),
(88, '4750-H', 'uploaded/6050b10e31dbf2.48186717.jpg', 'pink'),
(89, '4750-H', 'uploaded/6050b10e3c88f8.37258958.jpg', 'white'),
(90, '4750-H', 'uploaded/6050b10e44cdc6.04977494.jpg', 'red'),
(91, 'asdasd', 'uploaded/6055060970d009.52432494.jpg', 'blue'),
(92, 'asdasd', 'uploaded/60550609787484.43587578.jpg', 'anything!'),
(93, 'car2020', 'uploaded/605507d47b69f5.80835833.jpg', 'b'),
(94, 'car2020', 'uploaded/605507d48cf101.99240650.jpg', 'c'),
(95, 'car2020', 'uploaded/605507d49a9fd3.20078145.jpg', 'anycolor_');

-- --------------------------------------------------------

--
-- Table structure for table `customer_info`
--

CREATE TABLE `customer_info` (
  `customer_id` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `license` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `register_date` date NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `customer_info`
--

INSERT INTO `customer_info` (`customer_id`, `password`, `full_name`, `license`, `phone`, `email`, `register_date`, `status`) VALUES
('bashar', '$2y$10$s6ls7lkiOmWgWxoDLJ.POeYSthqZivicH1yRW7b/YOJKaFxRd7Pu6', 'bashar ali odeh', '4asd7', '0568478947', 'basharodehasd8@hotmail.com', '2021-03-19', 1);

-- --------------------------------------------------------

--
-- Table structure for table `deals`
--

CREATE TABLE `deals` (
  `deal_id` int(11) NOT NULL,
  `customer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `car_style_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` varchar(30) NOT NULL,
  `cost` int(11) NOT NULL,
  `pickup_location` varchar(252) NOT NULL,
  `dropoff_location` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deals`
--

INSERT INTO `deals` (`deal_id`, `customer_id`, `car_style_id`, `start_date`, `end_date`, `status`, `cost`, `pickup_location`, `dropoff_location`) VALUES
(140, 'bashar', 86, '2021-03-19', '2021-03-27', 'accept', 490, 'tulkarm', 'tulkarm');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `report_id` int(11) NOT NULL,
  `customer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `car_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `message` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`report_id`, `customer_id`, `car_id`, `message`, `status`) VALUES
(49, 'bashar', '4750-H', 'i like this car !! ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `wishtlist`
--

CREATE TABLE `wishtlist` (
  `wishlist_id` int(255) NOT NULL,
  `customer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `car_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `car_info`
--
ALTER TABLE `car_info`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `car_pic_style`
--
ALTER TABLE `car_pic_style`
  ADD PRIMARY KEY (`car_style_id`),
  ADD KEY `fk_car_ID` (`car_id`);

--
-- Indexes for table `customer_info`
--
ALTER TABLE `customer_info`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `deals`
--
ALTER TABLE `deals`
  ADD PRIMARY KEY (`deal_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `car_style_id` (`car_style_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `wishtlist`
--
ALTER TABLE `wishtlist`
  ADD PRIMARY KEY (`wishlist_id`),
  ADD KEY `fk_customer_id` (`customer_id`),
  ADD KEY `car_id` (`car_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `car_pic_style`
--
ALTER TABLE `car_pic_style`
  MODIFY `car_style_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `deals`
--
ALTER TABLE `deals`
  MODIFY `deal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `wishtlist`
--
ALTER TABLE `wishtlist`
  MODIFY `wishlist_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `car_pic_style`
--
ALTER TABLE `car_pic_style`
  ADD CONSTRAINT `fk_car_ID` FOREIGN KEY (`car_id`) REFERENCES `car_info` (`car_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `deals`
--
ALTER TABLE `deals`
  ADD CONSTRAINT `deals_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_info` (`customer_ID`),
  ADD CONSTRAINT `deals_ibfk_2` FOREIGN KEY (`car_style_id`) REFERENCES `car_pic_style` (`car_style_id`);

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer_info` (`customer_ID`),
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`car_id`) REFERENCES `car_info` (`car_id`);

--
-- Constraints for table `wishtlist`
--
ALTER TABLE `wishtlist`
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer_info` (`customer_id`),
  ADD CONSTRAINT `wishtlist_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `car_info` (`car_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
