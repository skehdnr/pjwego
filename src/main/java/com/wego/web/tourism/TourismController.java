package com.wego.web.tourism;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wego.web.hotel.Comments;
import com.wego.web.hotel.Hotel;
import com.wego.web.mapper.TourismMapper;
import com.wego.web.proxy.Inventory;
import com.wego.web.util.Printer;

@RestController
@RequestMapping("/tourism")
public class TourismController {
	private static final Logger logger = LoggerFactory.getLogger(TourismController.class);
	@Autowired TourismMapper tourismMapper;
	@Autowired Printer printer;
	@Autowired TourismProxy tourismProxy;
	@Autowired Tourism tourism;
	@Autowired TourismLike tourismLike;
	@Autowired Inventory<Tourism[]> inventory;
	@Autowired TourServiceImpl tourService;
	
	@GetMapping("/create/table")
	public HashMap<String, String> createtourism() {
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_TOURISM", TourSQL.CREATE_TOURISM.toString());
		System.out.println(TourSQL.CREATE_TOURISM.toString());
		Consumer<HashMap<String, String>> c = t -> tourismMapper.createTourism(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/insert/dummy")
	public Map<?, ?> inserttourism() {
		HashMap<String, String> paramMap = new HashMap<String, String>();
		tourismProxy.insertTourism();
		return paramMap;
	}
	@GetMapping("/list")
	public Map<?, ?> tourList() {
		System.out.println("투어 리스트 컨트롤러");
		HashMap<String, Object> map = new HashMap<>();
		map.put("tour", tourService.findTourismList(tourism));
		System.out.println("투어리스트=====" + map.get("tour"));
		
//		int tour_seq = 1;
//		tourism.setTour_seq(String.valueOf(tour_seq));
//		Tourism tourism = tourService.findTourInfo(tour_seq);
//		map.put("tourism", tourism);
//		System.out.println("투어인포 tourseq"+tour_seq);
//		System.out.println("투어인포 컨트롤러"+tourism);
		return map;
	}
	@GetMapping("/tourinfo/{tour_seq}")
	public Map<String, Object> tourInfoList(@PathVariable int tour_seq){
		Map<String, Object> map = new HashMap<>();		
		tourism.setTour_seq(String.valueOf(tour_seq));
		Tourism tourinfo = tourService.findTourInfo(tour_seq);
		map.put("tourinfo", tourinfo);
		System.out.println("투어인포 tourseq"+tour_seq);
		System.out.println("투어인포 컨트롤러"+tourinfo);
		return map;
		
	}
//	@GetMapping("/roomlist/{hotel_seq}")
//	public Map<String, Object> roomList(@PathVariable int hotel_seq) {
//		System.out.println("룸리스트 컨트롤러"+hotel_seq);
//		Map<String, Object> map = new HashMap<>();		
//		room.setHotel_seq(String.valueOf(hotel_seq));
//		map.put("room", hotelService.findRoomList(room));
//		System.out.println("룸리스트" + map.get("room"));
//		Hotel hotel = hotelService.findOnHotelByHseq(hotel_seq);
//		System.out.println(hotel_seq+"-----------------");
//		Comments comments = hotelService.findOnCommentsByRating(hotel_seq);
//		Hotel hotelMap = hotelService.findMapByHseq(hotel_seq);
//		//map.put("comments", hotelService.findCommentsList(comments));
//		
//		System.out.println(comments + "------------2222222222");
//		System.out.println(comments.getRating() + "TEST============");
//		System.out.println("dkdkdkdkdk"+hotelMap);
//		map.put("hotel", hotel);
//		map.put("hotelMap", hotelMap);
//		map.put("comments", comments);
//		return map;
//	}

	
	
}
