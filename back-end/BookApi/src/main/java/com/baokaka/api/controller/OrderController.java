package com.baokaka.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.Order;
import com.baokaka.api.payloads.ResponseOrder;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.OrderRepository;

@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path ="/api/order")
public class OrderController {

	@Autowired
	public OrderRepository orderRepository;
	
	@Autowired
	public BookRepository bookRep;
	
	@GetMapping("/{id}")
	public List<ResponseOrder> getOrderByUserId(@PathVariable("id") int id){
		List<ResponseOrder> list = new ArrayList<ResponseOrder>();
		for (Order order : orderRepository.findAll()) {
			if(order.getUser_id() == id) {
				list.add(new ResponseOrder(order.getId(),bookRep.getById(order.getBook_id()),
						order.getUser_id(),order.getQty(),order.getAddress_id(),
						order.getStatus(),order.getCreate_date()));
			}
		}
		return list;
	}
	@PostMapping("")
	public Order addOrder(@RequestBody Order oder) {
		return orderRepository.save(oder);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id ,@RequestBody Order addr){
		try {
			addr.setId(id);
			orderRepository.save(addr);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable("id") int id) {
		orderRepository.deleteById(id);
	}
}
