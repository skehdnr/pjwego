package com.wego.web.community;

import java.util.ArrayList;
import java.util.HashMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.mapper.CommunityMapper;
import com.wego.web.proxy.Box;
import com.wego.web.proxy.Inventory;
import com.wego.web.proxy.Proxy;
import com.wego.web.util.Printer;
@Component()
@Lazy
public class CommunityCrawling extends Proxy{
	@Autowired Inventory<HashMap<String,String>> inventory;
	@Autowired Box<String> box;
	@Autowired Community community;
	@Autowired CommunityProxy communityProxy;
	@Autowired CommunityMapper communityMapper;
	@Autowired Printer printer;
	
	@Transactional
	public ArrayList<HashMap<String,String>> communityCrawing(){
		//
		String url = "https://store.naver.com/attractions/detail?entry=plt&id=38345004&query=%EB%82%A8%EC%82%B0%EC%84%9C%EC%9A%B8%ED%83%80%EC%9B%8C&tab=fsasReview";
		inventory.clear();
		
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements title = rawData.select("div[class=tit] a");
			Elements content = rawData.select("div[class=txt ellp2]");
			Elements art_img = rawData.select("div[class=thumb]");
			
			HashMap<String, String> map = null;
			for(int i = 0; i<title.size();i++) {
				map = new HashMap<String, String>();
				map.put("title", title.get(i).text());
				map.put("content", content.get(i).text());
				map.put("art_img", art_img.get(i).select("img").attr("src"));
				community.setArt_img(art_img.get(i).select("img").attr("src"));
				community.setTitle(title.get(i).text());
				community.setContent(content.get(i).text());
				community.setUserid(communityProxy.makeUserid());
				communityMapper.insertCommunity(community);
				inventory.add(map);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return inventory.get();
	}
	
}
