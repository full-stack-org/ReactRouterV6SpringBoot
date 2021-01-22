package com.router.connect.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.router.connect.entity.LoginEntity;
import com.router.connect.repository.LoginRepository;
import com.router.connect.request.LoginRequest;
import com.router.connect.response.LoginResponse;
import com.router.connect.response.StatusResponse;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;

	/**
	 * 
	 * @param loginRequest
	 * @return
	 */
	public LoginResponse authenticate(LoginRequest loginRequest) {
		log.info("Entered in authenticate of LoginService");
		LoginResponse loginResponse = new LoginResponse();
		StatusResponse statusResponse = new StatusResponse();
		try {
			LoginEntity serviceResponse = loginRepository.findByEmailIdAndPassword(loginRequest.getEmailId(),
					loginRequest.getPassword());

			if (serviceResponse != null && StringUtils.hasText(serviceResponse.getEmailId())) {
				loginResponse.setAuthenticateSuccessfully(true);
				loginResponse.setFirstName(serviceResponse.getFirstName());
				loginResponse.setLastName(serviceResponse.getLastName());
				statusResponse.setStatusCode(200);
				statusResponse.setStatusMessage("Authentication Successful");
				loginResponse.setStatusResponse(statusResponse);
			} else {
				statusResponse.setStatusCode(422);
				statusResponse.setStatusMessage("User Does Not Exists");
				loginResponse.setStatusResponse(statusResponse);
			}

		} catch (Exception e) {
			loginResponse.setAuthenticateSuccessfully(false);
			statusResponse.setStatusCode(500);
			statusResponse.setStatusMessage("Experiencing Service issues");
			loginResponse.setStatusResponse(statusResponse);
			log.error("Exception while authentication", e.getMessage());
		}

		log.info("Exit in authenticate of LoginService");
		return loginResponse;
	}

}
