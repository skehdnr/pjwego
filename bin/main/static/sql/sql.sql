create table admin
                (aid varchar(30) primary key,
                apwd varchar(30),
                tel varchar(30))default character set utf8 collate utf8_general_ci;
create table users
                (uid varchar(30) primary key,
                pwd varchar(30) ,
                uname varchar(30) ,
                nickname varchar(30) ,
                birth varchar(30) ,
                tel varchar(30))default character set utf8 collate utf8_general_ci;

create table hotel
      (hseq int(30) primary key auto_increment,
      hotelname varchar(30),
      tel varchar(30),
      hotelimg varchar(500),
      harea varchar(10),
      hotelinfo varchar(1500),
      haddr varchar(50),
      price int,
      rating varchar(10),
      latitude varchar(30),
      longitude varchar(30))default character set utf8 collate utf8_general_ci;
create table room
      (rseq int(30) primary key auto_increment,
      roomtype varchar(50),
      roomimg varchar(500),
      price int,
      hseq int(30) not null,
      foreign key(hseq) references hotel(hseq))default character set utf8 collate utf8_general_ci;
create table comments
     (cseq int(30) primary key auto_increment,
      hcomments varchar(500),
      rating varchar(10),
      uid varchar(30),
      hseq int(30) not null,
      foreign key(hseq) references hotel(hseq))default character set utf8 collate utf8_general_ci;
create table reservation
      (bseq int(30) primary key auto_increment,
      indate varchar(30),
      outdate varchar(30),
      price int,
      hseq int(30) not null,
      rseq int(30) not null ,
      uid varchar(30),
      foreign key(hseq) references hotel(hseq),
      foreign key(uid) references users(uid),
      foreign key(rseq) references room(rseq))default character set utf8 collate utf8_general_ci;
create table community
     (artseq int(10) primary key auto_increment,
     uid varchar(20),
     img varchar(500),
     title varchar(100),
     content varchar(500),teamwego
     tseq int(30),
     foreign key (tseq) references tourizm(tseq),
     foreign key(uid) references users(uid))default character set utf8 collate utf8_general_ci;
create table tourism
                (tseq int(30) primary key auto_increment,
         tourname varchar(30),
                touraddr varchar(30),
                latitude varchar(30),
                longitude varchar(30),
         tourinfo varchar(2000),
         tel varchar(30),
                tourimg varchar(500))default character set utf8 collate utf8_general_ci;

     create table festival
(feseq int(10) primary key auto_increment,
               ftitle varchar(100) , 
               fimg varchar(300),  
               fdate varchar(30),
               finfo varchar(500))default character set utf8 collate utf8_general_ci;

create table festivalbook
                (fbseq int(30) primary key auto_increment,
                uid varchar(30),
                tel varchar(30),
                fdate varchar(30),
                fper varchar(30),
                foreign key (uid) references users(uid))default character set utf8 collate utf8_general_ci;

create table liketo(likeseq int(10) primary key  auto_increment,
      artseq int(10) not null , 
       uid varchar(30) ,
     likecheck varchar(10),
     foreign key (artseq) references community(artseq),
       foreign key (uid) references users(uid))default character set utf8 collate utf8_general_ci;
     
create table reply
     (reseq int(10) primary key auto_increment,
     rcomments varchar(500) , 
     uid varchar(20),  
     artseq int(10),
     foreign key (uid) references users(uid),
     foreign key (artseq ) references community(artseq))default character set utf8 collate utf8_general_ci;