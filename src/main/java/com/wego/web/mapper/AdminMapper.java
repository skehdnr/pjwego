package com.wego.web.mapper;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.wego.web.admin.Admin;
import com.wego.web.tourism.Tourism;

@Repository
public interface AdminMapper {
	public void createAdmin(HashMap<String,String>paramMap);
	public void insertAdmin(Admin admin);
	public Admin adminLogin(Admin admin);
	/* public void createTour(HashMap<String,String>paramMap); */
	/* public void insertTour(HashMap<String,String>paramMap); */
	public void insertTour(Tourism tourism);
	public Tourism cartlead(Tourism tourism);
}
