package com.example.account.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.User;

public interface AccountRepository extends JpaRepository<User, Integer> {
	public User findByUserId(String userId);
}
