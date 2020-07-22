create table users
                (userid varchar(30) primary key,
                passwd varchar(30) ,
                username varchar(30) ,
                nickname varchar(30) ,
                birth varchar(30) ,
                tel varchar(30))default character set utf8 collate utf8_general_ci;

create table hotels
      (hotel_seq int(30) primary key auto_increment,
      hotel_name varchar(30),
      tel varchar(30),
      hotel_img varchar(500),
      hotel_area varchar(10),
      hotel_info varchar(1500),
      hotel_addr varchar(50),
      latitude varchar(30),
      longitude varchar(30),
      rating varchar(10),
       price INT(10),
      )default character set utf8 collate utf8_general_ci;
create table rooms
      (room_seq int(30) primary key auto_increment,
      room_type varchar(50),
      room_img varchar(500),
      price INT(10),
      hotel_seq int(30) not null,
      foreign key(hotel_seq) references hotels(hotel_seq))default character set utf8 collate utf8_general_ci;
create table comments
     (comm_seq int(30) primary key auto_increment,
      hotel_comment varchar(500),
      rating varchar(10),
      userid varchar(30),
      hotel_seq int(30) not null,
      foreign key(hotel_seq) references hotels(hotel_seq))default character set utf8 collate utf8_general_ci;
create table reservations
      (booking_seq int(30) primary key auto_increment,
      checkin_date varchar(30),
      checkout_date varchar(30),
      payment int,
      room_seq int(30) not null ,
      userid varchar(30),
      foreign key(userid) references users(userid),
      foreign key(room_seq) references rooms(room_seq))default character set utf8 collate utf8_general_ci;

create table tourism
                (tour_seq int(30) primary key auto_increment,
      			tour_name varchar(30),
                tour_addr VARCHAR(50),
                tour_area VARCHAR(10),
                latitude varchar(30),
                longitude varchar(30),
    	  		tour_info varchar(2000),
      			tel varchar(30),
                tourimg varchar(500))default character set utf8 collate utf8_general_ci;
                
     
     create table festival
				(festival_seq int(10) primary key auto_increment,
               festival_title varchar(100) , 
               festival_img varchar(300),  
               festival_date varchar(30),
               festival_info varchar(500))default character set utf8 collate utf8_general_ci;

create table festivalbook
                (festival_booking_seq int(30) primary key auto_increment,
                userid varchar(30),
                tel varchar(30),
                visit_date varchar(30),
                person varchar(30),
                foreign key (userid) references users(userid))default character set utf8 collate utf8_general_ci;
                
create table board
     (art_seq int(10) primary key auto_increment,
     userid varchar(20),
     art_img varchar(500),
     title varchar(100),
     content varchar(500),
     tour_seq int(30),
     festival_seq int(10),
     foreign key (festival_seq) references festival(festival_seq),
     foreign key (tour_seq) references tourism(tour_seq),
     foreign key(userid) references users(userid))default character set utf8 collate utf8_general_ci;

create table liketo(likeseq int(10) primary key  auto_increment,
      			art_seq int(10) not null , 
		       	userid varchar(30) ,
		    	likecheck varchar(10),
		   		foreign key (art_seq) references board(art_seq),
      			 foreign key (userid) references users(userid))default character set utf8 collate utf8_general_ci;
     
create table reply
     (reply_seq int(10) primary key auto_increment,
     board_comment varchar(500) , 
     userid varchar(20),  
     art_seq int(10),
     foreign key (userid) references users(userid),
     foreign key (art_seq ) references board(art_seq))default character set utf8 collate utf8_general_ci;
     
create table admin
                (admin_id varchar(30) primary key,
                admin_pwd varchar(30),
                tel varchar(30),
                admin_addr varchar(100),
                hotel_seq int(30),
			    tour_seq int(30),
			    festival_seq int(30),
			    foreign key (hotel_seq) references hotels(hotel_seq),
		        foreign key (tour_seq) references tourism(tour_seq),
                foreign key (festival_seq) references festival(festival_seq))default character set utf8 collate utf8_general_ci;