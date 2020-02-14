package com.wego.web.tourism;

public enum TourSQL {
	CREATE_TOURISM, DROP_TOURISM, TRUNCATE_TOURISM;
	@Override
	public String toString() {
		String result = "";
		switch (this) {

		case CREATE_TOURISM:
			result = "CREATE TABLE TOURISM"
			+ "(TSEQ INT(30) PRIMARY KEY AUTO_INCREMENT,"
			+ "TOURNAME VARCHAR(30), "
			+ "TOURADDR VARCHAR(30), "
			+ "LATITUDE VARCHAR(30),"
			+ "LONGITUDE VARCHAR(30),"
			+ "TOURINFO VARCHAR(1000),"
			+ "TEL VARCHAR(30),"
			+ "TOURIMG VARCHAR(500))";
			break;
		
		case DROP_TOURISM:	
			result = "drop table TOURISM";
			break;

		case TRUNCATE_TOURISM:
			result = "TRUNCATE TABLE TOURISM";
			break;
		
		}
		return result;
	}  

}