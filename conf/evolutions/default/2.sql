# --- !Ups

CREATE TABLE users (

    email VARCHAR (100) PRIMARY KEY,
    name VARCHAR (255),
    password VARCHAR (255)

);

INSERT INTO  users (email, name, password) values ('blondeau.gui@gmail.com', 'Guillaume Blondeau', 'test')

# --- !Downs

DELETE FROM users where email = 'blondeau.gui@gmail.com';
DROP TABLE users;