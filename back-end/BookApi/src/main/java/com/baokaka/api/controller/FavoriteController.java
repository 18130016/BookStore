package com.baokaka.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baokaka.api.model.Favorite;
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
	
	@RequestMapping("/{id}")
	public List<ResponseFavorite> getFavoriteByUserId(@PathVariable("id") int id){
		List<ResponseFavorite> list = new ArrayList<>();
		for (Favorite favorite : favRepository.findAll()) {
			if(favorite.getUser_id()==id) {
				ResponseFavorite rfav = new ResponseFavorite(favorite.getId(),
						bookRepository.getById(favorite.getBook_id()), 
						favorite.getUser_id(), favorite.getDate_add());
				list.add(rfav);
			}
		}
		return list;
	}
	@PostMapping("")
	public Favorite addFavorite(@RequestBody Favorite fav) {
		return favRepository.save(fav);
	}
	
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable("id")int id) {
		favRepository.deleteById(id);
	}
}
