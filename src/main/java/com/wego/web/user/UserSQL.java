package com.wego.web.user;

public enum UserSQL {
	CREATE_USER,DROP_USER,TRUNCATE_USER,UPLOAD_PATH,FIND_PWD,FIND_ID;
	@Override
	public String toString() {
		String result = "";
		
		switch (this) {
		case CREATE_USER:
			result = "create table users"
					+ "(uid varchar(30) primary key,"
					+ "pwd varchar(30) ,"
					+ "uname varchar(30) ,"
					+ "nickname varchar(30) ,"
					+ "birth varchar(30) ,"
					+ "tel varchar(30))";
			break;
		case DROP_USER :
			result = "drop table USERS";
			break;
		case TRUNCATE_USER :
			result = "truncate table commu";
			result = "create table item()";
			break;
		case UPLOAD_PATH :
			result = "C:\\Users\\user\\Desktop\\wego\\";
			break;	
		default:
			break;
		}
		return result;
	}
	
	
	
}
