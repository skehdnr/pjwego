package com.wego.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.wego.web.festival.FestivalBook;
import com.wego.web.user.User;

@Repository
public interface UserMapper {
	public void insertUser(User user);
	public User selectByIdPw(User user);
	public int existId(String userid);
	public void createUser(HashMap<String, String>paramMap);
	public void dropUser(HashMap<String, String>paramMap);
	public void removeUser(User user);
	public void truncateUser(HashMap<String,String> paramMap);
	public User selectFindId(User user);
	public User selectfindPwd(User user);
	public FestivalBook mypagelists(FestivalBook festivalbook);
	
}
