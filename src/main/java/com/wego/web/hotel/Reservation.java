package com.wego.web.hotel;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@NoArgsConstructor
@Lazy
public class Reservation {
	private String indate, outdate, uid, rseq,  hseq;
	private int price;
}
