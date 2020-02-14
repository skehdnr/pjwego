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
public class Room {
	private String room_seq,room_img,room_type, hotel_seq;
	private int price;
	public Room(String room_type,  
			String room_img, int price, String hotel_seq) {
		this.room_type=room_type;
		this.room_img=room_img;
		this.price=price;
		this.hotel_seq=hotel_seq;
	}
}