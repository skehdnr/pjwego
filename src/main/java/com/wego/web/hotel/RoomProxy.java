package com.wego.web.hotel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.mapper.HotelMapper;
import com.wego.web.user.User;

import lombok.Data;

@Data
@Component
public class RoomProxy {
	@Autowired HotelMapper hotelMapper;
	

	public List<String> roomimgList() {
		List<String> roomimg = Arrays.asList("https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15540000/15536400/15536302/390f425f_b.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ec1f02bb94.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61e24506b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61993e43b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ebbe88bf2b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/24/5743dae480f98.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/16/594392b7aedde.jpg",
				"https://image.goodchoice.kr/resize_370x220/adimg_new/51149/211340/5c625be8394b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15540000/15536400/15536302/390f425f_b.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ec1f02bb94.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61e24506b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61993e43b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15540000/15536400/15536302/390f425f_b.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ec1f02bb94.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61e24506b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61993e43b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ebbe88bf2b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/24/5743dae480f98.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/16/594392b7aedde.jpg",
				"https://image.goodchoice.kr/resize_370x220/adimg_new/51149/211340/5c625be8394b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15540000/15536400/15536302/390f425f_b.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ec1f02bb94.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61e24506b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61993e43b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15540000/15536400/15536302/390f425f_b.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ec1f02bb94.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61e24506b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61993e43b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ebbe88bf2b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/24/5743dae480f98.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/16/594392b7aedde.jpg",
				"https://image.goodchoice.kr/resize_370x220/adimg_new/51149/211340/5c625be8394b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15540000/15536400/15536302/390f425f_b.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg",
				"https://image.goodchoice.kr/resize_490x348/affiliate/2016/05/20/573ec1f02bb94.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61e24506b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2019/07/16/5d2d61993e43b.jpg");
		Collections.shuffle(roomimg);
		return roomimg;
	}
	

	


	public List<String> roomtypeList() {
	
		List<String> roomtype = Arrays.asList("스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리",
				"스탠다드 트윈",
				"슈페리어 더블",
				"체크인시 배정(환불불가)",
				"디럭스 트윈(환불불가)",
				"프리미어 스탠다드 더블",
				"[2인조식 패키지] 트윈",
				"슈페리어 싱글",
				"스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리",
				"스탠다드 트윈",
				"슈페리어 더블",
				"체크인시 배정(환불불가)",
				"스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리",
				"스탠다드 트윈",
				"슈페리어 더블",
				"체크인시 배정(환불불가)",
				"디럭스 트윈(환불불가)",
				"프리미어 스탠다드 더블",
				"[2인조식 패키지] 트윈",
				"슈페리어 싱글",
				"스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리",
				"스탠다드 트윈",
				"슈페리어 더블",
				"체크인시 배정(환불불가)",
				"스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리",
				"스탠다드 트윈",
				"슈페리어 더블",
				"체크인시 배정(환불불가)",
				"디럭스 트윈(환불불가)",
				"프리미어 스탠다드 더블",
				"[2인조식 패키지] 트윈",
				"슈페리어 싱글",
				"스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리",
				"스탠다드 트윈",
				"슈페리어 더블",
				"체크인시 배정(환불불가)");
		Collections.shuffle(roomtype);
		return roomtype;
	}

	public List<Integer> priceList(){
		List<Integer> price = Arrays.asList(93000,45000,95000,100000, 88000, 75000, 60000, 120000, 
				132000, 98000, 110000, 77000, 99000, 140000, 115000, 87000,
				63000, 94000, 121000, 65000, 99500, 58000, 118000, 91000, 88500,93000,45000,95000,100000, 88000, 75000, 60000, 120000, 
				132000, 98000, 110000, 77000, 99000, 140000, 115000, 87000,
				63000, 94000, 121000, 65000, 99500,93000,45000,95000,100000, 88000, 75000, 60000, 120000, 
				132000, 98000, 110000, 77000, 99000, 140000, 115000, 87000,
				63000, 94000, 121000, 65000, 99500, 58000, 118000, 91000, 88500,93000,45000,95000,100000, 88000, 75000, 60000, 120000, 
				132000, 98000, 110000, 77000, 99000, 140000, 115000, 87000,
				63000, 94000, 121000, 65000, 99500,93000,45000,95000,100000, 88000, 75000, 60000, 120000, 
				132000, 98000, 110000, 77000, 99000, 140000, 115000, 87000,
				63000, 94000, 121000, 65000, 99500, 58000, 118000, 91000, 88500,93000,45000,95000,100000, 88000, 75000, 60000, 120000, 
				132000, 98000, 110000, 77000, 99000, 140000, 115000, 87000,
				63000, 94000, 121000, 65000, 99500);
		Collections.shuffle(price);
		return price;
		
	}

//	
//	public String selectHseq() {
//		String result = "";
//		  List<Integer> arr = new ArrayList<>();
//	       int ran=0;    
//
//	       for (int i=0; i< 100 ;) {  
//	    	   
//	    	   ran = (int) (Math.random()*100+1);
//	    	   if( i < 100 ) {
//		    	   if (!arr.contains(ran)) {
//		    		   arr.add(ran);
//		    		   System.out.println(ran + ">>>"+i);
//		    		   i++;
//		    	} 
//	    	   }else {
//	    		   arr.add(ran);
//	    		   System.out.println(ran + ">>>"+i);
//	    		   i++;
//	    	   }
//
//	       }
//
//	        for(int i=0; i<arr.size(); i++)   
//	        	  result=String.valueOf(arr.get(i));
//	       
//	     System.out.println(result+"랜덤값 출력----");
//			return result;
//		
//
//	}


	 public List<Room> roomDB() {
		 Room room= null;
		 List<Room> roomList = new ArrayList<>();
		 int temp = 1;
		 for(int i = 0 ; i<roomtypeList().size();i++) {
			 if(temp <101) {
			 room = new Room(roomtypeList().get(i),
					 roomimgList().get(i), priceList().get(i),
					 temp+"");
			 
				 temp++;
			 }else if(temp < 140){
				 room = new Room(roomtypeList().get(i),
						 roomimgList().get(i), priceList().get(i),
						 (int) (Math.random()*10+1)+"");
			 }
			 
			 roomList.add(room);
			
		 }
		 
	  return roomList;
	 }

		@Transactional
		public void insertRoomDB() {
			 List<Room> rList = roomDB();
			for(int i=0;i<rList.size();i++) {
				hotelMapper.insertRoom(rList.get(i));
			}
		
		}
	 
}