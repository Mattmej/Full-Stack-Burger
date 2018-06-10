-- DROP DATABASE IF EXISTS r0nmzjo7wqoztp2z;
CREATE DATABASE r0nmzjo7wqoztp2z;

USE r0nmzjo7wqoztp2z;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_type VARCHAR(30) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);