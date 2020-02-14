package com.wego.web.sharing;

public enum Path {
	UPLOAD_PATH;
	@Override
	public String toString() {
		String result = "";
		switch(this){
		case UPLOAD_PATH :
			result = "C:\\";
			/*
			 * C:\\Users\\user\\workspace\\vueworkspace\\teamWEGOjquery-master\\src\\main\\
			 * webapp\\resources\\upload\\
			 */
			break;
		
	}
		return result;
}
}
