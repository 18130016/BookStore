package com.baokaka.api.cartitem;

import java.util.ArrayList;
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


@RestController
@RequestMapping(path="/cartitem")
public class CartItemController {
	@Autowired
	public CartItemRepository caitRepository;
	
	@GetMapping("/{id}")
	public List<CartItem> getCartItemByUserId(@PathVariable("id") int id){
		List<CartItem> list = new ArrayList<CartItem>();
		for (CartItem cartItem : caitRepository.findAll()) {
			if(cartItem.getUser_id()==id) {
				list.add(cartItem);
			}
		}
		return list;
		
	}
	
	@PostMapping("/add")
	public CartItem addCartItem(@RequestBody CartItem item) {
		return caitRepository.save(item);
	}
	
	@PutMapping("/update/{id}")
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
