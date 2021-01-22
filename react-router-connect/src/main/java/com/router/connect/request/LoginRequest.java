package com.router.connect.request;

import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
	
	@NotEmpty(message = "Email Id is Manadatory")
	private String emailId;
	
	@NotEmpty(message = "Password is Manadatory")
	private String password;
}
