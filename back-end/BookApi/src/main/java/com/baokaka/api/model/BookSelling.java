package com.baokaka.api.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "selling_book")
public class BookSelling implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int book_id;
	/**
	 * @param id
	 * @param book_id
	 */
	private static final long serialVersionUID = 1L;

	public BookSelling() {
		
	}
	public BookSelling(int id, int book_id) {
		this.id = id;
		this.book_id = book_id;
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
	 * @return the book_id
	 */
	public int getBook_id() {
		return book_id;
	}
	/**
	 * @param book_id the book_id to set
	 */
	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}
	
	

}
