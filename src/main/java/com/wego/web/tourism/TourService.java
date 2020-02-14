package com.wego.web.tourism;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface TourService {
	public List<Tourism> findTourismList(Tourism tourism);
}
