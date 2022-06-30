package com.baokaka.api.payloads;

import java.io.Serializable;

public class CartResponse implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	int id;
	BookResponse book;
	int qty;
	
	public CartResponse() {
		
	}
	
	public CartResponse(int id, BookResponse book, int qty) {
		this.id = id;
		this.book = book;
		this.qty = qty;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public BookResponse getBook() {
		return book;
	}
	public void setBook(BookResponse book) {
		this.book = book;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
	
	

}
