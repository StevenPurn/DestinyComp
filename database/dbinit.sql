\connect games;

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

CREATE TABLE IF NOT EXISTS polls (
  id INT PRIMARY KEY,
  option_1 TEXT,
  option_1_count INT,
  option_2 TEXT,
  option_2_count INT,
  option_3 TEXT,
  option_3_count INT,
  option_4 TEXT,
  option_4_count INT
);

CREATE TABLE IF NOT EXISTS images (
  id INT PRIMARY KEY,
  game_id int,
  CONSTRAINT FK_game 
    FOREIGN KEY (game_id) REFERENCES games (id),
  img_url TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  username TEXT,
  voted BOOLEAN
);

CREATE TABLE IF NOT EXISTS comments (
  id INT PRIMARY KEY,
  user_id INT,
  body TEXT,
  parent_id INT,
  game_id INT,
  CONSTRAINT FK_game
    FOREIGN KEY (game_id) REFERENCES games (id),
  CONSTRAINT FK_user
    FOREIGN KEY (user_id) REFERENCES users (id),
  upvotes INT
);

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