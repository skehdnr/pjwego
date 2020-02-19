package com.wego.web.tourism;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface TourService {
	public List<Tourism> findTourismList(Tourism tourism);
	public Tourism findTourInfo(int tour_seq);
	public Tourism findMapTour(int tour_seq);
}
