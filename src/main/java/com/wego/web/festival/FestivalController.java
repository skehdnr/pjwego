package com.wego.web.festival;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

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
		return festivalservice.findFestivalList();
	}
//	@GetMapping("/flist")
//	public Map<?,?>festivallist(@PathVariable String page){
//		System.out.println("festival");
//		ArrayList<HashMap<String, String>> list = festivalservice.findFestivalList();
//		pager.setRowCount(list.size());
//		pager.setPageSize(10);
//		pager.setBlockSize(5);
//		pager.setNowPage(pager.integer(page));
//		pager.paging();
//		ArrayList<HashMap<String, String>> temp = new ArrayList<>();
//		for(int i=0;i< list.size(); i++) {
//			if(i >= pager.getStartRow() && i <= pager.getEndRow() ) {
//				temp.add(list.get(i));
//			}
//			if(i > pager.getEndRow()) {break;}
//		}
//		box.put("pager", pager);
//		box.put("list", temp);
//		
//		return box.get();
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
		festivalservice.insertFestivalBook(festivalbook);
		map.clear();
		map.put("msg","SUCCESS");
		return map;
	}
	
}
