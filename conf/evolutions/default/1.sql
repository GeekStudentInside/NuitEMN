# --- !Ups

CREATE TABLE users (

    email VARCHAR (100) PRIMARY KEY,
    name VARCHAR (255),
    password VARCHAR (255)

);

CREATE TABLE article (
  id INTEGER NOT NULL UNIQUE PRIMARY KEY,
  name varchar(100),
  url varchar(200)


)

INSERT into article (name,url) values
('tablette','tablette.jpg'),
('ordinateur','ordi.jpg'),
('table','table.jpg'),
('guitare','guitare.jpg')
('retroprojecteur','retropro.jpg');

INSERT INTO  users (email, name, password) values ('blondeau.gui@gmail.com', 'Guillaume Blondeau', 'test');

# --- !Downs

DELETE FROM users where email = 'blondeau.gui@gmail.com';
DELETE from article where name= 'tablette';
DELETE from article where name= 'ordinateur';
DELETE from article where name= 'table';
DELETE from article where name= 'guitare';
DELETE from article where name= 'retroprojecteur';
DROP TABLE users;

