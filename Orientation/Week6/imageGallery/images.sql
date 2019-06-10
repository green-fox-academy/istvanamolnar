CREATE TABLE `myImages` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(100) NOT NULL,
	`description` VARCHAR(200) NOT NULL,
	`url` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO myImages (title, description, url) VALUES
('Princess Cruise Ship', 'Huge passenger cruise ship sailing on the ocean in the golden hour.', 'images/PrincessCruiseShip.jpg'),
('Desert Sunset', 'A windy sunset in the desert from a different perspective', 'images/DesertSunset.jpg'),
('Dome Interior', 'A dome of an iconic renaissance building', 'images/Dome.jpg'),
('Canadian Forest', 'Breathtaking moment in the North American deep forest.', 'images/CanadianForest.jpg'),
('Long Exposure', 'A futuristic photo in a dark room with long expo and motion combo.', 'images/LongExposure.jpg'),
('Beach Holiday', 'Beautiful day at the beach in Hawaii, photo of the most popular vintage van.', 'images/BeachHoliday.jpg'),
('Misty Morning', 'Spooky black and white photo before sunrising.', 'images/MistyMorning.jpg');