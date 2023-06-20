package com.example.demo.controller;

import java.util.Optional;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.HttpResponse;
import com.example.demo.service.UserService;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/listUser")
	public ResponseEntity<HttpResponse> getUsers(@RequestParam Optional<String> name,
			@RequestParam Optional<Integer> page, @RequestParam Optional<Integer> size) throws InterruptedException {

		TimeUnit.SECONDS.sleep(3);
		return ResponseEntity.ok()
				.body(HttpResponse.builder().timeStamp(now().toString())
						.data(of("page", userService.getUsers(name.orElse(""), page.orElse(0), size.orElse(10))))
						.message("Users Retrieved").status(OK).statusCode(OK.value()).build());

	}
}
