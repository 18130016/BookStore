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

import com.baokaka.api.model.Book;
import com.baokaka.api.model.BookSelling;
import com.baokaka.api.payloads.AuthResponse;
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
	
	
	@GetMapping("")
	public List<ResponseSelling> getAll(){
		List<ResponseSelling> list = new ArrayList<ResponseSelling>();
		
		for (BookSelling bookSelling : sellingRep.findAll()) {
			Book b = bookRep.getById(bookSelling.getBook_id());
			list.add(new ResponseSelling(bookSelling.getId(), b));
		}
		return list;
	}
	
	@PostMapping("")
	public AuthResponse addSellingBook(@RequestBody BookSelling booksell) {
		try {
			for(BookSelling s:sellingRep.findAll()) {
				if(booksell.getBook_id()==s.getBook_id()) {
					 return new AuthResponse(true, "Sản phẩm đã có trong danh sách");
				}
			}
			sellingRep.save(booksell);
			return new AuthResponse(true, "Đã thêm vào danh sách bán chạy");
		} catch (Exception e) {
			return new AuthResponse(true, "Thêm thất bại");
		}
		
	}
	
	@DeleteMapping("/{id}")
	public AuthResponse deleteSellingBook(@PathVariable("id") int id) {
		try {
			sellingRep.deleteById(id);
			return new AuthResponse(true, "Đã xóa sản phẩm");
		} catch (Exception e) {
			return new AuthResponse(true, "Xóa thất bại");
		}
		
	}

}
