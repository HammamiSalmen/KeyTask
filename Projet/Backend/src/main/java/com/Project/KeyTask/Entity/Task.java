package com.Project.KeyTask.Entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "task")
public class Task {
    @Id
    private String id;
    private String description;
    private String groupId;
    private boolean completed;
}
