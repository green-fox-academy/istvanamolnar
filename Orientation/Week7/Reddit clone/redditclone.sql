DROP TABLE posts IF EXISTS;
CREATE TABLE `posts` (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `ts` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `score` int(20) NOT NULL DEFAULT 0,
  `owner` varchar(100) DEFAULT NULL,
  `votes` int(6) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
)

INSERT INTO `posts` (title, url, score, owner)
VALUES ('Javascript','http://www.google.com',12,'Lacika'),
('Typescript','http://www.google.com',9,'Ferike'),
('mySQL','http://www.google.com',6,'Julika'),
('EJS','http://www.google.com',3,'Zolika');
