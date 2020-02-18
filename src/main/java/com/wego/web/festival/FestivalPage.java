package com.wego.web.festival;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy
@Component
public class FestivalPage {
	private int totalCount,startRow,endRow ,
	pageCount , pageNum , pageSize , startPage,endPage,
	blockCount , blockNum , nextBlock , prevBlock ;
	private boolean existPrev, existNext;
	private String search;
	private final int BLOCK_SIZE = 4;

	@Autowired FestivalCrawling fc;

	public void paging(String url) {
		pageSize=4;

		List<String> lista = new ArrayList<>();
//		lista = (List<String>) fc.crawling(url).get("titles");

		int a = lista.size();
		totalCount =a;

		pageCount = (totalCount % pageSize !=0)?(totalCount /pageSize)+1 : totalCount / pageSize;
		startRow = (pageNum < 1)? 0 : (pageNum-1)*pageSize;
		endRow =(pageNum ==pageCount)?totalCount -1:startRow+pageSize-1;

		blockCount = (pageCount % BLOCK_SIZE !=0)?(pageCount/BLOCK_SIZE)+1 : pageCount / BLOCK_SIZE;
		blockNum = (pageNum-1)/BLOCK_SIZE;
		startPage = blockNum *BLOCK_SIZE +1;
		endPage= (blockCount-1 == blockNum ) ? pageCount: startPage+(BLOCK_SIZE-1);
		existPrev = (blockNum !=0)  ;
		existNext = (blockNum < blockCount-1);

		nextBlock = startPage + BLOCK_SIZE ; 
		prevBlock = startPage - BLOCK_SIZE;
	}
}
