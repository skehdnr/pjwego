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
public class Reservation {
	private String checkin_date, checkout_date, userid, room_seq,  hotel_seq;
	private int payment;
}
