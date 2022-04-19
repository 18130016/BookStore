package com.baokaka.api.order;

import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path ="/order")
public class OrderController {

	@Autowired
	public OrderRepository orderRepository;
	
	@GetMapping("/{id}")
	public List<Order> getOrderByUserId(@PathVariable("id") int id){
		List<Order> list = new ArrayList<Order>();
		for (Order order : orderRepository.findAll()) {
			if(order.getUser_id() == id) {
				list.add(order);
			}
		}
		return list;
	}
	@PostMapping("/add")
	public Order addOrder(@RequestBody Order oder) {
		return orderRepository.save(oder);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id ,@RequestBody Order addr){
		try {
			addr.setId(id);
			orderRepository.save(addr);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable("id") int id) {
		orderRepository.deleteById(id);
	}
}
