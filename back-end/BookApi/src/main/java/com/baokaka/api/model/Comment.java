package com.baokaka.api.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "comment")
public class Comment implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int user_id;
	private int book_id;
	private String time_create;
	private String content;
	private int rate;
	/**
	 * @param id
	 * @param book_id
	 * @param user_id
	 * @param content
	 * @param rate
	 */

	public Comment() {
		
	}

	public Comment(int id, int user_id, int book_id, String time_create, String content, int rate) {
		this.id = id;
		this.user_id = user_id;
		this.book_id = book_id;
		this.time_create = time_create;
		this.content = content;
		this.rate = rate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getBook_id() {
		return book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}

	public String getTime_create() {
		return time_create;
	}

	public void setTime_create(String time_create) {
		this.time_create = time_create;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	
}
