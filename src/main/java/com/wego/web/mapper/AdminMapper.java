package com.wego.web.mapper;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.wego.web.admin.Admin;
import com.wego.web.festival.Festival;
import com.wego.web.hotel.Hotel;
import com.wego.web.tourism.Tourism;

@Repository
public interface AdminMapper {
	public void createAdmin(HashMap<String,String>paramMap);
	public void insertAdmin(Admin admin);
	public Admin adminLogin(Admin admin);
	/* public void createTour(HashMap<String,String>paramMap); */
	/* public void insertTour(HashMap<String,String>paramMap); */
	public void insertTour(Tourism tourism);
	public void insertFestival(Festival festival);
	public Tourism tour_chartlead(Tourism tourism);
	public Festival fastival_chartlead(Festival festival);
	public Hotel hotel_chartlead(Hotel tourism);
	
}
