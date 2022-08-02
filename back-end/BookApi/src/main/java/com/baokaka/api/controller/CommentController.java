package com.baokaka.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.Comment;
import com.baokaka.api.model.User;
import com.baokaka.api.payloads.AuthResponse;
import com.baokaka.api.payloads.ResponseCmt;
import com.baokaka.api.repository.CommentRepository;
import com.baokaka.api.repository.UserRepository;
@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path="/api/cmt")
public class CommentController {

	@Autowired
	public CommentRepository cmtRepository;
	
	@Autowired 
	public UserRepository userRepository;
	
	@GetMapping("/{id}")
	public List<ResponseCmt> getAllCmtByBookId(@PathVariable("id") int id){
		List<ResponseCmt> list = new ArrayList<ResponseCmt>();

		for (Comment comment : cmtRepository.findAll()) {
			if(comment.getBook_id()==id) {
				
				list.add(new ResponseCmt(comment.getId(), userRepository.findById(comment.getUser_id()).get(),
						comment.getBook_id(), comment.getContent(), comment.getTime_create(), comment.getRate()));
			}
		}
		return list;
	}
	
	@PostMapping("")
	public AuthResponse addCmt(@RequestBody Comment cmt) {
		try {
			cmtRepository.save(cmt);
			return new AuthResponse(true,"Đã gửi");
		} catch (Exception e) {
			return new AuthResponse(false,"Thất bại");
		} 
	}
	
	@DeleteMapping("/{id}")
	public AuthResponse deleteById(@PathVariable("id") int id) {
		try {
			cmtRepository.deleteById(id);
			return new AuthResponse(true,"Đã xóa");
		} catch (Exception e) {
			return new AuthResponse(false,"Thất bại");
		} 
	}
	
}
