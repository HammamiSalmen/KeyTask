package com.Project.KeyTask.Services.Authentication;

import com.Project.KeyTask.DTO.Sign_up_DTO;
import com.Project.KeyTask.DTO.UserDTO;
import com.Project.KeyTask.Entity.User;
import com.Project.KeyTask.Enums.Roles;
import com.Project.KeyTask.Repisotory.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepository;
    @Override
    public UserDTO signupuser(Sign_up_DTO signUpDto) {
        User user = new User();
        user.setEmail(signUpDto.getEmail());
        user.setUsername(signUpDto.getUsername());
        user.setPassword(signUpDto.getPassword());
        user.setGender(signUpDto.getGender());
        User createdUser = userRepository.save(user);
        return createdUser.getUserDTO();
    }

    @Override
    public Boolean hasUserWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }

    @Override
    public Boolean presentByEmail(String email) {
        return null;
    }
}