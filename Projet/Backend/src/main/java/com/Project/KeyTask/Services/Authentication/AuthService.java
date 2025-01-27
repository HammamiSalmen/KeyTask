package com.Project.KeyTask.Services.Authentication;

import com.Project.KeyTask.DTO.Sign_up_DTO;
import com.Project.KeyTask.DTO.UserDTO;

public interface AuthService {
    UserDTO signupclient(Sign_up_DTO signUpDto);
    Boolean presentByEmail(String email);
    UserDTO signupGroup(Sign_up_DTO signUpDto);
}
