package com.wego.web.festival;

import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.wego.web.mapper.FestivalMapper;
import com.wego.web.proxy.Proxy;

import lombok.Data;

@Data @Lazy
@Component("pager")
public class FestivalPage extends Proxy{
	
	private int cardCount,startCard,endCard,
	pageSize,pageCount,nowPage,startPage,endPage,
	blockSize,blockCount,nowBlock,prevBlock,nextBlock;
	
	private boolean existPrev,existNext;
	private final int BLOCK_SIZE = 4;
	
	@Autowired FestivalMapper festivalmapper;
	public void paging() {
		Supplier<String> s = ()-> festivalmapper.countFestival();
		cardCount = Integer.parseInt(s.get());
		System.out.println("프록시 안에서 찍은 전체글 갯수: "+cardCount);
		pageCount = (cardCount % pageSize != 0) ? (cardCount / pageSize)+1 : cardCount / pageSize;
		startCard = (nowPage-1)*pageSize;
		endCard = (nowPage==pageCount) ? cardCount -1 : startCard + pageSize -1;
		blockCount = (pageCount % BLOCK_SIZE != 0) ? (pageCount / BLOCK_SIZE)+1 : pageCount / BLOCK_SIZE;
		nowBlock = (nowPage - 1) / BLOCK_SIZE;
		startPage = nowBlock * BLOCK_SIZE + 1;
		endPage = ((nowBlock + 1) != blockCount) ? startPage + (BLOCK_SIZE -1) : pageCount;
		existPrev = nowBlock != 0;
		existNext = (nowBlock + 1) != blockCount;
		nextBlock = startPage + BLOCK_SIZE;
		prevBlock = startPage - BLOCK_SIZE;
		
	}

}