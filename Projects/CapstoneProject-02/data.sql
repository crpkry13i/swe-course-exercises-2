DROP DATABASE IF EXISTS usersdb;
CREATE DATABASE usersdb;

\c usersdb;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password) VALUES ('admin', 'password');
INSERT INTO users (username, password) VALUES ('luffy', 'kingofthepirates');
INSERT INTO users (username, password) VALUES ('zoro', 'worldsbestswordsman');