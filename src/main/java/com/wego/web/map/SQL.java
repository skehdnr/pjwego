package com.wego.web.map;

public enum SQL {
		CREATE_MAP , DROP_MAP , SElECT_PLACE;
		
		@Override
		public String toString() {
			String result = "";
			
			switch(this){
				
				case CREATE_MAP:
					result="create table map"
					+"(place varchar(30) primary key,"
					+"latitude varchar(100))";
					break;
				case DROP_MAP:
					result="drop table map";
					break;
					
					
			}
			return result;
			
		}
}
