package com.wego.web.community;

public enum SQL {
	CREATE_COMMUNITY,DROP_COMMUNITY, TRUNCATE_COMMUNITY,CREATE_LIKE,CREATE_REPLY;
	@Override
	public String toString() {
		String result = "";
		switch (this) {


		case CREATE_COMMUNITY:
			result = "CREATE TABLE COMMUNITY"
					+ "(ARTSEQ INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "UID VARCHAR(20),"
					+ "IMG VARCHAR(500),"
					+ "TITLE VARCHAR(100),"
					+ "CONTENT VARCHAR(500),"
					+ "FOREIGN KEY (UID) REFERENCES USERS(UID))";
			break;
		case CREATE_LIKE:
			result = "CREATE TABLE LIKETO"
					+ "(LIKESEQ INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "ARTSEQ INT(10) NOT NULL,"
					+ "UID VARCHAR(30),"
					+ "LIKECHECK VARCHAR(10),"
					+ "FOREIGN KEY (ARTSEQ) REFERENCES COMMUNITY(ARTSEQ),"
					+ "FOREIGN KEY (UID) REFERENCES USERS(UID))";
			break;
		case CREATE_REPLY:
			result = "CREATE TABLE REPLY"
					+ "(RESEQ INT(10) PRIMARY KEY AUTO_INCREMENT,"
					+ "RCOMMENTS VARCHAR(500) , "
					+ "UID VARCHAR(20),  "
					+ "ARTSEQ INT(10),"
					+ "FOREIGN KEY (ARTSEQ) REFERENCES COMMUNITY(ARTSEQ),"
					+ "FOREIGN KEY (UID) REFERENCES USERS(UID))";
			break;

		case DROP_COMMUNITY:
			result = "DROP TABLE COMMUNITY";
			break;

		case TRUNCATE_COMMUNITY:
			result = "TRUNCATE TABLE COMMUNITY";
			break;
		default:
			break;
		}
		return result;
	}  

}
