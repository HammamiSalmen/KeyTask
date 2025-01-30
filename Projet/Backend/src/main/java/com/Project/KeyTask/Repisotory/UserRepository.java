package com.Project.KeyTask.Repisotory;

import com.Project.KeyTask.Entity.User;
import com.Project.KeyTask.Enums.Roles;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findFirstByEmail(String username);
//    Optional<User> findByUserRole(Roles userrole);
}
