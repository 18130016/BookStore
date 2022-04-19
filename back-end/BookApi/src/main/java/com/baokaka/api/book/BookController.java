package com.baokaka.api.book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/book")
public class BookController {
	@Autowired
	public BookRepository bookRepository;
	
	@GetMapping(path="/all")
	  public  List<Book> getAllBook() {
	    // This returns a JSON or XML with the users
	    return bookRepository.findAll();
	  }
	@GetMapping(path = "/{id}")
	public Book getById(@PathVariable("id") Integer id) {
		Book book = bookRepository.findById(id).get();
		if(book == null) {
			ResponseEntity.notFound().build();
		}
		return book;
		
	}
	@PostMapping("/add")
	public Book addBook(@RequestBody Book newbook) {
		return bookRepository.save(newbook);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") Integer id) {
		bookRepository.deleteById(id);
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") Integer id ,@RequestBody Book book){
		try {
			book.setId(id);
			bookRepository.save(book);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	
}
