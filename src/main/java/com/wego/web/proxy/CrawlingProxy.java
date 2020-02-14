package com.wego.web.proxy;

import java.util.ArrayList;
import java.util.HashMap;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component("crawler") @Lazy
public class CrawlingProxy extends Proxy{
	@Autowired Inventory<HashMap<String, String>> inventory;
	@Autowired Box<String> box;
	
	
	public ArrayList<HashMap<String, String>> infoCrawl() {
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String info = "https://terms.naver.com/entry.nhn?docId=2057108&cid=42840&categoryId=42848";
			Connection.Response homePage;
			homePage = Jsoup.connect(info)
					.method(Connection.Method.GET)
					.userAgent(USER_AGENT)
					.execute();
			Document temp = homePage.parse();
			Elements element = temp.select("div.box_content");
			Elements info1 = element.select("p.txt");
			HashMap<String, String> map = null;
			for(int i = 0; i < info1.size(); i++) {
				
				map = new HashMap<>();
				map.put("info1", info1.get(i).text());
				inventory.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("---------- 크롤링 결과 ------------");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	public ArrayList<HashMap<String, String>> newsCrawl()  {
		inventory.clear();	
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String news = "http://wepaper.co.kr/gn_board/view.php?bbs_code=post&bd_num=6671";
			Connection.Response homePage;
			homePage = Jsoup.connect(news)
					.method(Connection.Method.GET)
					.userAgent(USER_AGENT)
					.execute();
			Document temp = homePage.parse();
			Elements element = temp.select("div.pView");
			Elements title = element.select("p.subject");
			Elements comment = element.select("li.con");
			Elements photo = temp.select("img.view_image");
			HashMap<String, String> map = null;
			for(int i = 0; i < comment.size(); i++) {
				map = new HashMap<>();
				map.put("title", title.get(i).text());
				map.put("comment", comment.get(i).text());
				map.put("photo", photo.get(i).select("img").attr("src"));
				inventory.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("---------- 크롤링 결과 ------------");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	public ArrayList<HashMap<String, String>> bugsCrawling() {
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String bugsurl = "https://music.bugs.co.kr/chart";
			Connection.Response homePage = Jsoup.connect(bugsurl).method(Connection.Method.GET).userAgent(USER_AGENT)
					.execute();
			Document temp = homePage.parse();
			Elements tempforTitle = temp.select("p.title");
			Elements tempforContent = temp.select("p.artist");
			Elements tempforphoto = temp.select("a.thumbnail");
			HashMap<String, String>map=null;
		
			for (int i=0;i<tempforTitle.size();i++) {
				map = new HashMap<>();
				map.put("seq", string(i+1));
				map.put("title", tempforTitle.get(i).text());
				map.put("artist", tempforContent.get(i).text());
				map.put("thumbnail", tempforphoto.get(i).select("img").attr("src"));
				inventory.add(map);
			}
		} catch (Exception e) {
		}
		System.out.println("********************크롤링결과********************");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
}