package com.Project.KeyTask.Services.Authentification;

import com.Project.KeyTask.DTO.Sign_up_DTO;
import com.Project.KeyTask.DTO.UserDTO;
import com.Project.KeyTask.Entity.User;
import com.Project.KeyTask.Enums.Roles;
import com.Project.KeyTask.Repisotory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private UserRepository userRepository;

    public UserDTO signupclient(Sign_up_DTO signUpDto){
        User user = new User();

        user.setUsername(signUpDto.getUsername());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(signUpDto.getPassword());
        user.setGender(signUpDto.getGender());
        user.setIdgrp(null); // Adjust based on business logic
        return userRepository.save(user).getDTO();

    }

    public Boolean presentByEmail(String email) {
        return userRepository.findFirstByEmail(email) != null;
    }
}
