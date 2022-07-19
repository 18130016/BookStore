package com.baokaka.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.baokaka.api.model.Book;
import com.baokaka.api.payloads.BookFilter;
import com.baokaka.api.payloads.BookPaginationAndFilter;
import com.baokaka.api.payloads.BookResponse;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.service.BookService;

@RestController
@RequestMapping(path="/api/book")
public class BookController {
	@Autowired
	public BookRepository bookRepository;
	
	@Autowired
	private BookService bookService;
	
	
	@GetMapping(path="")
	  public  List<BookResponse> getAllBook() {
		List<BookResponse> list = new ArrayList<BookResponse>();
		for(Book n :bookRepository.findAll()){
			BookResponse b = new BookResponse();
			b.setId(n.getId());
			b.setName(n.getName());
			b.setImage(n.getImage());
			b.setAuthor(b.sliceAuthor(n.getAuthor()));
			b.setTypeOfBook(b.sliceTypeOfBook(n.getTypeOfBook()));
			b.setDescripton(n.getDescription());
			b.setPrice(n.getPrice());
			list.add(b);
		}
	    return list;
	  }
	
	@PostMapping("/pagination")
	public BookPaginationAndFilter getBookAndPagination(@RequestBody BookFilter filter ) {
		return bookService.findAllBookWithPaginationAndFilter(filter);

	}

	@GetMapping(path = "/{id}")
	public BookResponse getById(@PathVariable("id") Integer id) {
		Book book = bookRepository.findById(id).get();
		return new BookResponse(book);
	}
	
	@PostMapping("")
	public Book addBook(@RequestPart("name") String name,@RequestPart("image") String image,
			@RequestPart("author") String author, @RequestPart("typeOfBook") String typeOfBook,
			@RequestPart("price") String price, @RequestPart("description") String description) throws IOException {
		
		Book newBook = new Book();
		newBook.setName(name);
		newBook.setDescription(description);
		newBook.setTypeOfBook(typeOfBook);
		newBook.setPrice(Double.parseDouble(price));
		newBook.setImage(image);
		newBook.setAuthor(author);
		
		return bookRepository.save(newBook);

	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Integer id) {
		bookRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable("id") Integer id ,@RequestBody Book book){
		try {
			book.setId(id);
			bookRepository.save(book);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
//	@GetMapping("/image/{id}")
//	@ResponseBody
//	public void getImage(@PathVariable("id") int id, HttpServletResponse response) throws IOException {
//		Book book = bookRepository.findById(id).get();
//		response.setContentType("image/jpeg, image/jpg, image/png, image/gif");
//        response.getOutputStream().write(book.getImage());
//        response.getOutputStream().close();
//	}

	
}
