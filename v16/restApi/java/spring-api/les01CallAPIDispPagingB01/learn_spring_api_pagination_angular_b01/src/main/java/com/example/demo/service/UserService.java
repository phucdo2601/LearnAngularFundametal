package com.example.demo.service;

import org.springframework.data.domain.Page;

import com.example.demo.entity.User;

public interface UserService {

	Page<User> getUsers(String name, int page, int size);

}
