package com.router.connect.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.router.connect.request.LoginRequest;
import com.router.connect.response.LoginResponse;
import com.router.connect.service.LoginService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/login/v1")
@Slf4j
@CrossOrigin
public class LoginController {

	@Autowired
	private LoginService loginService;

	/**
	 * 
	 * @param loginRequest
	 * @return
	 */
	@PostMapping("/authenticate")
	public LoginResponse authenticate(@Valid @RequestBody LoginRequest loginRequest) {
		log.info("Entered authenticate of LoginController with Email {} ", loginRequest.getEmailId());

		LoginResponse loginResponse = loginService.authenticate(loginRequest);

		log.info("Exit authenticate of LoginController with Email {} ", loginResponse.getFirstName());

		return loginResponse;
	}

}
