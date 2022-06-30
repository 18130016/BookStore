package com.baokaka.api.payloads;

import java.util.List;

public class BookPaginationAndFilter {
	private int numberOfSize;
	private List<BookResponse> list;
	private int numberOfItems;
	private int numberOfPages;
	
	
	
	public BookPaginationAndFilter() {
	}



	public BookPaginationAndFilter(int numberOfSize, List<BookResponse> list, int numberOfItems, int numberOfPages) {
		this.numberOfSize = numberOfSize;
		this.list = list;
		this.numberOfItems = numberOfItems;
		this.numberOfPages = numberOfPages;
	}



	public int getNumberOfSize() {
		return numberOfSize;
	}



	public void setNumberOfSize(int numberOfSize) {
		this.numberOfSize = numberOfSize;
	}



	public List<BookResponse> getList() {
		return list;
	}



	public void setList(List<BookResponse> list) {
		this.list = list;
	}



	public int getNumberOfItems() {
		return numberOfItems;
	}



	public void setNumberOfItems(int numberOfItems) {
		this.numberOfItems = numberOfItems;
	}



	public int getNumberOfPages() {
		return numberOfPages;
	}



	public void setNumberOfPages(int numberOfPages) {
		this.numberOfPages = numberOfPages;
	}

	
	
	
	
	

}
