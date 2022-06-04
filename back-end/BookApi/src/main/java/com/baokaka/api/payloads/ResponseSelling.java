package com.baokaka.api.payloads;

import java.io.Serializable;

import com.baokaka.api.model.Book;

public class ResponseSelling implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private  Book book;
	/**
	 * @param id
	 * @param book
	 */
	public ResponseSelling() {
		
	}
	public ResponseSelling(int id, Book book) {
		this.id = id;
		this.book = book;
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
	public Book getBook() {
		return book;
	}
	/**
	 * @param book the book to set
	 */
	public void setBook(Book book) {
		this.book = book;
	}
	
	
	
	

}
