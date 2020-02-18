package com.wego.web.map;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wego.web.mapper.MapMapper;
import com.wego.web.util.Printer;

@RestController
@RequestMapping("/maps")
public class MapController {
		@Autowired MapMapper mapMapper;
		@Autowired Printer printer;
		@Autowired MapProxy mapProxy;
		
		@GetMapping("/map/create/")
		public Map<?,?> createMap(){
			HashMap<String,String> paramMap= new HashMap<>();
			paramMap.put("CREATE_MAP", SQL.CREATE_MAP.toString());
			Consumer<HashMap<String,String>> p = r -> mapMapper.createMap(r);
			p.accept(paramMap);
			paramMap.clear();
			paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		
		
		@GetMapping("/insert/mapDB")
		public Map<?,?> insertMapDB(){
			HashMap<String, String> paramMap = new HashMap<>();
			mapProxy.insertMapDB();
			paramMap.clear();
	    	paramMap.put("msg", "SUCCESS");
			return paramMap;
		}
		
		
}
		
		

