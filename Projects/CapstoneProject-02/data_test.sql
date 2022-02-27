DROP DATABASE IF EXISTS usersdb_test;
CREATE DATABASE usersdb_test;

\c usersdb_test;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- INSERT INTO users (username, password) VALUES ('admin', 'password');
-- INSERT INTO users (username, password) VALUES ('luffy', 'kingofthepirates');