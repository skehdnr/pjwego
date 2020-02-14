package com.wego.web.tourism;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@NoArgsConstructor
@Lazy
public class Tourism {
	private String tour_seq, tour_name, tour_addr,  tour_area, latitude, longitude, tour_info, tel, tourimg;
	
}
