package com.wego.web.tourism;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.mapper.TourismMapper;
import com.wego.web.proxy.Box;

import lombok.Data;

@Data
@Component("tproxy")
public class TourismProxy {
	@Autowired TourismMapper tourismMapper;
	@Autowired Tourism tourism;
	@Autowired Box<String> box;
	@Autowired Trunk<String> trunk;


	
	 public List<String> makeUserid() {

	      List<String> uids = Arrays.asList("aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj","kkkk","llll","mmmm","nnnn","oooo","pppp","qqqq","rrrr");
	     
	      return uids;
	  }
	public List<String> makePlace() {
		List<String> place = Arrays.asList("경복궁","N서울타워","명동",
				"북촌한옥마을","인사동","창덕궁",
				"롯데월드","청계천","남산",
				"동대문디자인플라자","스타필드코엑스몰","광장시장",
				"코엑스","가로수길","LG아트센터",
				"백암아트홀","피규어뮤지엄W","도산공원");
		
		return place;
	}
	

	
	public List<String> makeSpot() {
		List<String> spot = Arrays.asList("서울특별시 종로구 세종로 사직로 161","서울특별시 용산구 용산2가동 남산공원길 105","서울특별시 중구 명동",
				"서울특별시 종로구 가회동 계동길 37","서울특별시 종로구 인사동","서울특별시 종로구 와룡동 율곡로 99",
				"서울특별시 송파구 잠실동 올림픽로 240","서울특별시 종로구 용신동 청계천로","서울특별시 중구 용산2가동 삼일대로 231",
				"서울특별시 중구 을지로7가 을지로 281","서울특별시 강남구 삼성1동 영동대로 513","서울특별시 종로구 종로4가 창경궁로 88",
				"서울 강남구 영동대로 513","서울 강남구 신사동","서울 강남구 논현로 508",
				"서울 강남구 테헤란로113길 7 아트센터","서울 강남구 선릉로158길 3 Ys Roo","서울 강남구 도산대로45길 20 도산전시관");
		return spot;
	}
	
	public List<String> makeTourismInfo() {
		List<String> tourismInfo = Arrays.asList("궁궐 한복체험 박물관 고즈넉한공연","케이블카 야경투어 전망대 화려한 성곽길","먹거리 볼거리 데이트코스",
				"한복체험 박물관 공방카페","볼거리 데이트 산책","궁궐 단풍구경 가을소풍 소박한산책길",
				"놀이동산 회전목마 자이로드롭","야경 야시장 산책로 화려한나들이","둘레길 전망대 산책로",
				"LED장미 시장 야경 나들이","트렌디함 아쿠아리움 데이트 박람회","인심좋은 활기찬 재래시장 나들이 데이트",
				"글로벌 비즈니스 메카 최고의 전시회","핫플레이스,주말나들이","예술가들과 관객의 만남",
				"데이트 힐링 나들이 소극장","무한도전 출연 휴식 체험관","나들이 명소 산책 데이트");
		return tourismInfo;
	}

	
	public List<String> makeImg() {
		List<String> img = Arrays.asList("https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20141014_7%2F1413279368535l3xVK_JPEG%2F%25BC%25AD%25BF%25EF_%25B0%25E6%25BA%25B9%25B1%25C3%25B4%25DC%25C7%25B3_2.JPG%3Ftype%3Dm500_500&type=f&size=86x86",
				 "https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_206%2F1396854867641qfjws_JPEG%2F%25BC%25AD%25BF%25EF_N%25BC%25AD%25BF%25EF%25C5%25B8%25BF%25F6_1.JPG%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=https%3A%2F%2Fmap.naver.com%2Fv5%2Fapi%2Fv2%2Fpanorama%2Fthumbnail%2FFhhZwgaRmGopApUy1sg_Ag%3Fheading%3D157.39%26width%3D86%26height%3D86&type=f&size=86x86",
				
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_118%2F1396856013658RKzfL_JPEG%2F%25BC%25AD%25BF%25EF_%25BA%25CF%25C3%25CC%25C7%25D1%25BF%25C1%25B8%25B6%25C0%25BB_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20150901_282%2F1441052871948azVlg_JPEG%2F116976516275300_0.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_148%2F139685579507146AXK_JPEG%2F%25BC%25AD%25BF%25EF_%25C3%25A2%25B4%25F6%25B1%25C3_10.JPG%3Ftype%3Dm500_500&type=f&size=86x86",
				
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_148%2F1396853969940TYVXr_JPEG%2F%25BC%25AD%25BF%25EF_%25B7%25D4%25B5%25A5%25BF%25F9%25B5%25E5_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEyMjhfNTkg%2FMDAxNTE0NDcwODE3NzU4.NmxWFDvjDDxl4FYWNXavS2SD5VsDfMWxqwgxUfG3IFEg.53l6qE0hi2KJxxrKyTgiKdez072GJdKqmMrKsJvfuE8g.JPEG.rnldya12%2FIMG_0701.jpg%23900x675&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_228%2F1396856087323eAktJ_JPEG%2F%25BC%25AD%25BF%25EF_%25B3%25B2%25BB%25EA%25C7%25D1%25BF%25C1%25B8%25B6%25C0%25BB_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86",
				
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20170526_171%2F1495772011947hzUIv_JPEG%2FDDP1_%25281%2529.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20190318_76%2F15528866197845Mqbi_JPEG%2FEoTAmY7lv_VEqh0j5cl1Zfi1.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20150831_208%2F1441015652359wLYkJ_JPEG%2F156675583839830_0.jpg&type=f&size=86x86",
				
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_294%2F1396853911660oX1mT_JPEG%2F%25BC%25AD%25BF%25EF_%25C4%25DA%25BF%25A2%25BD%25BA_1.jpg%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140407_74%2F1396856799939igigw_JPEG%2F%25BC%25AD%25BF%25EF_%25BD%25C5%25BB%25E7%25B5%25BF%25B0%25A1%25B7%25CE%25BC%25F6%25B1%25E6_11.JPG%3Ftype%3Dm500_500&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20190430_71%2F1556619473032psALO_JPEG%2Ftz_uwOFXkIxFhcvYsfOwP3QS.jpg&type=f&size=86x86",
				
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzExMjNfNzQg%2FMDAxNTExNDQzNzY5MDQy.90NMQ2DDnxu9gFS4B6LxHciDeFqsN4wIMCvJdJWXh3Eg.8nXeekVZ1sIrVOkiYktOLVQtLHirbWwUGXcXiZsvvIQg.JPEG.saekomgod%2FIMG_4776.jpg%23900x1200&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20180706_200%2F1530865520610TSd9m_JPEG%2F%2528.jpg&type=f&size=86x86",
				"https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20140714_299%2F1405329011338nJgMV_JPEG%2F%25BC%25AD%25BF%25EF_%25B5%25B5%25BB%25EA%25B0%25F8%25BF%25F8_1.JPG%3Ftype%3Dm500_500&type=f&size=86x86");
		return img;
	}

	
	public String makeheartcnt(){
		 int i = 0;
		return i+"";
	}
	
	

	public List<Tourism> makeTourism() {
		Tourism tourism = null;
		List<Tourism> tourismlist = new ArrayList<>();
		for(int i = 0; i<makePlace().size(); i++) {
			tourism = new Tourism();
			tourismlist.add(tourism);
		}
		System.out.println(tourismlist);
		return tourismlist;
	}
	
	
	@Transactional
	public void insertTourism() {
		List<Tourism> tourismList = makeTourism();
		for(int i = 0; i < tourismList.size(); i++) {
			tourismMapper.insertTourism(tourismList.get(i));
		}
	}

}
