package com.baokaka.api.payloads;

import java.io.Serializable;

import com.baokaka.api.model.Book;

public class ResponseSelling implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private  BookResponse book;
	/**
	 * @param id
	 * @param book
	 */
	public ResponseSelling() {
		
	}
	
	public ResponseSelling(int id, BookResponse book) {
		super();
		this.id = id;
		this.book = book;
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


	
	
	

}
