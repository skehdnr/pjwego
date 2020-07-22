package com.wego.web.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wego.web.festival.Festival;
import com.wego.web.festival.FestivalBook;
import com.wego.web.mapper.UserMapper;


@Service
public class UserServiceImpl implements UserService{
	@Autowired UserMapper userMapper;

	@Override
	public User findFindId(User user) {
		return userMapper.selectFindId(user);
	}

	@Override
	public User findFindPwd(User user) {
		return userMapper.selectfindPwd(user);
	}

	@Override
	public FestivalBook mypagelist(FestivalBook festivalbook) {
		return userMapper.mypagelists(festivalbook);
	}


}
