package com.Project.KeyTask.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "task")
public class Task {
    @Id
    private String id;
    private String descriptiontask;
    private Date datetask;
    private String idgrp;
}
