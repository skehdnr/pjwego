package com.wego.web.hotel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.mapper.HotelMapper;

import lombok.Data;

@Data
@Component
public class HotelProxy {
	@Autowired HotelMapper hotelMapper;
	
    
	public List<String> hotelnameList() {
		List<String> hotelname = Arrays.asList("호텔 카푸치노","알로프트 서울 강남","프레이저 플레이스",
				"더리센츠 호텔","골든호텔","카라쉬 호텔","케니스토리","호텔 크레센도","호텔 데님",
				"호텔 선샤인 서울","호텔 포레힐","라비타 호텔","메이플레이스","IBC 호텔","아벤트리 호텔","크라운 호텔","호텔 페이토","호텔 아트리움");
		
		return hotelname;
	}
	


	/*
	 * public List<Double> ratingList(){ List<Double> rating =
	 * Arrays.asList(8.6,5.4,8.6,8.0,6.4,9.4,5.2,8.0,4.0,5.5,9.2,9.2,7.0,7.2,6.4,7.6
	 * ,5.4,5.5);
	 * 
	 * return rating;
	 * 
	 * }
	 */
	 
	public List<String> hotelimgList(){
		List<String> hotelimg = Arrays.asList("https://image.goodchoice.kr/resize_1000X500x0/affiliate/2018/02/20/5a8bd16270015.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2017/05/12/59155dd18fd3b.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/23/57427066030b2.jpg",//
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/60449/0/5cf9fa5002ed3.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/11/20/5dd4d28239794.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/57843/0/5d6cc2fc934bc.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743b380cbe43.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/10/17/5da8243dcefbd.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743fc4cd44d8.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/23/57425f4e7f400.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/51149/0/5b472ee80c5ef.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/21/573ffda182be0.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/46392/0/592f4601e1fb3.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/07/16/5d2d628cede99.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/20/573ebadaddeed.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2018/10/31/5bd96e0371c77.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/6244/0/574e49a02aef8.jpg");
		
		return hotelimg;
		
	}

	/*
	 * public List<Integer> priceList(){ List<Integer> price =
	 * Arrays.asList(93397,47273,95000,52364,90909,36091,40909,53273,45455,63636,
	 * 59091,160000,32728,41322,49587,36364,35455,36364);
	 * 
	 * return price;
	 * 
	 * }
	 */
	public List<String> haddrList(){
		List<String> haddr = Arrays.asList("서울특별시 강남구 봉은사로 155", 
				"서울 강남구 영동대로 736", 
				"서울 중구 통일로 78 프레이저플레이스", 
				"서울특별시 동대문구 천호대로 383",
				"서울특별시 강서구 공항대로 663",
				"서울특별시 동작구 동작대로1길 15",
				"서울특별시 종로구 창경궁로16가길 9",
				"서울특별시 강남구 봉은사로 428",
				"서울특별시 강남구 논현로 66",
				"서울특별시 강남구 도산대로 205",
				"서울특별시 강남구 학동로 117",
				"서울특별시 강남구 영동대로 712",
				"서울특별시 종로구 율곡로 179",
				"서울 종로구 숭인동 1396",
				"서울특별시 종로구 우정국로 46",
				"서울특별시 중구 남대문로7길 19",
				"서울특별시 서초구 강남대로 259",
				"서울특별시 종로구 중구 창경궁로 106");
		
		return haddr;
		
	}
	public List<String> mapList(){
		List<String> map = Arrays.asList("37.506691, 127.031559", //호텔 카푸치노
				"37.523602, 127.055954", //알로프트 서울 강남
				"37.562566, 126.969742", //프레이저 플레이스
				"37.562218, 127.061612", //더리센츠 호텔
				"37.547796, 126.878131", // 골든호텔
				"37.477067, 126.980412", // 카라쉬 호텔
				"37.574202, 126.999420", // 케니스토리
				"37.510714, 127.046920", // 호텔 크레센도
				"37.476181, 127.046646", //호텔 데님
				"37.520538, 127.028760", //호텔 선샤인 서울
				"37.512044, 127.023637", //호텔 포레힐
				"37.521378, 127.056918", //라비타 호텔
				"37.576142, 126.998682", //메이플레이스
				"37.573211, 127.022876", //IBC 호텔
				"37.573063, 126.983320", //아벤트리 호텔
				"37.563839, 126.980768", //크라운 호텔
				"37.486549, 127.032663", //호텔 페이토
				"37.571833, 126.998056"); //호텔 아트리움
		
		return map;
		
	}
	public List<String> areaList(){
		List<String> area = Arrays.asList("강남구", "강남구", "중구", "동대문구", "강서구","동작구","종로구","강남구","강남구","강남구","강남구","강남구",
				"종로구","종로구","종로구", "중구", "서초구", "종로구");
		
		return area;
		
	}
	  public List<String> hotelinfo() {
		  
	  List<String> hotelinfo = Arrays.asList("강남파이낸스센터 근처에 위치한 4성급 호텔, 레스토랑 이용 가능", 
			  "가로수길 근처에 위치한 4성급 호텔, 레스토랑 이용 가능", "남대문시장 근처에 위치한 4성급 호텔, 실내 수영장 이용 가능", 
			  "청계천 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능", "강서에 있으며 강가에 위치한 호텔, 레스토랑 및 바/라운지 이용 가능",
	  "서울대학교 근처에 위치한 부티크 호텔, 레스토랑 이용 가능", "청계천에 가기 편리한 3성급 호텔", "스타필드 코엑스몰 근처에 위치한 아르데코 양식의 호텔, 레스토랑 이용 가능", 
	  "서울에 있는 아르데코 양식의 호텔, 레스토랑 이용 가능", "가로수길 근처에 위치한 3성급 호텔, 레스토랑 이용 가능", "가로수길 근처의 3성급 호텔, 스파 이용 가능", 
	  "코엑스 아쿠아리움 근처에 위치한 3성급 호텔, 레스토랑 이용 가능", "서울 국립대학 병원 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능", 
	  "문화와 쇼핑의 중심인 명동, 동대문권에 위치하며 과거와 현재가 공존하는 풍물시장, 서울 속의 자연 청계천, 대형마트(이마트)가 인접하여 서울의 색다름을 느낄 수 있는 호텔입니다", "청계천 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능", "롯데백화점 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능",
	  "강남에 위치한 3.5성급 호텔, 레스토랑 및 헬스클럽 이용 가능", "광장시장 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능");
	  
	  return hotelinfo; }
	

	
	 public List<Hotel> hotelDB() {	 
		 List<Hotel> hotelList = new ArrayList<>();
		 Hotel hotel = null;
		 for(int i = 0 ; i<hotelnameList().size();i++) {

			// double d = ratingList().get(i);
			// int p = priceList().get(i);
			// double d = ratingList().get(i);
			 hotel = new Hotel(hotelnameList().get(i),
					 hotelimgList().get(i), haddrList().get(i),areaList().get(i),hotelinfo().get(i), mapList().get(i));
			 hotelList.add(hotel);
			
			 //hotel = new Hotel(hotelnameList().get(i),ratingList().get(i),hidList().get(i),commentsList().get(i),hotelimgList().get(i),priceList().get(i),haddrList().get(i));
			 //hotelList.add(hotel);
		 }
		 System.out.println(hotelList);
	  return hotelList;
	 }
	 
		
		@Transactional
		public void insertHotelDB() {
			 List<Hotel> hList = hotelDB();
			for(int i=0;i<hList.size();i++) {
				hotelMapper.insertHotel(hList.get(i));
			}
		
		}


	 
	
}