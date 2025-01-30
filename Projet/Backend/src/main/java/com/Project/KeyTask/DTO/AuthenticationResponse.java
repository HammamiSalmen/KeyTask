package com.Project.KeyTask.DTO;

import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private Long userid;
}
