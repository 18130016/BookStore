package com.baokaka.api.common;

import com.baokaka.api.model.Book;

public class OrderItem {
	Book book;
	int qty;
	
	public OrderItem(Book book, int qty) {
		this.book = book;
		this.qty = qty;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book book) {
		this.book = book;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}

}
