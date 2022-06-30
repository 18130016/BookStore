package com.baokaka.api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "book")
public class Book implements Serializable{

	
	private static final long serialVersionUID = -2810926649829063546L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "image", length = Integer.MAX_VALUE)
	private byte[] image;
	
	@Column(name = "type_of_book")
	private String typeOfBook;
	
	@Column(name = "author")
	private String author;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "price")
	double price;



	public Book() {
	}



	public Book(int id, String name, byte[] image, String typeOfBook, String author, String description, double price) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.typeOfBook = typeOfBook;
		this.author = author;
		this.description = description;
		this.price = price;
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



	public byte[] getImage() {
		return image;
	}



	public void setImage(byte[] image) {
		this.image = image;
	}



	public String getTypeOfBook() {
		return typeOfBook;
	}



	public void setTypeOfBook(String typeOfBook) {
		this.typeOfBook = typeOfBook;
	}



	public String getAuthor() {
		return author;
	}



	public void setAuthor(String author) {
		this.author = author;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}

	
	




	
	
	
}
