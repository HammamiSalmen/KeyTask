package com.Project.KeyTask.Controller;

import com.Project.KeyTask.DTO.Sign_up_DTO;
import com.Project.KeyTask.DTO.UserDTO;
import com.Project.KeyTask.Entity.User;
import com.Project.KeyTask.Services.Authentification.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    @Autowired
    private AuthService authService;

    @PostMapping("/sign-up")
    public ResponseEntity<?> signupClient(@RequestBody Sign_up_DTO signUpDto){
        if (authService.presentByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Client with this email Already exists !! ", HttpStatus.NOT_ACCEPTABLE);
        }
        UserDTO createdUser = authService.signupclient(signUpDto);
        return new ResponseEntity<>(createdUser, HttpStatus.OK);
    }
}
