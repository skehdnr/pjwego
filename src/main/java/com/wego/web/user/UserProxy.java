package com.wego.web.user;

import java.io.File;
import java.util.UUID;
import java.util.function.BiFunction;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.wego.web.sharing.Path;

@Component
public class UserProxy {
	public String fileupload(MultipartFile[] uploadFile) {
		String uploadFolder = Path.UPLOAD_PATH.toString();
		File uploadPath = makeDir(uploadFolder, "festival");
		String name ="";
		if(uploadPath.exists() == false) {
			uploadPath.mkdirs();
			System.out.println("유저프록시 ==== : "+uploadPath);
		}
		System.out.println("for loop 진입 전 배열 크기 ... "+uploadFile.length);
		
		for(MultipartFile m : uploadFile) {
			System.out.println("for loop 진입 후 ... "+uploadPath);
			String fname = m.getOriginalFilename();
			String extension = fname.substring(fname.lastIndexOf(".")+1);
			fname = fname.substring(fname.lastIndexOf("\\")+1, fname.lastIndexOf("."));
			File saveFile = makeFile(uploadPath, fname+"-"+UUID.randomUUID().toString()+"."+extension);
			name= fname+"-"+UUID.randomUUID().toString();
			System.out.println("filename : "+fname+"-"+UUID.randomUUID().toString()+"."+extension);
			System.out.println("ffffff : "+saveFile);
			
			try {
				System.out.println("프록시ㅣㅣㅣㅣㅣ"+saveFile);
				m.transferTo(saveFile);
			} catch (Exception e) {
				e.printStackTrace();
			} 
		}
		System.out.println("유저프록시 : "+uploadFolder);
		System.out.println("유저프록시 : "+uploadFile);
		return name;
	}
	

	public File makeDir(String t, String u) {
		BiFunction<String,String, File> f = File::new;
		return f.apply(t, u);
	}
	public File makeFile(File t, String u) {
		BiFunction<File,String, File> f = File::new;
		return f.apply(t, u);
	}

}
