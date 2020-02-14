package com.wego.web.community;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
@Lazy
public class Community {
		private int art_seq,tour_seq,festival_seq;
		private String userid, art_img, title, content;
		
}
