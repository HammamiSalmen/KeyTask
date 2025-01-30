package com.Project.KeyTask.DTO;

import com.Project.KeyTask.Enums.Roles;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserDTO {
    private String iduser;
    private String username;
    private String email;
    private String password;
    private String gender;
//    private Roles userrole;
}
