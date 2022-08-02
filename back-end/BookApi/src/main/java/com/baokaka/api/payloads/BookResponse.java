package com.baokaka.api.payloads;


import com.baokaka.api.model.Book;


public class BookResponse {

	int id;
	String name;
	String image;
	String[] author;
	String[] typeOfBook;
	String descripton;
	double price;
	String dateAdd;
	int countCmt;

	public BookResponse(int id, String name, String image, String[] author, String[] typeOfBook, String descripton,
						double price, String addDate) {
		super();
		this.id = id;
		this.name = name;
		this.image = image;
		this.author = author;
		this.typeOfBook = typeOfBook;
		this.descripton = descripton;
		this.price = price;

	}

	public BookResponse(Book b) {
		this.id = b.getId();
		this.name = b.getName();
		this.image = b.getImage();
		this.author = sliceAuthor(b.getAuthor());
		this.typeOfBook = sliceTypeOfBook(b.getTypeOfBook());
		this.descripton = b.getDescription();
		this.price = b.getPrice();
		this.dateAdd = b.getDateAdd();
	}

	public BookResponse() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String[] getAuthor() {
		return author;
	}

	public void setAuthor(String[] author) {
		this.author = author;
	}

	public String[] getTypeOfBook() {
		return typeOfBook;
	}

	public void setTypeOfBook(String[] typeOfBook) {
		this.typeOfBook = typeOfBook;
	}

	public String getDescripton() {
		return descripton;
	}

	public void setDescripton(String descripton) {
		this.descripton = descripton;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDateAdd() {
		return dateAdd;
	}

	public void setDateAdd(String addDate) {
		this.dateAdd = addDate;
	}

	public String[] sliceAuthor(String authorName) {
		String[] result = authorName.trim().split(";");
		return result;
	}

	public String[] sliceTypeOfBook(String type) {
		String[] result = type.trim().split(";");
		return result;
	}


	public int getCountCmt() {
		return countCmt;
	}

	public void setCountCmt(int countCmt) {
		this.countCmt = countCmt;
	}




}
