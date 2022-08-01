SET NAMES utf8;
SET time_zone = '-03:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE IF NOT EXISTS player_manager_service;

USE player_manager_service;

DROP TABLE IF EXISTS `player`;

CREATE TABLE `player` (
  `playerId` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(30) NOT NULL,
  `height` decimal(10,3) NOT NULL,
  `weight` decimal(10,3) NOT NULL,
  `teamId` varchar(36) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`playerId`),
  KEY `fk_player_team` (`teamId`),
  CONSTRAINT `fk_player_team` FOREIGN KEY (`teamId`) REFERENCES `team` (`teamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `team`;
CREATE TABLE `team` (
  `teamId` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `inaugurationDate` date NOT NULL,
  `state` varchar(2) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`teamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
