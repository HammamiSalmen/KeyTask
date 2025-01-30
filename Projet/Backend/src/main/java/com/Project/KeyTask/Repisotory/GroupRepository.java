package com.Project.KeyTask.Repisotory;

import com.Project.KeyTask.Entity.Group;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupRepository extends MongoRepository<Group, String> {
    List<Group> findByIduser(String iduser);
}

