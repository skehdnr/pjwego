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
	private String hseq, hotelname,hotelimg, haddr, harea, hotelinfo, latitude, longitude, tel, rating;
	private int price;
	 public Hotel(String hotelname, String hotelimg,String haddr, 
			  String harea, String hotelinfo,String tel) { 
	  this.hotelname = hotelname;
	  this.haddr =haddr;
	  this.hotelimg = hotelimg;
	  this.harea = harea;
	  this.hotelinfo = hotelinfo;

	  
	  
	  
	  }
	 


	
}