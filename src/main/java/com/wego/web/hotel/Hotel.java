package com.wego.web.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@NoArgsConstructor
@Lazy
public class Hotel {		
	private String hotel_seq, hotel_name,hotel_img, hotel_addr, hotel_area, hotel_info, latitude, longitude, tel;
	 public Hotel(String hotel_name, String hotel_img,String hotel_addr, 
			  String hotel_area, String hotel_info,String tel) { 
	  this.hotel_name = hotel_name;
	  this.hotel_addr =hotel_addr;
	  this.hotel_img = hotel_img;
	  this.hotel_area = hotel_area;
	  this.hotel_info = hotel_info;

	  
	  
	  
	  }
	 


	
}