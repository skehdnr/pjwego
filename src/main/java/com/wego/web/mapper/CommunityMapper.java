package com.wego.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.wego.web.community.Community;
import com.wego.web.community.CommunityProxy;
import com.wego.web.community.Like;
import com.wego.web.community.Reply;
import com.wego.web.hotel.Comments;

@Repository
public interface CommunityMapper {
	public void createCommunity(HashMap<String, String> paramMap);
	public void createLike(HashMap<String, String> paramMap);
	public void createReply(HashMap<String, String> paramMap);
	public void dropCommunity(HashMap<String, String> paramMap);
	public void truncateCommunity(HashMap<String, String> paramMap);
	
	public void insertCommunity(Community community);
	public List<Community> communitylist(CommunityProxy pxy);
	//public List<Community> selectCommunityList(Community community);
	public List<Community> allcommunitylist();
	public int countCommunity();

	
	//public int selectbyuid(Community r);
	public void insertIMG(Community community);
	public int likecount(String art_seq);
	public String liked(Like l);
	
	
	public void insertReply(Reply param);
	public List<Reply> selectReply(int art_seq);
	public List<Reply> selectReplyList(Reply reply);
	public String getcommunityseq();
}
