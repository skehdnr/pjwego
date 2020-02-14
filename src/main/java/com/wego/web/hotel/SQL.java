package com.wego.web.hotel;

public enum SQL {
	CREATE_HOTEL,CREATE_ROOM, CREATE_COMMENTS,CREATE_RESERVATION;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {


		case CREATE_HOTEL:
			result = "create table hotel"
					+ "(hseq int(30) primary key auto_increment,"
					+ "hotelname varchar(30),"
					+ "tel varchar(30),"
					+ "hotelimg varchar(500),"
					+ "harea varchar(10),"
					+ "hotelinfo varchar(100),"
					+ "haddr varchar(50),"
					+ "latitude varchar(30),"
					+ "longitude varchar(30))";  
			break;
		case CREATE_ROOM:
			result = "create table room"
					+ "(rseq int(30) primary key auto_increment,"
					+ "roomtype varchar(50),"
					+ "roomimg varchar(500),"
					+ "price int,"
					+ "hseq int(30) not null,"
					+ "foreign key(hseq) references hotel(hseq))";
	
			break;	
		case CREATE_COMMENTS:
			result = "create table comments"
					+"(cseq int(30) primary key auto_increment,"
					+ "hcomments varchar(500),"
					+ "rating varchar(10),"
					+ "uid varchar(30),"
					+ "hseq int(30) not null,"
					+ "foreign key(hseq) references hotel(hseq))";
			break;
		case CREATE_RESERVATION: 
			result = "create table reservation"
					+ "(bseq int(30) primary key auto_increment,"
					+ "indate varchar(30),"
					+ "outdate varchar(30),"
					+ "price int,"  
					+ "hseq int(30) not null,"
					+ "rseq int(30) not null ,"
					+ "uid varchar(30),"
					+ "foreign key(hseq) references hotel(hseq),"
					+ "foreign key(uid) references users(uid),"
					+ "foreign key(rseq) references room(rseq))";
		}
		return result;
	}  
}