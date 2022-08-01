package com.baokaka.api.payloads;

import java.io.Serializable;

import com.baokaka.api.model.Book;

public class CartResponse implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	int id;
	Book book;
	int qty;
	
	public CartResponse() {
		
	}
	
	public CartResponse(int id, Book book, int qty) {
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
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
	
	

}
