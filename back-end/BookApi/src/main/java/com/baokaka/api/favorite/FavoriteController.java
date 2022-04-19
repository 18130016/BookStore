package com.baokaka.api.favorite;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "favorite")
public class FavoriteController {
	@Autowired
	public FavoriteRepository favRepository;
	
	@RequestMapping("/{id}")
	public List<Favorite> getFavoriteByUserId(@PathVariable("id") int id){
		List<Favorite> list = new ArrayList<Favorite>();
		for (Favorite favorite : favRepository.findAll()) {
			if(favorite.getUser_id()==id) {
				list.add(favorite);
			}
		}
		return list;
	}
	@PostMapping("/add")
	public Favorite addFavorite(@RequestBody Favorite fav) {
		return favRepository.save(fav);
	}
	
	@DeleteMapping("delete/{id}")
	public void deleteById(@PathVariable("id")int id) {
		favRepository.deleteById(id);
	}
}
