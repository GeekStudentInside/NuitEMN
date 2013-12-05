# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table Users (
  email                     varchar(255) not null,
  name                      varchar(255),
  password                  varchar(255),
  constraint pk_Users primary key (email))
;

create sequence Users_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists Users;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists Users_seq;

