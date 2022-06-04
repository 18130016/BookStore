package com.baokaka.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baokaka.api.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

}
