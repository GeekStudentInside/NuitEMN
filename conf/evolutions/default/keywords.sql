# --- !Ups
-- Hao Zhang

CREATE SEQUENCE id_article_keyword;
CREATE SEQUENCE id_keyword;

CREATE TABLE keyword (
    id INTEGER PRIMARY KEY default nextval('id_keyword'),
    name varchar(100)
);

CREATE TABLE article_keyword(
	id INTEGER PRIMARY KEY default nextval('id_article_keyword'),
	article_id INTEGER references article(id),
	keyword_id INTEGER references keyword(id)
);

insert into keyword(name) values('delicieux');
insert into keyword(name) values('sexy');

insert into article_keyword(article_id, keyword_id) values(
  (SELECT id FROM Article  where name ='tablette' limit 1),
  (SELECT id FROM Keyword where name = 'delicieux' limit 1)
);

insert into article_keyword(article_id, keyword_id) values(
  (SELECT id FROM Article  where name ='table' limit 1),
  (SELECT id FROM Keyword where name = 'sexy' limit 1)
);

# --- !Downs
delete from keyword;
delete from article_keyword;

drop table keyword;
drop table article_keyword;

drop sequence id_keyword;
drop sequence id_article_keyword;
