package com.wego.web.admin;

public enum AdminSQL {
	CREATE_ADMIN,CREATE_TOUR;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case CREATE_ADMIN:
			result = "create table admin"
					+ "(admin_id varchar(30) primary key,"
					+ "admin_pwd varchar(30),"
					+ "tel varchar(30),"
					+ "admin_addr varchar(100)," + 
					"                hotel_seq int(10))";
			break;
		}
		return result;
	}
}
