package com.baokaka.api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "user")
public class User implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Column(name = "full_name")
	private String full_name;
	@Column(name = "user_name")
	private String userName;
	@Column(name = "pass_word")
	private String passWord;
	@Column(name = "birthday")
	private String birthday;
	@Column(name= "admin")
	private boolean admin;
	/**
	 * @param id
	 * @param full_name
	 * @param password
	 * @param birthday
	 */
	
	public User() {
		
	}
	public User(int id, String full_name, String userName, String passWord, String birthday, boolean admin) {
		this.id = id;
		this.full_name = full_name;
		this.userName = userName;
		this.passWord = passWord;
		this.birthday = birthday;
		this.admin = admin;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFull_name() {
		return full_name;
	}
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
	
	
	

	
		
		
	

	
	
}
