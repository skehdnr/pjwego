package com.wego.web.hotel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wego.web.mapper.HotelMapper;
@Service
public class HotelServiceImpl implements HotelService{
	@Autowired HotelMapper hotelMapper;
	
	@Override
	public Hotel findOnHotelByHseq(int hotel_seq) {
		
		return hotelMapper.selectOnHotelByHseq(hotel_seq);
	}

	@Override
	public List<Room> findRoomList(Room room) {
		return hotelMapper.selectRoomList(room);
	}

	@Override
	public List<Hotel> findHotelList(Hotel hotel) {
		return hotelMapper.selectHotelList(hotel);
	}

	@Override
	public List<Comments> findCommentsList(Comments comments) {
		return hotelMapper.selectCommentsList(comments);
	}

	@Override
	public List<Reservation> findReservationList(Reservation reservation) {
		return hotelMapper.selectReservationList(reservation);
	}

	@Override
	public Comments findOnCommentsByRating(int hotel_seq) {
		return hotelMapper.selectCommentsByRating(hotel_seq);
	}

	@Override
	public List<Hotel> findHotelListForPrice(Hotel hotel) {
		return hotelMapper.selectHotelListForPrice(hotel);
	}

	@Override
	public List<Hotel> findLocationList(Hotel hotel) {
		return hotelMapper.selectLocationList(hotel);
	}

	@Override
	public List<Hotel> findBestRatingList(Hotel hotel) {
		return hotelMapper.selectBestRatingList(hotel);
	}

	@Override
	public List<Hotel> findBestPriceList(Hotel hotel) {
		return hotelMapper.selectBestPriceList(hotel);
	}

	@Override
	public List<Comments> findHotelcomment(int hotel_seq) {
		return hotelMapper.selectHotelcomment(hotel_seq);
	}

	@Override
	public Hotel findMapHotel(int hotel_seq) {
		return hotelMapper.selectMapHotel(hotel_seq);
	}



}
