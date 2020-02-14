package com.wego.web.festival;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.mapper.FestivalMapper;
import com.wego.web.proxy.Box;
import com.wego.web.proxy.Inventory;
import com.wego.web.util.Printer;

@Component
@Lazy
public class FestivalCrawling {
	@Autowired Inventory<HashMap<String,String>> inventory;
	@Autowired Box<String> box;
	@Autowired Printer printer;
	@Autowired Festival festival;
	@Autowired FestivalMapper festivalMapper;
	@Transactional
	public ArrayList<HashMap<String,String>> crawling(){
		String url = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%84%9C%EC%9A%B8%ED%96%89%EC%82%AC";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements title = rawData.select("span[class=tit_box]");
			Elements festivalimg = rawData.select("span[class=img_al] img");
			Elements date = rawData.select("span[class=date]");
			HashMap<String, String> map = null;
			for(int i = 0; i<title.size(); i++) {
			map = new HashMap<>();
			map.put("title", title.get(i).text());
			map.put("festivalimg", festivalimg.get(i).select("img").attr("src"));
			map.put("date", date.get(i).text());
			festival.setFtitle(title.get(i).text());
			festival.setFimg(festivalimg.get(i).select("img").attr("src"));
			festival.setFdate(date.get(i).text());
			festivalMapper.insertFestival(festival);
			System.out.println("****"+festivalimg.get(i).text());
			inventory.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("--------크롤링 결과---------");
		inventory.get().forEach(System.out::println);
		return inventory.get();
	}

}
