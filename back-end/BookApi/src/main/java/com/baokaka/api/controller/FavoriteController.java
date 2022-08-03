package com.baokaka.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.Favorite;
import com.baokaka.api.payloads.AuthResponse;
import com.baokaka.api.payloads.BookResponse;
import com.baokaka.api.payloads.ResponseFavorite;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.FavoriteRepository;
@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RestController
@RequestMapping(path= "/api/favorite")
public class FavoriteController {
	@Autowired
	public FavoriteRepository favRepository;
	@Autowired
	public BookRepository bookRepository;
	
	@GetMapping("/{id}")
	public List<ResponseFavorite> getFavoriteByUserId(@PathVariable("id") int id){
		List<ResponseFavorite> list = new ArrayList<>();
		for (Favorite favorite : favRepository.findAll()) {
			if(favorite.getUser_id()==id) {
				ResponseFavorite rfav = new ResponseFavorite(favorite.getId(),new BookResponse(bookRepository.getById(favorite.getBook_id()))
						, 
						favorite.getUser_id(), favorite.getDate_add());
				list.add(rfav);
			}
		}
		return list;
	}
	@PostMapping("")
	public AuthResponse addFavorite(@RequestBody Favorite fav) {
		List<Favorite> list = favRepository.findAll();
		for(Favorite f :list) {
			if(fav.getBook_id()==f.getBook_id()&& fav.getUser_id()==f.getUser_id()) {
				return new AuthResponse(false,"Sản phẩm đã có trong danh sách yêu thích");
			}
		}
		 favRepository.save(fav);
		 
		 return new AuthResponse(true, "Đã thêm vào danh sách yêu thích");
		 
	}
	
	@DeleteMapping("/{id}")
	public AuthResponse deleteById(@PathVariable("id")int id) {
		favRepository.deleteById(id);
		return new AuthResponse(true, "Đã xóa thành công");
	}
}
