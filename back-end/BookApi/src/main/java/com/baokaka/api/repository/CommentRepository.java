package com.baokaka.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baokaka.api.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
