package com.baokaka.api.common;

import com.baokaka.api.payloads.BookResponse;

public class OrderItem {
	BookResponse book;
	int qty;
	
	public OrderItem(BookResponse book, int qty) {
		this.book = book;
		this.qty = qty;
	}
	public BookResponse getBook() {
		return book;
	}
	public void setBook(BookResponse book) {
		this.book = book;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}

}
