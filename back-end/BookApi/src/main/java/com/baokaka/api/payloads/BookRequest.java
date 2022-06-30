package com.baokaka.api.payloads;

import org.springframework.web.multipart.MultipartFile;

public class BookRequest {
	
	String name;
	MultipartFile image;
	String author;
	String typeOfBook;
	double price;
	String description;
	public BookRequest(String name, MultipartFile image, String author, String typeOfBook, double price,
			String description) {
		this.name = name;
		this.image = image;
		this.author = author;
		this.typeOfBook = typeOfBook;
		this.price = price;
		this.description = description;
	}
	public BookRequest() {
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public MultipartFile getImage() {
		return image;
	}
	public void setImage(MultipartFile image) {
		this.image = image;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getTypeOfBook() {
		return typeOfBook;
	}
	public void setTypeOfBook(String typeOfBook) {
		this.typeOfBook = typeOfBook;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	

}
