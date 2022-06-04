package com.baokaka.api.payloads;

import java.io.Serializable;

import com.baokaka.api.model.Book;

public class ResponseCartItem implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private Book book;
	private int user_id;
	private int qty;
	/**
	 * @param id
	 * @param book
	 * @param user_id
	 * @param qty
	 */
	
	public ResponseCartItem() {
		
	}
	public ResponseCartItem(int id, Book book, int user_id, int qty) {
		super();
		this.id = id;
		this.book = book;
		this.user_id = user_id;
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
	
	
}
