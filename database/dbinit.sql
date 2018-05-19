CREATE DATABASE game_club IF NOT EXISTS;

\connect game_club;

CREATE TABLE IF NOT EXISTS games (
  id INT PRIMARY KEY,
  title TEXT,
  studio TEXT,
  release_date TEXT
);

CREATE TABLE IF NOT EXISTS platforms (
  id INT PRIMARY KEY,
  name TEXT,
  img_url TEXT
);

CREATE TABLE IF NOT EXISTS images (
  id INT PRIMARY KEY,
  game_id int,
  CONSTRAINT FK_game 
    FOREIGN KEY (game_id) REFERENCES games (id),
  img_url TEXT
)

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  username TEXT
)

CREATE TABLE IF NOT EXISTS comments (
  id INT PRIMARY KEY,
  user INT,
  body TEXT,
  parent_id INT,
  upvotes INT
)

CREATE TABLE IF NOT EXISTS games_platforms_junction
(
  game_id int,
  platform_id int,
  CONSTRAINT game_platform PRIMARY KEY (game_id, platform_id),
  CONSTRAINT FK_game
      FOREIGN KEY (game_id) REFERENCES games (id),
  CONSTRAINT FK_platform 
      FOREIGN KEY (platform_id) REFERENCES platforms (id)
);

-- \COPY reviews FROM './postgresReviews.csv' DELIMITER '|' CSV