package com.Project.KeyTask.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/doLogin")
    public ResponseEntity<LoginResponse> doLogin(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        response.setToken("Token details");

        String result = loginService.doLogin(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
