package com.wego.web.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@NoArgsConstructor
@Lazy
public class Room {
	private String rseq,roomimg,roomtype, hseq, rating;
	private int price;
	public Room(String roomtype,  
			String roomimg, int price, String hseq) {
		this.roomtype=roomtype;
		this.roomimg=roomimg;
		this.price=price;
		this.hseq=hseq;
	}
}