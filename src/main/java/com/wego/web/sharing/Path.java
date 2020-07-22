package com.wego.web.sharing;

import java.io.File;

public enum Path {
	UPLOAD_PATH,DOWNLOAD_PATH;
	@Override
	public String toString() {
		String result = "";
		switch(this){
		case UPLOAD_PATH :
			 result = "C:\\Users\\eunb9\\LECTURE\\NEW Spring\\workspace 200215\\web\\src\\main\\resources\\static\\resources\\wegoimg";
//			 File.separator+"usr"+File.separator+"local"+File.separator+"tomcat9"+File.separator+
//			 "webapps"+File.separator+"ROOT"+File.separator+"resources"+File.separator+"img"+File.separator;
			   break;
			  case DOWNLOAD_PATH :
				  break;
//			   result = File.separator+"resources"+File.separator+"wegoimg"+File.separator+"festival";
//			   break;
		
	}
		return result;
}
}
