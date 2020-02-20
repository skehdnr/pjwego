package com.wego.web.community;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wego.web.mapper.CommunityMapper;

@Service
public class CommunityServiceImpl implements CommunityService{
	@Autowired CommunityMapper communityMapper;

	@Override
	public List<Reply> findReply(int art_seq) {
		return communityMapper.selectReply(art_seq);
	}

	@Override
	public List<Reply> findReplyList(Reply reply) {
		return communityMapper.selectReplyList(reply);
	}
}
