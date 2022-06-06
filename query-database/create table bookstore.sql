use bookapp;
create table book (
id int primary key not null auto_increment,
name nvarchar(100),
image MEDIUMTEXT,
author nvarchar(100),
description nvarchar(255),
price double 
);
create table user(
id int primary key not null auto_increment,
full_name nvarchar(100),
userName nvarchar(100),
passWord nvarchar(100),
birthday nvarchar(100)
);
create table address(
id int primary key not null auto_increment,
user_id int not null,
province nvarchar(100),
district nvarchar(100),
wards nvarchar(100),
detail nvarchar(255),
foreign key(user_id) references user(id)
);

create table cartitem(
id int primary key not null auto_increment,
book_id int not null,
user_id int not null,
qty int,
foreign key(user_id) references user(id),
foreign key(book_id) references book(id)
);
 
 create table comment(
 id int primary key not null auto_increment,
 user_id int not null,
 book_id int not null,
 content varchar(255),
 rate int,
 foreign key(user_id) references user(id),
 foreign key(book_id) references book(id)
 );
 
 create table user_order(
 id int primary key not null auto_increment,
 book_id int not null,
 user_id int not null,
 qty int,
 address_id int not null,
 status varchar(255),
 create_day varchar(255),
 foreign key(user_id) references user(id),
 foreign key(book_id) references book(id),
 foreign key(address_id) references address(id)
 );
 
 create table favorite_book(
	id int primary key not null auto_increment,
	book_id int not null,
	user_id int not null,
    date_add nvarchar(255),
	foreign key(user_id) references user(id),
	foreign key(book_id) references book(id)
 );
 
 create table selling_book(
	id int primary key not null auto_increment,
	book_id int not null,
    foreign key(book_id) references book(id)
 )
 

 
 
 
