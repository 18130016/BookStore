package com.baokaka.api.order;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_order")
public class Order implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	int book_id;
	int user_id;
	int qty;
	int address_id;
	String status;
	String create_day;

	public Order() {
		
	}

	/**
	 * @param id
	 * @param book_id
	 * @param user_id
	 * @param qty
	 * @param address_id
	 * @param status
	 * @param create_date
	 */
	public Order(int id, int book_id, int user_id, int qty, int address_id, String status, String create_date) {
		this.id = id;
		this.book_id = book_id;
		this.user_id = user_id;
		this.qty = qty;
		this.address_id = address_id;
		this.status = status;
		this.create_day = create_date;
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
	 * @return the qty
	 */
	public int getQty() {
		return qty;
	}

	/**
	 * @param qty the qty to set
	 */
	public void setQty(int qty) {
		this.qty = qty;
	}

	/**
	 * @return the address_id
	 */
	public int getAddress_id() {
		return address_id;
	}

	/**
	 * @param address_id the address_id to set
	 */
	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the create_date
	 */
	public String getCreate_date() {
		return create_day;
	}

	/**
	 * @param create_date the create_date to set
	 */
	public void setCreate_date(String create_date) {
		this.create_day = create_date;
	}

	
	
}
