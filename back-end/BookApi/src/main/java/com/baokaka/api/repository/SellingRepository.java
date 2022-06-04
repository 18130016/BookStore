package com.baokaka.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baokaka.api.model.BookSelling;

public interface SellingRepository extends JpaRepository<BookSelling, Integer>{

}
