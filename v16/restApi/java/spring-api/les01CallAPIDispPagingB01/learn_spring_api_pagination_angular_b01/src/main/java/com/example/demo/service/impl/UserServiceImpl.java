package com.example.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

import static org.springframework.data.domain.PageRequest.of;

@Service
@Transactional
@Slf4j
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Page<User> getUsers(String name, int page, int size) {
		return userRepository.findByNameContaining(name, of(page, size));
	}
}
