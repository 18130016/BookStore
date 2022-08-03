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
import com.baokaka.api.payloads.AuthResponse;
import com.baokaka.api.payloads.ResponseOrder;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.OrderRepository;
import com.baokaka.api.service.OrderService;

@RestController
@RequestMapping(path ="/api/order")
public class OrderController {

	@Autowired
	public OrderRepository orderRepository;
	
	@Autowired
	public BookRepository bookRep;
	
	@Autowired
	public OrderService orderService;
	
	@GetMapping("/{id}")
	public List<ResponseOrder> getOrderByUserId(@PathVariable("id") int id){
		return orderService.getOrder(id);
	}
	@PostMapping("")
	public AuthResponse addOrder(@RequestBody Order oder) {
		try {
			orderRepository.save(oder);
			return new AuthResponse(true,"Đặt hàng thành công");
			
		} catch (Exception e) {
			return new AuthResponse(false,"Đặt hàng thất bại");
		}
	}

	@GetMapping(" ")
	public List<ResponseOrder> getAllOrder(){
		return orderService.getAllOrder();
	}
	
	@PutMapping("/{id}")
	public AuthResponse update(@PathVariable("id") int id ,@RequestBody Order addr){
		try {
			addr.setId(id);
			orderRepository.save(addr);
			return new AuthResponse(true,"Cập nhật thành công");
		}catch (Exception e) {
			return new AuthResponse(false,"Cập nhật thất bại");
		}
	}
	
	@DeleteMapping("/{id}")
	public AuthResponse deleteById(@PathVariable("id") int id) {
		try {
			orderRepository.deleteById(id);
			return new AuthResponse(true,"Xóa đơn hàng thành công");
			
		} catch (Exception e) {
			return new AuthResponse(false,"Xóa đơn hàng thất bại");
		}
	}
}
