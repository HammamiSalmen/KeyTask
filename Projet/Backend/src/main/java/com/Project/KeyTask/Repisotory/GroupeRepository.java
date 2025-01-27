package com.Project.KeyTask.Repisotory;

import com.Project.KeyTask.Entity.Groupe;
import com.Project.KeyTask.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupeRepository extends MongoRepository<Groupe, String> {
    List<Groupe> findByIduser(String iduser);
}

