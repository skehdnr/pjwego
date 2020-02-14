package com.wego.web.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		// TODO Auto-generated method stub
		return userMapper.selectfindPwd(user);
	}
}
