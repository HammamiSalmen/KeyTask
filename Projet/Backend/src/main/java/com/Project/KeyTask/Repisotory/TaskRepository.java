package com.Project.KeyTask.Repisotory;

import com.Project.KeyTask.Entity.Task;
import com.Project.KeyTask.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    List<Task> findByIdgrp(String idgrp);
}
