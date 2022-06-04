package com.baokaka.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baokaka.api.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Integer>{

}
