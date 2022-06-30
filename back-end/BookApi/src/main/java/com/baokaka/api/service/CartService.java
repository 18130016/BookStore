package com.baokaka.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.baokaka.api.model.Book;
import com.baokaka.api.model.CartItem;
import com.baokaka.api.model.User;
import com.baokaka.api.payloads.AuthResponse;
import com.baokaka.api.payloads.BookResponse;
import com.baokaka.api.payloads.CartResponse;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.CartItemRepository;
import com.baokaka.api.repository.UserRepository;

@Service
public class CartService {

	@Autowired
	private CartItemRepository cartRepository;

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private BookRepository bookRepository;


}
