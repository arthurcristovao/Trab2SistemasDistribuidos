CREATE DATABASE IF NOT EXISTS userdb;

USE userdb;

CREATE TABLE IF NOT EXISTS users (users
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO users (name, email) VALUES ('Laura G', 'laura@example.com'), ('Arthur C', 'arthur@example.com');
