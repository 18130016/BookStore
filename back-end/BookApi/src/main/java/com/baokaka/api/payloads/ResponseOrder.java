package com.baokaka.api.payloads;

import java.io.Serializable;

import com.baokaka.api.model.Book;

public class ResponseOrder implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	int id;
	Book book;
	int user_id;
	int qty;
	int address_id;
	String status;
	String create_day;
	/**
	 * @param id
	 * @param book
	 * @param user_id
	 * @param qty
	 * @param address_id
	 * @param status
	 * @param create_day
	 */
	public ResponseOrder(int id, Book book, int user_id, int qty, int address_id, String status, String create_day) {
		this.id = id;
		this.book = book;
		this.user_id = user_id;
		this.qty = qty;
		this.address_id = address_id;
		this.status = status;
		this.create_day = create_day;
	}
	
	public ResponseOrder() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCreate_day() {
		return create_day;
	}

	public void setCreate_day(String create_day) {
		this.create_day = create_day;
	}
	
	
	

}
