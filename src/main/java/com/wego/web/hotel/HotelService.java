package com.wego.web.hotel;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface HotelService {
	public Hotel findOnHotelByHseq(int hotel_seq);
	public List<Room> findRoomList(Room room);
	public List<Hotel> findHotelList(Hotel hotel);
	public List<Hotel> findHotelListForPrice(Hotel hotel);
	public List<Comments> findCommentsList(Comments comments);
	public List<Reservation> findReservationList(Reservation reservation);
	public Comments findOnCommentsByRating(int hotel_seq);
	public List<Hotel> findLocationList(Hotel hotel);
	public Hotel findMapByHseq(int hotel_seq);
	public List<Hotel> findBestRatingList(Hotel hotel);
	public List<Hotel> findBestPriceList(Hotel hotel);
}
