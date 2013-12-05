# --- !Ups
-- Hao Zhang
CREATE TABLE keyword (
    id LONG PRIMARY KEY,
    name varchar(100)
);

insert into keyword(name) values('delicieux');
insert into keyword(name) values('sexy');

CREATE TABLE article_keyword(
	id LONG PRIMARY KEY,
	article_id LONG references article(id),
	keyword_id LONG references keyword(id)
);

insert into article_keyword(article_id, keyword_id) values(0, 0);
insert into article_keyword(article_id, keyword_id) values(1, 1);

delete from keyword;
delete from article_keyword;

drop table keyword;
drop table article_keyword;
