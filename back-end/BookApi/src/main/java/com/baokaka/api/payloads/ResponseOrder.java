package com.baokaka.api.payloads;

import java.io.Serializable;
import java.util.List;

import com.baokaka.api.common.OrderItem;
import com.baokaka.api.model.Address;
import com.baokaka.api.model.Book;

public class ResponseOrder implements Serializable{
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	int id;
	int user_id;
	Address address;
	List<OrderItem> list_product;
	String status;
	String create_day;
	public ResponseOrder(int id, int user_id, Address address, List<OrderItem> list_product, String status,
						 String create_day) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.address = address;
		this.list_product = list_product;
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
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public List<OrderItem> getList_product() {
		return list_product;
	}
	public void setList_product(List<OrderItem> list_product) {
		this.list_product = list_product;
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
