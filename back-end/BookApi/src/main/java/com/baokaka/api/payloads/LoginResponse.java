package com.baokaka.api.payloads;

public class LoginResponse {
	String acessToken;

	/**
	 * @param acessToken
	 */
	public LoginResponse(String acessToken) {
		this.acessToken = acessToken;
	}

	public String getAcessToken() {
		return acessToken;
	}

	public void setAcessToken(String acessToken) {
		this.acessToken = acessToken;
	}
	
	
	
	

}
