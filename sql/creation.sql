DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS publication (
    title TEXT NOT NULL,
    text_body TEXT NOT NULL,
    user_id uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE SET NULL
);