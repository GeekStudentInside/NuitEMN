# --- !Ups

CREATE SEQUENCE rank_id_seq;

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
  constraint pk_Comment primary key (id));


INSERT into article (name,url) values
('tablette','tablette.jpg'),
('ordinateur','ordi.jpg'),
('table','table.jpg'),
('guitare','guitare.jpg') ,
('retroprojecteur','retropro.jpg');

INSERT INTO  users (email, name, password, isAdmin) values ('blondeau.gui@gmail.com', 'Guillaume Blondeau', 'test', true);

CREATE SEQUENCE rank_id_seq2;

CREATE TABLE Link (
    id INTEGER PRIMARY KEY default nextval('rank_id_seq2'),
    Article1 INTEGER,
    Article2 INTEGER,
    Weight FLOAT
);

INSERT INTO Link (Article1, Article2, Weight) values
((SELECT id FROM Article  where name ='tablette' limit 1), (SELECT id FROM Article where name ='ordinateur' limit 1), 0.5),
((SELECT id FROM Article where name ='tablette' limit 1), (SELECT id FROM Article where name ='table' limit 1), 0.8),
((SELECT id FROM Article where name ='table' limit 1), (SELECT id FROM Article where name ='guitare' limit 1), 0.1);

# --- !Downs

DROP TABLE users;
DROP TABLE article;
DROP TABLE comment;
DROP SEQUENCE rank_id_seq;
DROP TABLE Link;
DROP SEQUENCE rank_id_seq2;

