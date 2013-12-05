# --- !Ups

CREATE SEQUENCE rank_id_seq;
<<<<<<< HEAD

CREATE TABLE users (

    email VARCHAR (100) PRIMARY KEY ,
    name VARCHAR (255),
    password VARCHAR (255),
    isadmin BOOLEAN
);

CREATE TABLE article (
  id INTEGER PRIMARY KEY default nextval('rank_id_seq'),
  name varchar(100),
  url varchar(200)
) ;

create table Comment (
  id                         bigint not null,
  comment                     varchar(255),
  author                      varchar(100),
  constraint pk_Comment primary key (id))
;

=======

CREATE TABLE users (
    email VARCHAR (100) PRIMARY KEY ,
    name VARCHAR (255),
    password VARCHAR (255)
);

CREATE TABLE article (
  id INTEGER PRIMARY KEY AUTO_INCREMENT, --change in default nextval('rank_id_seq'),
  name varchar(100),
  url varchar(200)
) ;
>>>>>>> c7ce1ac06b6360270aa0a606d2e00bba17038686

INSERT into article (name,url) values
('tablette','tablette.jpg'),
('ordinateur','ordi.jpg'),
('table','table.jpg'),
('guitare','guitare.jpg') ,
('retroprojecteur','retropro.jpg');

INSERT INTO  users (email, name, password, isAdmin) values ('blondeau.gui@gmail.com', 'Guillaume Blondeau', 'test', true);

# --- !Downs

DELETE FROM users where email = 'blondeau.gui@gmail.com';
DELETE from article where name= 'tablette';
DELETE from article where name= 'ordinateur';
DELETE from article where name= 'table';
DELETE from article where name= 'guitare';
DELETE from article where name= 'retroprojecteur';
DROP TABLE users;
DROP TABLE article;
<<<<<<< HEAD
DROP TABLE comment;
=======
>>>>>>> c7ce1ac06b6360270aa0a606d2e00bba17038686
DROP SEQUENCE rank_id_seq;

