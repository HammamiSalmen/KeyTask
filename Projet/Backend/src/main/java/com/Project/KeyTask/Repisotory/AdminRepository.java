package com.Project.KeyTask.Repisotory;

import com.Project.KeyTask.Entity.Admin;
import com.Project.KeyTask.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {
    List<Admin> findByIdgrp(String idgrp);
}
