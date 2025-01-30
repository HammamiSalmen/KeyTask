package com.Project.KeyTask.Services.Authentication;

import com.Project.KeyTask.DTO.Sign_up_DTO;
import com.Project.KeyTask.DTO.UserDTO;

public interface AuthService {
    UserDTO signupuser(Sign_up_DTO signUpDto);
    Boolean hasUserWithEmail(String email);
    Boolean presentByEmail(String email);
}
