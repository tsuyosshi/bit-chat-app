package com.example.api.controller;

import com.example.api.service.FirebaseService;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user")
    public String index(@RequestHeader("Authorization") String token) throws Exception {
        FirebaseToken firebaseToken = FirebaseService.verify(token);
        return firebaseToken.getEmail();
    }

}
