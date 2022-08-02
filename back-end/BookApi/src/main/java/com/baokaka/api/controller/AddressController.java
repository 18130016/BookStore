package com.baokaka.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.Address;
import com.baokaka.api.payloads.AuthResponse;
import com.baokaka.api.repository.AddressRepository;

@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path="/api/address")
public class AddressController {
	@Autowired
	public AddressRepository addressRepository;

	@GetMapping("/{id}")
	public List<Address> getAddressByUserID(@PathVariable("id") int id){
		List<Address> list = new ArrayList<Address>();
		for (Address address : addressRepository.findAll()) {
			if(address.getUser_id() == id) {
				list.add(address);
			}
		}
		return list;
	}

	@DeleteMapping("/{id}")
	public AuthResponse delete(@PathVariable("id") int id) {
		try {
			addressRepository.deleteById(id);
			return new AuthResponse(true, "Đã xóa địa chỉ");
		} catch (Exception e) {
			return new AuthResponse(false, "Xóa địa chỉ thất bại");
		}
	}

	@PostMapping("")
	public AuthResponse addAddress(@RequestBody Address ad) {
		try {
			addressRepository.save(ad);
			return new AuthResponse(true, "Thêm địa chỉ thành công");
		} catch (Exception e) {
			return new AuthResponse(false, "Thêm địa chỉ thất bại");

		}

	}

	@PutMapping("/{id}")
	public AuthResponse update(@PathVariable("id") int id ,@RequestBody Address addr){
		try {
			addr.setId(id);
			addressRepository.save(addr);
			return new AuthResponse(true, "Cập nhật địa chỉ thành công");
		}catch (Exception e) {
			return new AuthResponse(false, "Cập nhật địa chỉ thất bại");
		}
	}

}
