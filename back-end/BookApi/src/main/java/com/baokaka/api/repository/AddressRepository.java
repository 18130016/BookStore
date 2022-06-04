package com.baokaka.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baokaka.api.model.Address;

public interface AddressRepository extends JpaRepository<Address, Integer>{

}
