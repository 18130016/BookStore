package com.baokaka.api.payloads;

import com.baokaka.api.model.User;

public class ResponseCmt {
	private int id;
	private User user;
	private int book_id;
	private String content;
	private String time_create;
	private int rate;
	public ResponseCmt(int id, User user, int book_id, String content, String time_create, int rate) {
		this.id = id;
		this.user = user;
		this.book_id = book_id;
		this.content = content;
		this.time_create = time_create;
		this.rate = rate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public int getBook_id() {
		return book_id;
	}
	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getTime_create() {
		return time_create;
	}
	public void setTime_create(String time_create) {
		this.time_create = time_create;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}
	
	
	
	

}
