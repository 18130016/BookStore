package com.baokaka.api.payloads;

import java.io.Serializable;


import lombok.Data;

@Data
public class UserRequest implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	String username;
	String password;

	/**
	 * @param username
	 * @param password
	 */
	public UserRequest(String username, String password) {
		this.username = username;
		this.password = password;
	}

	/**
	 * 
	 */
	public UserRequest() {
		super();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	 
	

}
