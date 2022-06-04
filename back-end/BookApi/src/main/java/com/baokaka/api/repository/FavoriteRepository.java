package com.baokaka.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baokaka.api.model.Favorite;

public interface FavoriteRepository extends JpaRepository<Favorite, Integer>{

}
