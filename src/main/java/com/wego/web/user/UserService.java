package com.wego.web.user;

import org.springframework.stereotype.Component;

@Component
public interface UserService {
	public User findFindId(User user);
	public User findFindPwd(User user);
}
