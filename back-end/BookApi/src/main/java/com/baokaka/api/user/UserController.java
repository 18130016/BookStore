package com.baokaka.api.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.address.Address;


@RestController
@RequestMapping(path="/user")
public class UserController {
	@Autowired
	UserRepository userRepository;
	
	@GetMapping(path ="/all")
	public List<User> getAllUser(){	
		return userRepository.findAll();
	}
	
	@GetMapping(path = "/{id}")
	public User getById(@PathVariable("id") int id) {
		User user = userRepository.findById(id).get();
		if(user == null) {
			ResponseEntity.notFound().build();
		}
		return user;
		
	}
	@PostMapping("/add")
	public User addBook(@RequestBody User newuser) {
		return userRepository.save(newuser);
		
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id ,@RequestBody User addr){
		try {
			addr.setId(id);
			userRepository.save(addr);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
