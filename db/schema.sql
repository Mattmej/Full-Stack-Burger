-- DROP DATABASE IF EXISTS burger_db;
-- CREATE DATABASE burger_db;

-- USE burger_db;

USE r0nmzjo7wqoztp2z;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_type VARCHAR(30) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

-- INSERT INTO burgers (burger_type)
-- VALUES ("Western Bacon"), ("Guacamole"), ("Hawaiian");