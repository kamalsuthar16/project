create database project;
use project;
create table cprofile(email varchar(30) primary key, name varchar(30), mobile varchar(10), address varchar(100), city varchar(30), gender varchar(10), picname varchar(50));
select * from cprofile;
 
 create table ctprofile(email varchar(30) primary key, name varchar(30), mobile varchar(10), address varchar(100), city varchar(30), gender varchar(10), picname varchar(50));
select * from ctprofile;
drop table ctprofile;
create table ct1profile(email varchar(30) primary key, name varchar(30), mobile varchar(10), address varchar(100), city varchar(30),aadhar varchar(12), gender varchar(10), picname varchar(50));
select * from ct1profile;

create table csignup(email varchar(30) primary key, password varchar(20), usertype varchar(10));
select * from csignup; 