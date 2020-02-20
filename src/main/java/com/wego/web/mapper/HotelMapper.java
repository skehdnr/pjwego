package com.wego.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.wego.web.community.Community;
import com.wego.web.hotel.Comments;
import com.wego.web.hotel.Hotel;
import com.wego.web.hotel.Reservation;
import com.wego.web.hotel.Room;

@Repository
public interface HotelMapper {
	public void createHotel(HashMap<String, String> paramMap);
	public void createRoom(HashMap<String, String> paramMap);
	public void createComments(HashMap<String, String> paramMap);
	public void createReservation(HashMap<String, String> paramMap);
	public void insertHotel(Hotel param);
	public void insertRoom(Room param);
	public void insertComments(Comments param);
	public void insertReservation(Reservation param);
	public int countHotel();
	public List<Hotel> selectHotelList(Hotel hotel);
	public List<Hotel> selectHotelListForPrice(Hotel hotel);
	public List<Room> selectRoomList(Room room);
	public List<Comments> selectCommentsList(Comments comments);
	public List<Reservation> selectReservationList(Reservation reservation);
	public double ratingcount(String hotel_seq);
	public Hotel selectOnHotelByHseq(int hotel_seq);
	public Comments selectCommentsByRating(int hotel_seq);
	public List<Hotel> selectSearchList();
	public List<Hotel> selectLocationList(Hotel hotel);
	public List<Hotel> selectBestRatingList(Hotel hotel);
	public List<Hotel> selectBestPriceList(Hotel hotel);
	public void insertHotelComment(Comments param);
	public List<Comments> selectHotelcomment(int hotel_seq);
	public Hotel selectMapHotel(int hotel_seq);
	public List<Hotel> allhotellist();
}