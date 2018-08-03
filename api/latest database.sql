-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2018 at 02:13 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sparkland`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cust_id` int(10) NOT NULL,
  `cust_name` varchar(30) NOT NULL,
  `tel` int(9) NOT NULL,
  `residence` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cust_id`, `cust_name`, `tel`, `residence`) VALUES
(98, 'famous', 654302957, 'bonduma'),
(207, 'famous', 654302957, 'gaston'),
(293, 'famous', 2147483647, 'gaston'),
(706, 'Pretry', 654302957, 'Gaston');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(3) NOT NULL,
  `emp_name` varchar(30) NOT NULL,
  `tel` int(9) NOT NULL,
  `description` varchar(30) NOT NULL,
  `residence` varchar(30) NOT NULL,
  `salary` int(10) NOT NULL,
  `is_mgr` tinyint(1) NOT NULL,
  `date_of_entry` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `it_id` int(5) NOT NULL,
  `it_name` varchar(30) NOT NULL,
  `it_price` int(5) NOT NULL,
  `category` varchar(25) NOT NULL,
  `qty_in_stock` int(5) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `comp_id` varchar(255) NOT NULL,
  `date_of_entry` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`it_id`, `it_name`, `it_price`, `category`, `qty_in_stock`, `tags`, `comp_id`, `date_of_entry`) VALUES
(1, 'bread', 500, 'breakfast', 30, 'bread, boulangerie, blockade ', '2, 3', '2018-07-22 00:46:41'),
(2, 'tea', 300, 'breakfast', 30, 'tea, coffee, ovaltine ', '1,7', '2018-07-22 00:47:25'),
(3, 'eru', 200, 'main dishes', 30, 'eru, soup ', '4, 5', '2018-07-22 00:48:30'),
(4, 'fufu', 400, 'main dishes', 30, 'cassava, garri, fufu', '3, 2', '2018-07-22 00:49:16'),
(5, 'pork', 800, 'specials', 30, 'meat, pork ', '4, 5', '2018-07-22 00:49:52'),
(6, 'salad', 400, 'dessert', 30, 'salad, desert', '3, 6', '2018-07-22 00:50:18'),
(7, 'canda', 200, 'main dishes', 30, 'canda, meat ', '3, 2', '2018-07-22 00:50:53'),
(8, 'saute', 1000, 'main dishes', 30, 'saute, spaghetti ', '1, 7', '2018-07-22 00:51:28'),
(9, 'djino', 700, 'drinks', 39, 'djino, drinks, soft', '1, 3', '2018-07-22 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `sale_id` varchar(10) NOT NULL,
  `it_id` varchar(255) NOT NULL,
  `qty` varchar(255) NOT NULL,
  `cust_id` int(10) NOT NULL,
  `emp_id` int(3) NOT NULL,
  `date_of_sale` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sale_id`, `it_id`, `qty`, `cust_id`, `emp_id`, `date_of_sale`) VALUES
('445fa65ga', '2,3,1', '4,5,5', 685, 0, '2018-07-31 02:14:52'),
('371fa54ga', '4,3', '1,1', 588, 0, '2018-07-31 02:39:10'),
('154fa65<s', '3,1', '6,1', 518, 0, '2018-07-31 04:50:28'),
('143fa65bo', '3', '1', 219, 0, '2018-07-31 04:51:48'),
('582Pr65Ga', '1,2,3,4', '5,5,1,3', 73, 0, '2018-08-03 01:06:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`it_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cust_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=707;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `it_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
