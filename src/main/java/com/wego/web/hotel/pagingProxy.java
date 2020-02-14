package com.wego.web.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wego.web.mapper.HotelMapper;

import lombok.Data;
@Data
@Component
public class pagingProxy {
	@Autowired HotelMapper hotelMapper;
    private int totalCount,startRow,endRow ,
	pageCount,pageNum;
    private final int pageSize = 8;
    
    public void paging() {
    	totalCount =hotelMapper.countHotel();
    	pageCount = (totalCount % pageSize !=0)?(totalCount /pageSize)+1 : totalCount / pageSize;
    	startRow = (pageNum < 1)? 0 : (pageNum-1)*pageSize;
    	endRow =(pageNum ==pageCount)?totalCount -1:startRow+pageSize-1;
    	System.out.println("pageSize"+pageSize);
    	System.out.println("startRow"+startRow);
	    }
}
