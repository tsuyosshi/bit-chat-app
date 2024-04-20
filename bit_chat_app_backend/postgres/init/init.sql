create table users (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR(255), 
  name       VARCHAR(255)
);

CREATE TYPE APPLICATION_STATUS AS ENUM('pending', 'accepted');

create table friends (
  id         SERIAL PRIMARY KEY,
  user1_id SERIAL NOT NULL,
  user2_id SERIAL NOT NULL,
  status APPLICATION_STATUS DEFAULT 'pending',

  FOREIGN KEY (user1_id) REFERENCES users(id),
  FOREIGN KEY (user2_id) REFERENCES users(id)
);