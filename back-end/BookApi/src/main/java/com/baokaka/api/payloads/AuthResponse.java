package com.baokaka.api.payloads;

import java.io.Serializable;

public class AuthResponse implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	boolean check;
	String acessToken;
	public AuthResponse(boolean check, String acessToken) {
		this.check = check;
		this.acessToken = acessToken;
	}
	public boolean isCheck() {
		return check;
	}
	public void setCheck(boolean check) {
		this.check = check;
	}
	public String getAcessToken() {
		return acessToken;
	}
	public void setAcessToken(String acessToken) {
		this.acessToken = acessToken;
	}
	
	

	
	

}
