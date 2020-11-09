-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2020 at 10:40 AM
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
-- Database: `professional_personality`
--

-- --------------------------------------------------------

--
-- Table structure for table `aggreagate_test`
--

CREATE TABLE `aggreagate_test` (
  `id` int(11) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aggreagate_test`
--

INSERT INTO `aggreagate_test` (`id`, `number`) VALUES
(1, 1),
(2, 5),
(3, 3),
(4, 4);

-- --------------------------------------------------------

--
-- Stand-in structure for view `aggregation`
-- (See below for the actual view)
--
CREATE TABLE `aggregation` (
`count(*)` bigint(21)
,`SUM(number)` decimal(32,0)
);

-- --------------------------------------------------------

--
-- Table structure for table `case_information`
--

CREATE TABLE `case_information` (
  `id` int(11) NOT NULL,
  `token` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `job` varchar(100) NOT NULL,
  `rating_supervisors` int(3) NOT NULL,
  `rating_subordinates` int(3) NOT NULL,
  `rating_peers` int(3) NOT NULL,
  `url` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_information`
--

INSERT INTO `case_information` (`id`, `token`, `date`, `email`, `name`, `job`, `rating_supervisors`, `rating_subordinates`, `rating_peers`, `url`) VALUES
(1, 'b11111111111', '2021-03-20 11:05:00', '', 'available', 'Teacher', 2, 3, 4, 'dYHNFZFcEp'),
(2, 'b11111111111', '2025-03-20 14:56:00', '', 'paint', 'Teacher', 2, 3, 4, 'XaFf3DEwqj'),
(3, 'b11111111111', '2020-03-20 14:22:00', '', 'possibly', 'Teacher', 2, 3, 4, 'qkMyU36rap'),
(4, 'b11111111111', '2003-04-20 13:33:00', '', 'old', 'Teacher', 2, 3, 4, 'Q7gEvs8r5a'),
(5, 'b11111111111', '2002-04-20 06:53:00', '', 'atmosphere', 'Teacher', 2, 3, 4, 'jJ8t3jTTSJ'),
(6, 'b11111111111', '2031-03-20 14:18:00', '', 'plus', 'Teacher', 2, 3, 4, 'voAAYACjCW'),
(7, 'b11111111111', '2031-03-20 14:18:00', '', 'hat', 'Teacher', 2, 3, 4, '6KSLo3SrW4'),
(8, 'b11111111111', '2031-03-20 14:18:00', '', 'previous', 'Teacher', 2, 3, 4, 'Apw4SY8uGK'),
(9, 'b11111111111', '2031-03-20 14:18:00', '', 'valuable', 'Teacher', 2, 3, 4, 'bUfowgIubQ'),

--------------------------------------------------------

--
-- Stand-in structure for view `case_strength_avg_weak_response`
-- (See below for the actual view)
--
CREATE TABLE `case_strength_avg_weak_response` (
`count(*)` bigint(21)
,`SUM(number)` decimal(32,0)
);

--------------------------------------------------------

--
-- Stand-in structure for view `case_text_response`
-- (See below for the actual view)
--
CREATE TABLE `case_text_response` (
`count(*)` bigint(21)
,`SUM(number)` decimal(32,0)
);

-- --------------------------------------------------------

--
-- Table structure for table `data_raw`
--

CREATE TABLE `data_raw` (
  `id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `item` varchar(30) NOT NULL,
  `self_rating` int(11) NOT NULL,
  `superior_rating` int(11) NOT NULL,
  `subordinate_rating` int(11) NOT NULL,
  `peer_rating` int(11) NOT NULL,
  `avg_rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_raw`
--

INSERT INTO `data_raw` (`id`, `case_id`, `item`, `self_rating`, `superior_rating`, `subordinate_rating`, `peer_rating`, `avg_rating`) VALUES
(1, 0, 'DEMOINC1', 12, 14, 17, 18, 16),
(2, 0, 'DEMOINC2', 12, 20, 12, 16, 12),

--------------------------------------------------------

--
-- Table structure for table `scales_subscales_items`
--

CREATE TABLE `scales_subscales_items` (
  `id` int(11) NOT NULL,
  `scale` varchar(30) NOT NULL,
  `subscale` varchar(30) NOT NULL,
  `item` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scales_subscales_items`
--

INSERT INTO `scales_subscales_items` (`id`, `scale`, `subscale`, `item`) VALUES
(1, 'Neg_Management', 'Symp_Neg_Lead', 'NEG1'),
(2, 'Neg_Management', 'Symp_Neg_Lead', 'NEG2'),
(3, 'Neg_Management', 'Symp_Neg_Lead', 'NEG3'),
(4, 'Neg_Management', 'Symp_Neg_Lead', 'NEG4'),
(5, 'Neg_Management', 'Symp_Neg_Lead', 'NEG5'),
-- --------------------------------------------------------

--
-- Table structure for table `scale_and_labels`
--

CREATE TABLE `scale_and_labels` (
  `id` int(11) NOT NULL,
  `scale` varchar(100) NOT NULL,
  `label` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scale_and_labels`
--

INSERT INTO `scale_and_labels` (`id`, `scale`, `label`, `description`) VALUES
(1, 'Idealized Influence', 'Idealized Influence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(2, 'Intellectual Stimulation & Collaboration', 'Intellectual Stimulation & Collaboration', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(3, 'Individualized Consideration ', 'Individualized Consideration ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(4, 'Inspirational Motivation', 'Inspirational Motivation', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(5, 'Symptoms of Negligent Leadership', 'Symptoms of Negligent Leadership', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(6, 'Monitoring for Fault-Finding', 'Monitoring Purely for Fault-Finding', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(7, 'Reward-Orientation', 'Reward-Reliant', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(8, 'Punishment-Orientation', 'Punishment-Orientation', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(9, 'Only Present for Problems', 'Only Present for Problems', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(10, 'Rules Lawyer', 'Rules Lawyer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(11, 'Pos Leadership', 'Positive Leadership', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(12, 'Neg Management', 'Negative Management', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(13, 'Democratic-Inclusive', 'Democratic-Inclusive Tendency', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(14, 'Servant', 'Servant Leadership', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Table structure for table `strength_avg_weak_response`
--

CREATE TABLE `strength_avg_weak_response` (
  `id` int(11) NOT NULL,
  `type` varchar(30) NOT NULL,
  `title` varchar(100) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `text_response_values`
--

CREATE TABLE `text_response_values` (
  `id` int(11) NOT NULL,
  `Question` text NOT NULL,
  `Question_Subscale_or_Scale_Value` text NOT NULL,
  `Avg_Aggregate_Description_Text_Response` text NOT NULL,
  `Avg_Self_Comparison_Text_Response` text NOT NULL,
  `Avg_Supervisor_Comparison_Text_Response` text NOT NULL,
  `Avg_Subordinate_Comparison_Text_Response` text NOT NULL,
  `Avg_Peer_Comparison_Text_Response` text NOT NULL,
  `Coaching_Response` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `text_response_values`
--

-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `full_name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `full_name`, `email`, `password`, `creation_date`) VALUES
(1, 'aaron', 'Aaron', 'aaron@gmail.com', 'aaron@123', '2020-10-31 20:47:02');

-- --------------------------------------------------------

--
-- Structure for view `aggregation`
--
DROP TABLE IF EXISTS `aggregation`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `aggregation`  AS  select count(0) AS `count(*)`,sum(`aggreagate_test`.`number`) AS `SUM(number)` from `aggreagate_test` ;

-- --------------------------------------------------------

--
-- Structure for view `case_strength_avg_weak_response`
--
DROP TABLE IF EXISTS `case_strength_avg_weak_response`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `case_strength_avg_weak_response`  AS  select count(0) AS `count(*)`,sum(`aggreagate_test`.`number`) AS `SUM(number)` from `aggreagate_test` ;

-- --------------------------------------------------------

--
-- Structure for view `case_text_response`
--
DROP TABLE IF EXISTS `case_text_response`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `case_text_response`  AS  select count(0) AS `count(*)`,sum(`aggreagate_test`.`number`) AS `SUM(number)` from `aggreagate_test` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aggreagate_test`
--
ALTER TABLE `aggreagate_test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `case_information`
--
ALTER TABLE `case_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_raw`
--
ALTER TABLE `data_raw`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scales_subscales_items`
--
ALTER TABLE `scales_subscales_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scale_and_labels`
--
ALTER TABLE `scale_and_labels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `strength_avg_weak_response`
--
ALTER TABLE `strength_avg_weak_response`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `text_response_values`
--
ALTER TABLE `text_response_values`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aggreagate_test`
--
ALTER TABLE `aggreagate_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `case_information`
--
ALTER TABLE `case_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `data_raw`
--
ALTER TABLE `data_raw`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9736;

--
-- AUTO_INCREMENT for table `scales_subscales_items`
--
ALTER TABLE `scales_subscales_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `scale_and_labels`
--
ALTER TABLE `scale_and_labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `strength_avg_weak_response`
--
ALTER TABLE `strength_avg_weak_response`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `text_response_values`
--
ALTER TABLE `text_response_values`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=743;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
