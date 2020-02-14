package com.wego.web.hotel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wego.web.mapper.HotelMapper;
@Service
public class HotelServiceImpl implements HotelService{
	@Autowired HotelMapper hotelMapper;
	
	@Override
	public Hotel findOnHotelByHseq(int hseq) {
		
		return hotelMapper.selectOnHotelByHseq(hseq);
	}

	@Override
	public List<Room> findRoomList(Room room) {
		// TODO Auto-generated method stub
		return hotelMapper.selectRoomList(room);
	}

	@Override
	public List<Hotel> findHotelList(Hotel hotel) {
		
		return hotelMapper.selectHotelList(hotel);
	}

	@Override
	public List<Comments> findCommentsList(Comments comments) {
		// TODO Auto-generated method stub
		return hotelMapper.selectCommentsList(comments);
	}

	@Override
	public List<Reservation> findReservationList(Reservation reservation) {
		// TODO Auto-generated method stub
		return hotelMapper.selectReservationList(reservation);
	}

	@Override
	public Comments findOnCommentsByRating(int hseq) {
		// TODO Auto-generated method stub
		return hotelMapper.selectCommentsByRating(hseq);
	}

	@Override
	public List<Hotel> findHotelListForPrice(Hotel hotel) {
		// TODO Auto-generated method stub
		return hotelMapper.selectHotelListForPrice(hotel);
	}

	@Override
	public List<Hotel> findLocationList(Hotel hotel) {
		System.out.println("넘어온 지역"+hotel.getHarea());
		System.out.println("????????"+hotelMapper.selectLocationList(hotel));
		return hotelMapper.selectLocationList(hotel);
	}

	@Override
	public Hotel findMapByHseq(int hseq) {
		// TODO Auto-generated method stub
		return hotelMapper.selectMapByHseq(hseq);
	}



}
