package com.wego.web.hotel;

import java.util.List;

import org.springframework.stereotype.Component;

import com.wego.web.community.Reply;

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
	public List<Hotel> findBestRatingList(Hotel hotel);
	public List<Hotel> findBestPriceList(Hotel hotel);
	public List<Comments> findHotelcomment(int hotel_seq);
	public Hotel findMapHotel(int hotel_seq);

	

}
