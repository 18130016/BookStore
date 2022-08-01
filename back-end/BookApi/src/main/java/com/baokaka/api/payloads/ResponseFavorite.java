package com.baokaka.api.payloads;

import java.io.Serializable;



public class ResponseFavorite implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private BookResponse book;
	private int user_id;
	private String date_add;
	/**
	 * @param id
	 * @param book
	 * @param user_id
	 * @param date_add
	 */
	
	public ResponseFavorite() {
		
	}
	public ResponseFavorite(int id, BookResponse book, int user_id, String date_add) {
		this.id = id;
		this.book = book;
		this.user_id = user_id;
		this.date_add = date_add;
	}
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the book
	 */
	public BookResponse getBook() {
		return book;
	}
	/**
	 * @param book the book to set
	 */
	public void setBook(BookResponse book) {
		this.book = book;
	}
	/**
	 * @return the user_id
	 */
	public int getUser_id() {
		return user_id;
	}
	/**
	 * @param user_id the user_id to set
	 */
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	/**
	 * @return the date_add
	 */
	public String getDate_add() {
		return date_add;
	}
	/**
	 * @param date_add the date_add to set
	 */
	public void setDate_add(String date_add) {
		this.date_add = date_add;
	}
	
	
	

}
