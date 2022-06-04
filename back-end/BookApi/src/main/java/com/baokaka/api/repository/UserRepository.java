package com.baokaka.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baokaka.api.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{


}
