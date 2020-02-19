package com.wego.web.festival;

import java.util.List;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wego.web.mapper.FestivalMapper;

@Service
public class FestivalServiceImpl implements FestivalService{
	@Autowired FestivalMapper festivalmapper;
	
	@Override
	public List<Festival> findFestivalList() {
		return festivalmapper.selectFestivalList();
	}

	@Override
	public Festival findFestivalInfo(int feseq) {
		return festivalmapper.selectFestivalInfo(feseq);
	}

	@Override
	public void insertFestivalBook(FestivalBook festivalbook) {
		Consumer<FestivalBook> c= t -> festivalmapper.insertFestivalBook(festivalbook);
		c.accept(festivalbook);
		
	}

	@Override
	public List<Integer> chartList() {
		System.out.println("차트리스트"+festivalmapper.chartlead());
		return festivalmapper.chartlead();
	}




}
