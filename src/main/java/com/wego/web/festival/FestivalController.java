package com.wego.web.festival;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wego.web.community.Community;
import com.wego.web.mapper.FestivalMapper;
import com.wego.web.util.Printer;

@Lazy
@RestController
@RequestMapping("/festival")
public class FestivalController {
	private static final Logger logger = LoggerFactory.getLogger(FestivalController.class);
	@Autowired FestivalCrawling fc;
	@Autowired Map<String, Object>map;
	@Autowired Festival festival;
	@Autowired Printer printer;
	@Autowired FestivalServiceImpl festivalservice;
	@Autowired FestivalBook festivalbook;
	@Autowired FestivalPage pager;
	@Autowired FestivalMapper festivalmapper;
	
	@GetMapping("/crawling")
	   public ArrayList<HashMap<String, String>> festival() throws Exception{
	      return fc.crawling();
	   }
	
	@GetMapping("/flist")
	public List<Festival> fastivallist() throws Exception{
//		pager.paging();
		return festivalservice.findFestivalList();
	}
	
//	@GetMapping("flist/{festival_seq}")
//	public Map<?,?> list (@PathVariable int festival_seq) {
//		HashMap<String, Object> map = new HashMap<>();
//		map.put("pager", pager.paging());
//		return map;
//	}
	
	
	@GetMapping("/finfo/{festival_seq}")
	public Map<String,Object> festivalinfo(@PathVariable int festival_seq){
		HashMap<String, Object> map = new HashMap<>();
		festival.setFestival_seq(String.valueOf(festival_seq));
		Festival festival = festivalservice.findFestivalInfo(festival_seq);
		map.put("festival",festival);
		return map;
	}
	
	
	@PostMapping("/festivalend")
	public Map<?,?> insertbook(@RequestBody FestivalBook param){
		Consumer<FestivalBook> c= t -> festivalmapper.insertFestivalBook(param);
		c.accept(param);
		map.clear();
		map.put("msg","SUCCESS");
		return map;
	}
	
}
