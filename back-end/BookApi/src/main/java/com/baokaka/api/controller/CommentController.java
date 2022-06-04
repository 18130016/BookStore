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
import com.baokaka.api.repository.CommentRepository;
@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path="/api/cmt")
public class CommentController {

	@Autowired
	public CommentRepository cmtRepository;
	
	@GetMapping("/{id}")
	public List<Comment> getAllCmtByBookId(@PathVariable("id") int id){
		List<Comment> list = new ArrayList<Comment>();
		for (Comment comment : cmtRepository.findAll()) {
			if(comment.getBook_id()==id) {
				list.add(comment);
			}
		}
		return list;
	}
	
	@PostMapping("")
	public Comment addCmt(@RequestBody Comment cmt) {
		return cmtRepository.save(cmt);
	}
	
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable("id") int id) {
		cmtRepository.deleteById(id);
	}
	
}
