package com.baokaka.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.Book;
import com.baokaka.api.model.BookSelling;
import com.baokaka.api.payloads.ResponseSelling;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.SellingRepository;

@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path ="/api/selling")
public class SellingController {
	
	@Autowired
	private SellingRepository sellingRep;
	@Autowired
	private BookRepository bookRep;
	
	
	@GetMapping()
	public List<ResponseSelling> getAll(){
		List<ResponseSelling> list = new ArrayList<ResponseSelling>();
		
		for (BookSelling bookSelling : sellingRep.findAll()) {
			Book b = bookRep.getById(bookSelling.getBook_id());
			list.add(new ResponseSelling(bookSelling.getId(), b));
		}
		return list;
	}
	
	@PostMapping("")
	public void addSellingBook(@RequestBody BookSelling booksell) {
		sellingRep.save(booksell);
	}

}
