package com.wego.web.festival;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@Lazy
@NoArgsConstructor
public class Festival {
	private String feseq,ftitle,fimg,fdate,finfo;

}
