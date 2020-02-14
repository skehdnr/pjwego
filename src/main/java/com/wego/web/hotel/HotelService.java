package com.wego.web.hotel;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface HotelService {
	public Hotel findOnHotelByHseq(int hseq);
	public List<Room> findRoomList(Room room);
	public List<Hotel> findHotelList(Hotel hotel);
	public List<Hotel> findHotelListForPrice(Hotel hotel);
	public List<Comments> findCommentsList(Comments comments);
	public List<Reservation> findReservationList(Reservation reservation);
	public Comments findOnCommentsByRating(int hseq);
	public List<Hotel> findLocationList(Hotel hotel);
	public Hotel findMapByHseq(int hseq);
}
