package com.wego.web.user;


import org.springframework.stereotype.Component;

import com.wego.web.festival.FestivalBook;

@Component
public interface UserService {
	public User findFindId(User user);
	public User findFindPwd(User user);
	public FestivalBook mypagelist(FestivalBook festivalbook);
}
