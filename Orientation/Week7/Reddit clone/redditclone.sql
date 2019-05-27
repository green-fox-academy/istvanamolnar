DROP TABLE posts IF EXISTS;
CREATE TABLE `posts` (
  `post_id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `ts` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `score` int(20) NOT NULL DEFAULT 0,
  `user_id` int(20) DEFAULT NULL,
  `votes` int(6) NOT NULL DEFAULT 0,
  PRIMARY KEY (`post_id`)
);

DROP TABLE users IF EXISTS;
CREATE TABLE `users` (
  `user_id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);

INSERT INTO `users` (username)
VALUES ('Lacika'),
('Ferike'),
('Julika'),
('Zolika');

INSERT INTO `posts` (title, url, score, user_id)
VALUES ('Javascript','http://www.google.com',12, 1),
('Typescript','http://www.google.com',9, 2),
('mySQL','http://www.google.com',6, 3),
('EJS','http://www.google.com',3, 4);
