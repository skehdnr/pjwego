package com.wego.web.tourism;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wego.web.mapper.TourismMapper;

@Service
public class TourServiceImpl implements TourService{
	@Autowired TourismMapper tourismMapper;
	@Override
	public List<Tourism> findTourismList(Tourism tourism) {
		// TODO Auto-generated method stub
		return tourismMapper.selectTourismList(tourism);
	}
	@Override
	public Tourism findTourInfo(int tour_seq) {
		System.out.println("투어서비스임플"+tourismMapper.selectTourInfo(tour_seq));
		return tourismMapper.selectTourInfo(tour_seq);
	}

}
