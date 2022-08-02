package com.baokaka.api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({ "hibernateLazyInitializer" })
@Entity
@Table(name = "book")
public class Book implements Serializable {

	private static final long serialVersionUID = -2810926649829063546L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "image", length = 16777215)
	private String image;

	@Column(name = "type_of_book")
	private String typeOfBook;

	@Column(name = "author")
	private String author;

	@Column(name = "description")
	private String description;

	@Column(name = "price")
	double price;

	@Column(name = "date_add")
	String dateAdd;

	public Book() {
	}

	public Book(int id, String name, String image, String typeOfBook, String author, String description, double price,
				String dateAdd) {
		super();
		this.id = id;
		this.name = name;
		this.image = image;
		this.typeOfBook = typeOfBook;
		this.author = author;
		this.description = description;
		this.price = price;
		this.dateAdd = dateAdd;
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

	public String getDateAdd() {
		return dateAdd;
	}

	public void setDateAdd(String dateAdd) {
		this.dateAdd = dateAdd;
	}

}
