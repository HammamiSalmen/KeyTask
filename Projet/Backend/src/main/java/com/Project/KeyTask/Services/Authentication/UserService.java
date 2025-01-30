package com.Project.KeyTask.Services.Authentication;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {

    UserDetailsService userDetailsService();

    UserDetailsService userDetailService();
}
