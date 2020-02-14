package com.wego.web.community;

public enum SQL {
	CREATE_COMMUNITY,DROP_COMMUNITY, TRUNCATE_COMMUNITY,CREATE_LIKE,CREATE_REPLY;
	@Override
	public String toString() {
		String result = "";
		switch (this) {


		case CREATE_COMMUNITY:
			result = "create table community"
					+ "(artseq int(10) primary key auto_increment,"
					+ "uid varchar(20),"
					+ "img varchar(500),"
					+ "title varchar(100),"
					+ "content varchar(500),"
					+ "foreign key (uid) references users(uid))";
			break;
		case CREATE_LIKE:
			result = "create table liketo"
					+ "(likeseq int(10) primary key auto_increment,"
					+ "artseq int(10) not null,"
					+ "uid varchar(30),"
					+ "likecheck varchar(10),"
					+ "foreign key (artseq) references community(artseq),"
					+ "foreign key (uid) references users(uid))";
			break;
		case CREATE_REPLY:
			result = "create table reply"
					+ "(reseq int(10) primary key auto_increment,"
					+ "rcomments varchar(500) , "
					+ "uid varchar(20),  "
					+ "artseq int(10),"
					+ "foreign key (artseq) references community(artseq),"
					+ "foreign key (uid) references users(uid))";
			break;

		case DROP_COMMUNITY:
			result = "drop table community";
			break;

		case TRUNCATE_COMMUNITY:
			result = "truncate table community";
			break;
		default:
			break;
		}
		return result;
	}  

}
