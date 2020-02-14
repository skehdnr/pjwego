package com.wego.web.tourism;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wego.web.proxy.Box;
import com.wego.web.proxy.CrawlingProxy;
import com.wego.web.proxy.Inventory;
import com.wego.web.proxy.PageProxy;
import com.wego.web.proxy.Proxy;
@RestController
@RequestMapping("/crawls")
public class CrawlController {
	@Autowired CrawlingProxy crawler;
	@Autowired PageProxy pager;
	@Autowired Box<Object> box;
	
	@GetMapping("/info")
	public ArrayList<HashMap<String, String>> info() {
		System.out.println("info");
		return crawler.infoCrawl();
	}
	@GetMapping("/news")
	public ArrayList<HashMap<String, String>> news() {
		System.out.println("news");
		return crawler.newsCrawl();
	}
	@GetMapping("/bugs/page/{page}")
	public Map<?,?> bugs(@PathVariable String page) {
		System.out.println("넘어온 페이지 : "+page);
		ArrayList<HashMap<String, String>> list = crawler.bugsCrawling();
		pager.setRowCount(list.size());
		pager.setPageSize(10);
		pager.setBlockSize(5);
		pager.setNowPage(pager.integer(page));
		pager.paging();
		ArrayList<HashMap<String, String>> temp = new ArrayList<>();
		for(int i=0;i< list.size(); i++) {
			if(i >= pager.getStartRow() && i <= pager.getEndRow() ) {
				temp.add(list.get(i));
			}
			if(i > pager.getEndRow()) {break;}
		}
		box.put("pager", pager);
		box.put("list", temp);
		System.out.println("페이저 : "+box.get("pager").toString());
		return box.get();
	}
}