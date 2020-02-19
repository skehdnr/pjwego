package com.wego.web.mapper;

import java.util.HashMap;
import java.util.List;

import com.wego.web.hotel.Hotel;
import com.wego.web.tourism.Tourism;

public interface TourismMapper {

	public void insertTourism(Tourism T);
	public void createTourism(HashMap<String, String> paramMap);
	public void dropTourism(HashMap<String, String> paramMap);
	public void truncateTourism(HashMap<String, String> paramMap);

	public List<Tourism> selectTourismList(Tourism tourism);
	public Tourism selectTourInfo(int tour_seq);
	public Tourism selectMapTour(int tour_seq);
	

}
