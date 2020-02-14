package com.wego.web.admin;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.wego.web.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@Lazy
@NoArgsConstructor
public class Admin {
	private String aid,apwd,tel,addr;
}
