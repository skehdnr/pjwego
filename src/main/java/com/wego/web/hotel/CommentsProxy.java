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

import lombok.Data;
@Data
@Component
public class CommentsProxy {
	@Autowired HotelMapper hotelMapper;
	

//	public String makeUserid() {
//	      List<String> uidText = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o",
//	                 "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9",
//	                 "0");
//	      Collections.shuffle(uidText);
//	      String uid = uidText.get(0)+uidText.get(1)+uidText.get(2)+uidText.get(3)+uidText.get(4)+uidText.get(5);
//	      System.out.println("==1==");
//	      return uid;
//		}
	
	public String ratingList(){
		List<String> rating1 = Arrays.asList("1","2","3","4","5","6","7","8","9","10");
		Collections.shuffle(rating1);

		String result = rating1.get(0);
		System.out.println("==2==");
		return result;
	}
	
	public List<String> commentsList(){
		List<String> comment = Arrays.asList("룸컨디션도 나쁘지않고, 스텝들도 엄청친절해요",
				"가족 숙박으로 좋은 선택이었어요.",
				"깨끗하고 필요한거 원하는거 빠르게 해결해줌",
				"가성비 대비 방싸이즈 주방 세탁기구비 등등 만족하고 특히 투숙객 사우나 무료이용이 출장객한테는 하루 피로를 풀수있는 좋은 기회인거 같습니다",
				"깨끗하고 안락한 숙박시설",
				"합리적이며 편안한 숙박지이었어요... 사우나가 있어서 합리적인 숙박지로 이용을 하고있음",
				"깔끔한 객실과 친절한 서비스",
				"편의시설이 잘 되어있고 숙소 또한 깨끗하고 편리하게 이용할 수있도록 되어있었어요...그리고 직원분들이 친절하셨어요^^!!",
				"방은 넓고 쾌적하였습니다",
				"넓고 좋았어요 치약이 부족했던 점 제외하고는 괜찮았아요",
				"가격대비 가성비 좋아요",
				"셀수없을정도로 자주 이용하는 곳입니다. 이번에도 전반적으로 전부 만족스러웠습니다",
				"다들 너무 좋다고 겨울오기전에 또 가기로 했어요",
				"제가 약간 귀찮은 요구를 했었는데도 친절하게 응대해 주셔서 너무 감사했습니다",
				"좋아요",
				"위치가 너무너무 좋지만.. 커피포트 같은 건 관리가 됐으면 좋겠어요",
				"너무 좋았어요",
				"앞으로 더 자주 찾을 것 같아요.",
				"룸컨디션도 나쁘지않고, 어메니티도 충분했어요",
				"다음에 또 갈거예요",
				"깨끗하고 필요한거 원하는거 빠르게 해결해줌. 최고입니다.",
				"서비스가 정말 좋아요",
				"대체로 만족",
				"사우나가 있어서 합리적인 숙박지로 이용을 하고있음",
				"직원들이 친절해요!",
				"위치가 정말 좋아요! 그리고 직원분들이 친절하셨어요^^!!",
				"방은 좀 작지만 그래도 쾌적하였습니다",
				"넓고 좋았어요 소음만 빼면 괜찮아요",
				"가성비 좋은 호텔",
				"앞으로도 자주 찾을 것 같습니다.",
				"다음에 또 갈거에요!",
				"응대가 빠르고 친절해요",
				"부족한 어메니티나 수건 금방 채워줘서 좋았어요",
				"위치가 너무너무 좋지만.. 청소가 덜 된 것 같은 느낌도 있었어요",
				"최고였습니다.",
				"단골이 될 것 같아요~",
				"조식이 맛있었어요~",
				"프로모션 이용하러 방문했는데 만족합니다^^",
				"기분좋게 이용하고 왔어요",
				"몇 번 갔었는데 직원 분이 알아보시고 빠른 응대 해주셔서 좋았어요",
				"여기를 대체할 다른 호텔은 없는 것 같아요",
				"생각보다 조식은 별로였지만 객실은 만족스러웠어요",
				"프론트에서 알람을 해주신 덕분에 늦지 않게 약속장소로 갈 수 있었습니다.",
				"택시가 바로바로 잡히는 위치라 좋아요 ㅋㅋㅋ",
				"다음에 또 방문하려구요~",
				"가격에 비해 좀 그런데 그래도 위치나 직원들이 친절해서 자주 방문해요",
				"룸컨디션도 나쁘지않고, 스텝들도 엄청친절해요",
				"가족 숙박으로 좋은 선택이었어요.",
				"깨끗하고 필요한거 원하는거 빠르게 해결해줌",
				"가성비 대비 방싸이즈 주방 세탁기구비 등등 만족하고 특히 투숙객 사우나 무료이용이 출장객한테는 하루 피로를 풀수있는 좋은 기회인거 같습니다",
				"깨끗하고 안락한 숙박시설",
				"합리적이며 편안한 숙박지이었어요... 사우나가 있어서 합리적인 숙박지로 이용을 하고있음",
				"깔끔한 객실과 친절한 서비스",
				"편의시설이 잘 되어있고 숙소 또한 깨끗하고 편리하게 이용할 수있도록 되어있었어요...그리고 직원분들이 친절하셨어요^^!!",
				"방은 넓고 쾌적하였습니다",
				"넓고 좋았어요 치약이 부족했던 점 제외하고는 괜찮았아요",
				"가격대비 가성비 좋아요",
				"셀수없을정도로 자주 이용하는 곳입니다. 이번에도 전반적으로 전부 만족스러웠습니다",
				"다들 너무 좋다고 겨울오기전에 또 가기로 했어요",
				"제가 약간 귀찮은 요구를 했었는데도 친절하게 응대해 주셔서 너무 감사했습니다",
				"좋아요",
				"위치가 너무너무 좋지만.. 커피포트 같은 건 관리가 됐으면 좋겠어요",
				"너무 좋았어요",
				"앞으로 더 자주 찾을 것 같아요.",
				"룸컨디션도 나쁘지않고, 어메니티도 충분했어요",
				"다음에 또 갈거예요",
				"깨끗하고 필요한거 원하는거 빠르게 해결해줌. 최고입니다.",
				"서비스가 정말 좋아요",
				"대체로 만족",
				"사우나가 있어서 합리적인 숙박지로 이용을 하고있음",
				"직원들이 친절해요!",
				"위치가 정말 좋아요! 그리고 직원분들이 친절하셨어요^^!!",
				"방은 좀 작지만 그래도 쾌적하였습니다",
				"넓고 좋았어요 소음만 빼면 괜찮아요",
				"가성비 좋은 호텔",
				"앞으로도 자주 찾을 것 같습니다.",
				"다음에 또 갈거에요!",
				"응대가 빠르고 친절해요",
				"부족한 어메니티나 수건 금방 채워줘서 좋았어요",
				"위치가 너무너무 좋지만.. 청소가 덜 된 것 같은 느낌도 있었어요",
				"최고였습니다.",
				"단골이 될 것 같아요~",
				"조식이 맛있었어요~",
				"프로모션 이용하러 방문했는데 만족합니다^^",
				"기분좋게 이용하고 왔어요",
				"몇 번 갔었는데 직원 분이 알아보시고 빠른 응대 해주셔서 좋았어요",
				"여기를 대체할 다른 호텔은 없는 것 같아요",
				"생각보다 조식은 별로였지만 객실은 만족스러웠어요",
				"프론트에서 알람을 해주신 덕분에 늦지 않게 약속장소로 갈 수 있었습니다.",
				"택시가 바로바로 잡히는 위치라 좋아요 ㅋㅋㅋ",
				"다음에 또 방문하려구요~",
				"가격에 비해 좀 그런데 그래도 위치나 직원들이 친절해서 자주 방문해요");
		System.out.println("==3==");
		Collections.shuffle(comment);
		return comment;
		
	}
//	public String selectRseq() {
//		String result = "";
//		  List<Integer> arr = new ArrayList<>();
//	       int ran=0;    
//	       boolean check;    
//	       Random r = new Random();   
//	       System.out.println("==4==");
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
//	        System.out.println("==5==");
//	     System.out.println(result+"--->   랜덤값 출력");
//			return result;
//		
//
//	}
	  
	 public List<Comments> CommentsDB() {
		 Comments Comments= null;
		 List<Comments> CommentsList = new ArrayList<>();
		 int temp = 1;
		 for(int i = 0 ; i<commentsList().size();i++) {
			 if(temp <101) {
			 Comments = new Comments("hong", commentsList().get(i),ratingList(), temp+"");
			 temp++;
			 }else if(temp < 140){
				 Comments = new Comments("hong", commentsList().get(i),ratingList(), temp+"");
			 }
			 CommentsList.add(Comments);

		 }
		 
	  return CommentsList;
	 }
	 
		@Transactional
		public void insertCommentsDB() {
			 List<Comments> cList = CommentsDB();
			 System.out.println("==7==");
			for(int i=0;i<cList.size();i++) {
				hotelMapper.insertComments(cList.get(i));
			}
		
		}
}
