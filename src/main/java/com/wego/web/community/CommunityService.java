package com.wego.web.community;

import java.util.List;

import org.springframework.stereotype.Component;

import com.wego.web.hotel.Comments;

@Component
public interface CommunityService {
	public List<Reply> findReply(int art_seq);
	public List<Reply> findReplyList(Reply reply);
}
