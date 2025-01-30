package com.Project.KeyTask.Controller;

import com.Project.KeyTask.Entity.User;
import com.Project.KeyTask.Repisotory.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public String doLogin(LoginRequest request) {
        Optional<User> users = loginRepository.findByUsername(request.getUsername());

        if (users.isPresent()) {
            return "User details found";
        }
        return "User details not found";
    }
}
