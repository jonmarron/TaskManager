package com.jontxu.TaskManager.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    @Id
    @SequenceGenerator(
            name = "project_id_sequence",
            sequenceName = "project_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "project_id_sequence"
    )
    private long id;
    @ManyToOne
    private Client client;
    private String name;
    private ProjectType type;
    private String briefing;
    private LocalDate deadline;
    private Status status;
    private String previewLink;
    private String uid;
}
