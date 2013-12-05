# --- !Ups

CREATE TABLE user (

    email VARCHAR (100) PRIMARY KEY,
    name VARCHAR (255),
    password VARCHAR (255)

);

INSERT INTO  user (email, name, password) values ('blondeau.gui@gmail.com', 'Guillaume Blondeau', 'test')

# --- !Downs


DELETE FROM user where email = 'blondeau.gui@gmail.com';
DROP TABLE user;
