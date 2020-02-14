package com.wego.web.tourism;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@NoArgsConstructor
@Lazy
public class Tourism {
	private String tseq, tourName, tourAddr, tarea, latitude, longitude, tourinfo, tel, tourImg;
	
}
