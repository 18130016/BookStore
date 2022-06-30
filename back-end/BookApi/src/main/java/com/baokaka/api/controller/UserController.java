package com.baokaka.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.User;
import com.baokaka.api.payloads.AuthRequest;
import com.baokaka.api.repository.UserRepository;
import com.baokaka.api.service.UserService;
import com.baokaka.api.util.ErrorResponse;



@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path = "/api")
public class UserController {
	
	@Autowired
	UserRepository repository;
	
	@Autowired
	private UserService userService;
	
	
	 @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
	        try {
	            return ResponseEntity.ok(userService.login(request));
	        } catch (IllegalArgumentException ex) {
	            return ResponseEntity.badRequest().body(new ErrorResponse(ex.getMessage()));
	        }
	    }
	 
	 @PostMapping("/register")
	 public ResponseEntity<?> register(@RequestBody User user){
		 try {
			 return ResponseEntity.ok(userService.register(user));
		 } catch (IllegalArgumentException e) {
			 return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
		}
	 }
	 
	 @GetMapping("/user")
	 public List<User> getAll(){ 
		 return repository.findAll();
	 }
	 
	 @GetMapping("/register/check/{username}")
	 public boolean checkUser(@PathVariable("username") String user) {
		 if(userService.getUserByUserName(user)!=null) {
			 return false;
		 }
		 return true;
	 }
	 
	 @GetMapping("/user/{username}")
	 public User getUserByUserName(@PathVariable("username") String user) {
		 return userService.getUserByUserName(user);
	 }
	 
	 
	 
	

	
}
