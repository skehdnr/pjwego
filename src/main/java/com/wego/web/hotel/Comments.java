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
public class Comments {
	private String comm_seq, userid, user_comment, rating, hotel_seq;
	public Comments( String userid, String user_comment, String rating,String hotel_seq){
		this.userid = userid;
		this.user_comment = user_comment;
		this.rating = rating;
		this.hotel_seq = hotel_seq;
	}
}
