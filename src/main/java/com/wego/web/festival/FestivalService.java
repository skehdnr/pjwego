package com.wego.web.festival;

import java.util.List;
import java.util.function.Consumer;

import org.springframework.stereotype.Component;

import com.wego.web.proxy.PageProxy;

@Component
public interface FestivalService {
	public List<Festival> findFestivalList(FestivalPage pager);
	public Festival findFestivalInfo(int festival_seq);
	public void insertFestivalBook(FestivalBook festivalbook);
	public List<Integer> chartList();
	public int findCountAll();
	

}
