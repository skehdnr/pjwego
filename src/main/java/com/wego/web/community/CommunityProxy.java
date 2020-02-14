package com.wego.web.community;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wego.web.mapper.CommunityMapper;

import lombok.Data;
@Data
@Component
public class CommunityProxy {
	
	@Autowired CommunityCrawling communityCrawling;
	@Autowired CommunityMapper communityMapper;
    public String makeUserid() {

      List<String> uidText = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o",
                 "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                 "0");
      Collections.shuffle(uidText);
      String uid = uidText.get(0)+uidText.get(1)+uidText.get(2)+uidText.get(3)+uidText.get(4)+uidText.get(5);
      return uid;
  }
    
    List<String> content = Arrays.asList("");
    
    
    private int totalCount,startRow,endRow ,
	pageCount,pageNum;
    private final int pageSize = 6;
    
    public void paging() {
    	totalCount =communityMapper.countCommunity();
    	pageCount = (totalCount % pageSize !=0)?(totalCount /pageSize)+1 : totalCount / pageSize;
    	startRow = (pageNum < 1)? 0 : (pageNum-1)*pageSize;
    	endRow =(pageNum ==pageCount)?totalCount -1:startRow+pageSize-1;
    	System.out.println("pageSize"+pageSize);
    	System.out.println("startRow"+startRow);
    }
	

}
