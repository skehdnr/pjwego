package com.wego.web.festival;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.wego.web.proxy.Proxy;

import lombok.Data;

@Data @Lazy
@Component("pager")
public class FestivalPage extends Proxy{
	
	private int	rowCount , startRow , endRow,
	pageCount , pageSize ,startPage, endPage, nowPage,
	blockCount , blockSize,  prevBlock , nextBlock ,nowBlock;
	private boolean	existPrev,existNext;
	private String search;
	
	public void paging() {
		System.out.println("크롤링한 사이즈: "+rowCount);
		pageCount = (rowCount % pageSize != 0) ? rowCount / pageSize + 1: rowCount / pageSize;
		blockCount = (pageCount % blockSize != 0) ? pageCount / blockSize + 1: pageCount / blockSize;
		startRow = nowPage * pageSize;
		endRow = (nowPage != (pageCount - 1)) ? startRow + (pageSize-1) : rowCount - 1;
		nowBlock = nowPage / blockSize;
		startPage = nowBlock * blockSize;
		endPage = (nowBlock != (blockCount - 1)) ? startPage + (blockSize-1) : pageCount - 1;
		prevBlock = startPage - blockSize;
		nextBlock = startPage + blockSize;
		existPrev = nowBlock != 0;
		existNext = (nowBlock+1) != blockCount; 
		
	}


}