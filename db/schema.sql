
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);