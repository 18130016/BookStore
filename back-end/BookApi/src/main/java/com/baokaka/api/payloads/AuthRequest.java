package com.baokaka.api.payloads;

public class AuthRequest {
	String userName;
	String passWord;
	
	public AuthRequest() {
		
	}
	public AuthRequest(String userName, String passWord) {
		this.userName = userName;
		this.passWord = passWord;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	
}
