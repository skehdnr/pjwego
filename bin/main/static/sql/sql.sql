create table users
                (userid varchar(30) primary key,
                passwd varchar(30) ,
                username varchar(30) ,
                nickname varchar(30) ,
                birth varchar(30) ,
                tel varchar(30))default character set utf8 collate utf8_general_ci;
create table hotels
      (hotel_seq int(10) primary key auto_increment,
      hotel_name varchar(30),
      tel varchar(30),
      hotel_img varchar(500),
      hotel_area varchar(10),
      hotel_info varchar(1500),
      hotel_addr varchar(50),
      latitude varchar(30),
      longitude varchar(30)
      )default character set utf8 collate utf8_general_ci;
create table rooms
      (room_seq int(10) primary key auto_increment,
      room_type varchar(50),
      room_img varchar(500),
      price int(10),
      hotel_seq int(10) not null,
      foreign key(hotel_seq) references hotels(hotel_seq))default character set utf8 collate utf8_general_ci;
create table comments
     (comm_seq int(10) primary key auto_increment,
   	user_comment varchar(500),
      rating varchar(10),
      userid varchar(30),
      room_seq int(10) not null,
      foreign key(room_seq) references rooms(room_seq),
		foreign key(userid) references users(userid))default character set utf8 collate utf8_general_ci;
		
create table reservations
      (booking_seq int(10) primary key auto_increment,
      checkin_date varchar(30),
      checkout_date varchar(30),
      payment int(10),
      hotel_name varchar(30),
      room_type varchar(50),
      room_seq int(10) not null,
      userid varchar(30),
	  username varchar(30),
	  foreign key(room_seq) references rooms(room_seq),
	  foreign key(userid) references users(userid))default character set utf8 collate utf8_general_ci;
	
create table tourism
                (tour_seq int(10) primary key auto_increment,
      			tour_name varchar(30),
                tour_addr varchar(50),
                tour_area varchar(10),
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
			   festival_addr varchar(200),
			   festival_area varchar(30),
               festival_info varchar(500))default character set utf8 collate utf8_general_ci;
create table festivalbook
                (festival_booking_seq int(10) primary key auto_increment,
                userid varchar(30),
                tel varchar(30),
                visit_date varchar(30),
                person varchar(30),
                foreign key (userid) references users(userid))default character set utf8 collate utf8_general_ci;
create table board
     (art_seq int(10) primary key auto_increment,
     art_img varchar(500),
     title varchar(100),
     content varchar(500))default character set utf8 collate utf8_general_ci;
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
                hotel_seq int(10),
			    tour_seq int(10),
			    festival_seq int(10),
			    foreign key (hotel_seq) references hotels(hotel_seq),
		        foreign key (tour_seq) references tourism(tour_seq),
                foreign key (festival_seq) references festival(festival_seq))default character set utf8 collate utf8_general_ci;
                
UPDATE festival
SET festival_info = '올 겨울 반포한강공원에서 100일간 펼쳐지는 세빛 일루미네이션 축제는 풍성하고 다양한 빛 조형물을 세빛섬 곳곳에 설치하여 겨울철 세빛섬을 찾는 연인과 가족, 친구들에게 볼거리를 제공한다. 특히 대형 트리(세빛 105트리)와 세빛섬을 연결하는 4개의 다리마다 소원, 행복, 행운, 희망이라는 의미를 담았으며, 밤이 되면 더욱 화려하게 빛이 난다. 축제 기간동안 세빛섬에서 별빛 은하수 터널, 로맨틱 테라스, 무지개 다리, 황금 가든, 황금빛 ZOOZOO 랜드, 세빛 105 트리(WISH TREE) 등 50여개의 포토존과 포토스팟을 만날 수 있다.'
WHERE festival_seq LIKE 1;

UPDATE festival
SET festival_info = '11회째를 맞이하는 2020 코리아그랜드세일(2020 Korea Grand Sale)은 관광, 한류, 쇼핑이 융·복합된 외국인대상관광축제로, 외국인을 대상으로 항공, 숙박, 뷰티, 쇼핑, 엔터테인먼트, 관광지, 식음료 등 다양한 분야의 풍성한 혜택과 통역, 행사 안내, 무료 인터넷/WiFi, 경품 이벤트 등의 편의서비스를 제공한다.'
WHERE festival_seq LIKE 2;

UPDATE festival
SET festival_info = '제 3회를 맞이한 웃음참기축제!\r\n- 선착순 200명 무료 접수\r\n- 총삼금 1천만원의 주인공은 누구?\r\n\r\n[행사내용]\r\n1부(3시~5시30분) : 웃음참기 콘테스트\r\n* 8단계 웃음토너먼트 방식\r\n\r\n2부(6시~7시) : 웃음콧서트\r\n* 개그맨과 개그지망생들의 콘서트\r\n\r\n[참가안내]\r\n- 노쇼방지를 위해 보증금 2만원 입금(티겟박스에서 환불)\r\n- 계좌번호 : 국민은행 126301-04-369332(365런)\r\n- 입금후 010 4578 3381로\r\n- \'웃음참기축제 참가자 000\'문자 발송\r\n* 숫자가 2인 이상일 경우 000외 몇명'
WHERE festival_seq LIKE 3;

UPDATE festival
SET festival_info = '석촌호수 벚꽃축제는 벚꽃과 석촌호수의 자연환경이 어우러지는 석촌호수에서 매년 개화시기에 맞춰 벚꽃과 석촌호수의 자연환경이 어우러지는 축제이다.'
WHERE festival_seq LIKE 4;

UPDATE festival
SET festival_info = '마음과 마음이 하나로 어우러지는 시간! 모두의 행복과 평화를 기원하는 축제! 천년의 멋과 흥이 넘치는 연등회로의 초대!\r\n[참가안내]\r\n연등회 홈페이지 참조(http://www.LLF.or.kr)'
WHERE festival_seq LIKE 5;

UPDATE festival
SET festival_info = '서울시 주요재난 대비 안전체험 프로그램으로 시민안전 강화와 시민들이 자발적으로 참여하고 즐길 수 있는 안전문화 행사로써 2020년 5월 7일 ~ 5월 9일 3일간 여의도공원 문화의마당에서 시민들이 안전에 쉽게 다가갈 수 있도록 재밌게 이루어진 2020서울안전한마당 행사이다.'
WHERE festival_seq LIKE 6;



