package com.Project.KeyTask.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "groupe")
public class Group {
    @Id
    private String id;
    private String nomgrp;
    private String mdpgrp;
    private String iduser;
}
