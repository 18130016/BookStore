package com.baokaka.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.CartItem;
import com.baokaka.api.payloads.ResponseCartItem;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.CartItemRepository;

@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path="/api/cartitem")
public class CartItemController {
	@Autowired
	public CartItemRepository caitRepository;
	
	@Autowired
	public BookRepository bookRp;
	
	@GetMapping("/{id}")
	public List<ResponseCartItem> getCartItemByUserId(@PathVariable("id") int id){
		List<ResponseCartItem> list = new ArrayList<ResponseCartItem>();
		for (CartItem cartItem : caitRepository.findAll()) {
			if(cartItem.getUser_id()==id) {	
				list.add(new ResponseCartItem(cartItem.getId(),bookRp.getById(cartItem.getBook_id()),
						cartItem.getUser_id(),cartItem.getQty()));
			}
		}
		return list;
		
	}
	
	@PostMapping("")
	public CartItem addCartItem(@RequestBody CartItem item) {
		return caitRepository.save(item);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id ,@RequestBody CartItem addr){
		try {
			addr.setId(id);
			caitRepository.save(addr);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
