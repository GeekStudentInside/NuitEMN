# --- !Ups
-- Hao Zhang
CREATE TABLE keyword (
    id INTEGER PRIMARY KEY,
    name varchar(100)
);

insert into keyword(name) values('delicieux');
insert into keyword(name) values('sexy');

CREATE TABLE article_keyword(
	id INTEGER PRIMARY KEY,
	article_id INTEGER references article(id),
	keyword_id INTEGER references keyword(id)
);

insert into article_keyword(article_id, keyword_id) values(0, 0);
insert into article_keyword(article_id, keyword_id) values(1, 1);
# --- !Downs

drop table keyword;
drop table article_keyword;
