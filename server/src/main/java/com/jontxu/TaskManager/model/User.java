package com.jontxu.TaskManager.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Client {
    @Id
    @SequenceGenerator(
            name = "client_id_sequence",
            sequenceName = "client_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "client_id_sequence"
    )
    private long id;
    @Column(unique = true)
    private String name;
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> authorities;
    private LocalDate registrationDate;
}
