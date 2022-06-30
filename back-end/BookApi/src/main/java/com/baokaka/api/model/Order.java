package com.baokaka.api.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.baokaka.api.common.OrderItem;

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
	int user_id;
	int address_id;
	String list_products;
	String status;
	String create_day;

	public Order() {
		
	}

	public Order(int id, int user_id, int address_id, String list_products, String status, String create_day) {
		this.id = id;
		this.user_id = user_id;
		this.address_id = address_id;
		this.list_products = list_products;
		this.status = status;
		this.create_day = create_day;
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

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}

	public String getList_products() {
		return list_products;
	}

	public void setList_products(String list_products) {
		this.list_products = list_products;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCreate_day() {
		return create_day;
	}

	public void setCreate_day(String create_day) {
		this.create_day = create_day;
	}
	
	

	
	


	
	
}
