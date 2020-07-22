package com.wego.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.wego.web.festival.Festival;
import com.wego.web.festival.FestivalBook;

@Repository
public interface FestivalMapper {
	public void insertFestival(Festival festival);
	public List<Festival> selectFestivalList();
	public Festival selectFestivalInfo(int festival_seq);
	public void insertFestivalBook(FestivalBook festivalbook);
	public void insertFestivalImg(Festival festival);
	public String getfestivalseq();
	public List<Integer> chartlead();
	public int countAll3();
}
