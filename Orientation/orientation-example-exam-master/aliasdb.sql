CREATE DATABASE `aliasdb`;

CREATE TABLE `alias` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`url` VARCHAR(50) NOT NULL,
	`alias` VARCHAR(10) NOT NULL,
	`hitcount` INT(10) NOT NULL DEFAULT '0',
	`secretCode` INT(4) unsigned zerofill NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO `alias` (`url`, `alias`, `secretCode`) VALUES ('http://reddit.com', 'bye-bye-time', '0483');