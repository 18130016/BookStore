package com.baokaka.api.payloads;

import java.io.Serializable;

public class AuthResponse implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String acessToken;

	public AuthResponse(String acessToken) {
		this.acessToken = acessToken;
	}

	public String getAcessToken() {
		return acessToken;
	}

	public void setAcessToken(String acessToken) {
		this.acessToken = acessToken;
	}
	

}
