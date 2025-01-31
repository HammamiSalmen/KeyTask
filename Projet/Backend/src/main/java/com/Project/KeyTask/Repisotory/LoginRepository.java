package com.Project.KeyTask.Repisotory;

import java.util.Optional;

import com.Project.KeyTask.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LoginRepository extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);
}
