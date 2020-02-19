package com.wego.web.hotel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wego.web.community.Community;
import com.wego.web.festival.FestivalBook;
import com.wego.web.mapper.HotelMapper;
import com.wego.web.user.User;
import com.wego.web.util.Printer;

@Lazy
@RestController
@RequestMapping("/hotel")
public class HotelController {
	@Autowired Map<String, Object>map;
	@Autowired HotelMapper hotelMapper;
	@Autowired HotelProxy hotelProxy;
	@Autowired CommentsProxy commentsProxy;
	@Autowired RoomProxy roomProxy;
	@Autowired pagingProxy pageProxy;
	@Autowired Printer printer;
	@Autowired Room room;
	@Autowired HotelServiceImpl hotelService;
	@Autowired Hotel hotel;
	@Autowired Comments comments;
	@Autowired Reservation reservation;

	
	@GetMapping("/create/reservationtable/")
	public Map<?, ?> createReservation(){
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_RESERVATION", SQL.CREATE_RESERVATION.toString());
		Consumer<HashMap<String, String>> c = t -> hotelMapper.createReservation(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	@PostMapping("/insert/reservationDB")
	public Map<?, ?> book(@RequestBody Reservation param){
		Consumer<Reservation> c = t -> hotelMapper.insertReservation(param);
		c.accept(param);
		map.clear();
		map.put("msg","SUCCESS");
		return map;
	}
	
	@GetMapping("/create/commentstable/")
	public Map<?, ?> createComments() {
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_COMMENTS", SQL.CREATE_COMMENTS.toString());
		Consumer<HashMap<String, String>> c = t -> hotelMapper.createComments(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/insert/commentsDB/")
	public Map<?, ?> insertcommentsDB() {
		HashMap<String, String> paramMap = new HashMap<>();
		commentsProxy.insertCommentsDB();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	@PostMapping("/insert/hotelComment")
	public Map<?, ?> comment(@RequestBody Comments param) {
		System.out.println();
		Consumer<Comments> c = t -> hotelMapper.insertComments(param);
		c.accept(param);
		map.clear();
		map.put("msg","SUCCESS");
		return map;
	
	}
		
	
	@GetMapping("/create/hoteltable/")
	public Map<?, ?> createHotel() {
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_HOTEL", SQL.CREATE_HOTEL.toString());
		Consumer<HashMap<String, String>> c = t -> hotelMapper.createHotel(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/insert/hotelDB/")
	public Map<?, ?> insertHotelDB() {
		HashMap<String, String> paramMap = new HashMap<>();
		hotelProxy.insertHotelDB();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/create/roomtable/")
	public Map<?, ?> createRoom() {
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_ROOM", SQL.CREATE_ROOM.toString());
		Consumer<HashMap<String, String>> c = t -> hotelMapper.createRoom(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/insert/roomdb/")
	public Map<?, ?> insertRoomDB() {
		HashMap<String, String> paramMap = new HashMap<>();
		roomProxy.insertRoomDB();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/list")
	public Map<?, ?> hotelList() {
		HashMap<String, Object> map = new HashMap<>();
		//System.out.println(pageNo);
		map.put("hotel", hotelService.findHotelList(hotel));
		map.put("hotel2", hotelService.findHotelListForPrice(hotel));
		return map;
	}
	@GetMapping("/roomlist/{hotel_seq}")
	public Map<String, Object> roomList(@PathVariable int hotel_seq) {
		Map<String, Object> map = new HashMap<>();		
		room.setHotel_seq(String.valueOf(hotel_seq));
		Hotel hotel = hotelService.findOnHotelByHseq(hotel_seq);
		Comments comments = hotelService.findOnCommentsByRating(hotel_seq);
		Hotel hotelMap = hotelService.findMapHotel(hotel_seq);
		
		map.put("room", hotelService.findRoomList(room));
		map.put("hotel", hotel);
		map.put("hotelMap", hotelMap);
		map.put("comments", comments);
		return map;
	}
	@GetMapping("/comments/{hotel_seq}")
	public Map<String, Object> commentsList(@PathVariable int hotel_seq) {
		/* System.out.println("코맨츠 리스트 컨트롤러"+hotel_seq); */
		Map<String, Object> map = new HashMap<>();
		comments.setHotel_seq(String.valueOf(hotel_seq));
		map.put("comments", hotelService.findCommentsList(comments));
		/* System.out.println("코맨츠" + map.get("comments")); */
		return map;
	}
	
	@GetMapping("/newComments/{hotel_seq}")
	public Map<String, Object> commentNew(@PathVariable int hotel_seq) {
		Map<String, Object> map = new HashMap<>();
		comments.setHotel_seq(String.valueOf(hotel_seq));
		map.put("newComment", hotelService.findHotelcomment(hotel_seq));
		return map;
	}
	@GetMapping("/search/{hotel_area}")
	public Hotel[] search(@PathVariable String hotel_area){
		return hotelMapper.selectSearchList().stream().toArray(Hotel[]::new);
	}
	@GetMapping("/location/{hotel_area}")  
	public Map<String, Object> location(@PathVariable String hotel_area){	
		Map<String, Object> map = new HashMap<>();	
		hotel.setHotel_area(hotel_area);
		map.put("hotel", hotelService.findLocationList(hotel));
		return map;
	}
	
	@GetMapping("/bestList")
	public Map<?, ?> bestList() {
		HashMap<String, Object> map = new HashMap<>();
		//System.out.println(pageNo);
		map.put("hotelRating", hotelService.findBestRatingList(hotel));
		map.put("hotelPrice", hotelService.findBestPriceList(hotel));
		return map;
	}
	
	@GetMapping("/hotelMap/{hotel_seq}")
	public Map<String, Object> hotelMap(@PathVariable int hotel_seq) {
		Map<String, Object> map = new HashMap<>();		
		hotel.setHotel_seq(String.valueOf(hotel_seq));
		Hotel hotel = hotelService.findMapHotel(hotel_seq);
		map.put("hotelMap", hotel);
		System.out.println(hotel);
		return map;
	}
	
}
