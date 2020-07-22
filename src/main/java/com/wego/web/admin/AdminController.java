package com.wego.web.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wego.web.festival.Festival;
import com.wego.web.festival.FestivalServiceImpl;
import com.wego.web.mapper.AdminMapper;
import com.wego.web.mapper.FestivalMapper;
import com.wego.web.tourism.Tourism;
import com.wego.web.user.UserProxy;
import com.wego.web.util.Printer;

@RestController
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired Admin admin;
	@Autowired AdminMapper adminMapper;
	@Autowired Printer printer;
	@Autowired Map<String, Object> map;
	@Autowired UserProxy csproxy;
	@Autowired ExcelService excelService;
	@Autowired Tourism tourism;
	@Autowired FestivalMapper festivalmapper;
	@Autowired Festival festival;
	@Autowired FestivalServiceImpl festivalservice;
	
	@GetMapping("/create/table")
	public Map<?,?> createAdmin(){
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_ADMIN", AdminSQL.CREATE_ADMIN.toString());
		Consumer<HashMap<String,String>> c = t -> adminMapper.createAdmin(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@PostMapping("/")
	public Map<?,?> adminjoin(@RequestBody Admin param){
		Consumer<Admin> c = t -> adminMapper.insertAdmin(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PostMapping("/{admin_id}")
	public Map<?,?> adminlogin(@PathVariable String admin_id, @RequestBody Admin param){
		Function<Admin, Admin>f = t -> adminMapper.adminLogin(param);
		map.clear();
		map.put("msg", "SUCCESS");
		map.put("admin", f.apply(param));
		return map;
	}	
	
	@PostMapping("/excel")
	public void excel() {
		excelService.getWorkbook("");
	}
	
	@GetMapping("/chartlead")
	public List<Integer> festival_chart ()throws Exception{
		return festivalservice.chartList();
	}
	@PostMapping("/festivalinsert")
	public String festivalinsert(@RequestBody Festival param){
		Consumer<Festival>c = s -> festivalmapper.insertFestival(param);
		c.accept(param);
		Supplier <String> f = () -> festivalmapper.getfestivalseq();
		return  f.get();
	}
	
	@PutMapping("/festivalImg/{festival_seq}")
	public void festivalup(MultipartFile [] uploadFile, @PathVariable String festival_seq) {
		String name = csproxy.fileupload(uploadFile);
		festival.setFestival_img(name);
		festival.setFestival_seq(festival_seq);
		festivalmapper.insertFestivalImg(festival);
	}
	
}
