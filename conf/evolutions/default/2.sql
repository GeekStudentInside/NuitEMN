# --- !Ups

CREATE TABLE Link (

    id LONG PRIMARY KEY AUTO_INCREMENT,
    Article1 LONG,
    Article2 LONG,
    Weight FLOAT
);

INSERT INTO Link (Article1, Article2, Weight) values
((SELECT id FROM Article where name ='tablette'), (SELECT id FROM Article where name ='ordinateur'), 0.5),
((SELECT id FROM Article where name ='tablette'), (SELECT id FROM Article where name ='table'), 0.8),
((SELECT id FROM Article where name ='table'), (SELECT id FROM Article where name ='guitare'), 0.1);
# --- !Downs

DELETE FROM Link;
DROP TABLE Link;