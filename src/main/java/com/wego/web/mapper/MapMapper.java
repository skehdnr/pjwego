package com.wego.web.mapper;


import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.wego.web.map.Maps;


@Repository
public interface MapMapper {
		
	public void createMap(HashMap<String,String> paramMap);
	public Maps selectMapsByPlace(String place);
	public void insertMap(Maps param);
}
