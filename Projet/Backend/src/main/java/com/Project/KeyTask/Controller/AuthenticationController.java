package com.Project.KeyTask.Controller;

import com.Project.KeyTask.DTO.Sign_up_DTO;
import com.Project.KeyTask.DTO.UserDTO;
import com.Project.KeyTask.Services.Authentication.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthService authService;
//    private final AuthenticationManager authenticationManager;


    @PostMapping("/sign-up")
    public ResponseEntity<?> signupuser(@RequestBody Sign_up_DTO signUpDto){
        if (authService.hasUserWithEmail(signUpDto.getEmail())){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Client with this email Already exists !! ");
        }
        UserDTO createdUser = authService.signupuser(signUpDto);
        if (createdUser == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not Created");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

//    @PostMapping("/login")
//    public AuthenticationResponse login(@RequestBody AuthenticationRequest authenticationRequest){
//        try {
//            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
//                    authenticationRequest.getEmail(),
//                    authenticationRequest.getPassword()));
//        } catch (BadCredentialsException e) {
//            throw new BadCredentialsException(("Incorrect username or password"));
//        }
//        return new AuthenticationResponse();
//    }
}
