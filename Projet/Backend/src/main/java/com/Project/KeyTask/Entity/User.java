package com.Project.KeyTask.Entity;

import com.Project.KeyTask.DTO.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "User")
public class User {
    @Id
    private String iduser;
    private String username;
    private String email;
    private String password;
    private String gender;
    private String idgrp;

    public UserDTO getDTO () {
        UserDTO userDTO = new UserDTO();
        userDTO.setIduser(this.iduser);
        userDTO.setUsername(this.username);
        userDTO.setEmail(this.email);
//        userDTO.setPassword(this.password);
        userDTO.setGender(this.gender);
        userDTO.setIdgrp(this.idgrp);

        return userDTO;
    }
}
