package com.baokaka.api.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "favorite_book")
public class Favorite implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	int book_id;
	int user_id;
	String date_add;
	
	public Favorite() {
		
	}

	/**
	 * @param id
	 * @param book_id
	 * @param user_id
	 * @param date_add
	 */
	public Favorite(int id, int book_id, int user_id, String date_add) {
		this.id = id;
		this.book_id = book_id;
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
