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
	private String comm_seq, userid, user_comment, rating, room_seq;
	public Comments( String userid, String user_comment, String rating,String room_seq){
		this.userid = userid;
		this.user_comment = user_comment;
		this.rating = rating;
		this.room_seq = room_seq;
	}
}
