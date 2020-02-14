package com.wego.web.admin;

public enum AdminSQL {
	CREATE_ADMIN,CREATE_TOUR;
	
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case CREATE_ADMIN:
			result = "CREATE TABLE ADMIN"
					+ "(AID VARCHAR(30) PRIMARY KEY,"
					+ "APWD VARCHAR(30),"
					+ "TEL VARCHAR(30))";
			break;
		/*
		 * case CREATE_TOUR: result = "CREATE TABLE TOURISM" +
		 * "(TOURNAME VARCHAR(30) PRIMARY KEY," + "TOURADDR VARCHAR(30)," +
		 * "LATITUDE VARCHAR(30)," + "HARDNESS VARCHAR(30)," + "TOURINFO VARCHAR(300),"
		 * + "TEL VARCHAR(30)," + "TOURIMG VARCHAR(500))"; break;
		 */
		}
		return result;
	}
}
