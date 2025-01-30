package com.Project.KeyTask.Entity;

import com.Project.KeyTask.DTO.UserDTO;
import com.Project.KeyTask.Enums.Roles;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "User")
public class User implements UserDetails {
    @Id
    private String iduser;
    private String username;
    private String email;
    private String password;
    private String gender;
//    private Roles userrole;
    private String idgrp;

    public UserDTO getUserDTO() {
        return UserDTO.builder()
                .iduser(this.iduser)
                .username(this.username)
                .email(this.email)
                .password(this.password)
                .gender(this.gender)
//                .userrole(this.userrole)  // ✅ No need to convert Roles to String
                .build();
    }

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return List.of(() -> "ROLE_" + userrole.name());
//    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
