package com.baokaka.api.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.baokaka.api.common.OrderItem;
import com.baokaka.api.model.Order;
import com.baokaka.api.payloads.ResponseOrder;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private BookRepository bookRepository;

	public List<OrderItem> convertStringToList(String list) {
		List<OrderItem> result = new ArrayList<OrderItem>();
		String[] arr = list.split(";");
		List<String> obj = Arrays.asList(arr);
		for (String t : obj) {
			String[] ob = t.split("-");
			result.add(new OrderItem(bookRepository.findById(Integer.parseInt(ob[0])).get(),
					Integer.parseInt(ob[1])));
		}
		return result;
	}

	public List<Order> getAllOrderByUserId(int id) {
		List<Order> list = new ArrayList<Order>();
		for (Order ord : orderRepository.findAll()) {
			if (ord.getUser_id() == id) {
				list.add(ord);
			}
		}
		return list;
	}

	public List<ResponseOrder> getOrder(int id) {
		List<ResponseOrder> result = new ArrayList<ResponseOrder>();
		for (Order o : getAllOrderByUserId(id)) {
			result.add(new ResponseOrder(o.getId(), o.getUser_id(), o.getAddress_id(),
					convertStringToList(o.getList_products()), o.getStatus(), o.getCreate_day()));
		}

		return result;

	}

}
