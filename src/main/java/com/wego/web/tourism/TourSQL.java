package com.wego.web.tourism;

public enum TourSQL {
	CREATE_TOURISM, DROP_TOURISM, TRUNCATE_TOURISM;
	@Override
	public String toString() {
		String result = "";
		switch (this) {

		case CREATE_TOURISM:
			result = "create table tourism"
			+ "(tseq int(30) primary key auto_increment,"
			+ "tourname varchar(30), "
			+ "touraddr varchar(30), "
			+ "latitude varchar(30),"
			+ "longitude varchar(30),"
			+ "tourinfo varchar(1000),"
			+ "tel varchar(30),"
			+ "tourimg varchar(500))";
			break;
		
		case DROP_TOURISM:	
			result = "drop table tourism";
			break;

		case TRUNCATE_TOURISM:
			result = "truncate table tourism";
			break;
		
		}
		return result;
	}  

}