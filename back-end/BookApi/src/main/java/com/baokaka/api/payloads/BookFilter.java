package com.baokaka.api.payloads;

import java.util.List;

public class BookFilter {

	int page;
	int size;
	List<String> author;
	List<String> typeOfBook;
	String name;
	
	public BookFilter() {
		
	}

	public BookFilter(int page, int size, List<String> author, List<String> typeOfBook, String name) {
		this.page = page;
		this.size = size;
		this.author = author;
		this.typeOfBook = typeOfBook;
		this.name = name;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public List<String> getAuthor() {
		return author;
	}

	public void setAuthor(List<String> author) {
		this.author = author;
	}

	public List<String> getTypeOfBook() {
		return typeOfBook;
	}

	public void setTypeOfBook(List<String> typeOfBook) {
		this.typeOfBook = typeOfBook;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
