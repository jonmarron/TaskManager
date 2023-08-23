package com.jontxu.TaskManager.runner;

import com.jontxu.TaskManager.Service.UserService;
import com.jontxu.TaskManager.Service.ProjectService;
import com.jontxu.TaskManager.model.*;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.util.Set;
@Configuration
public class Populator {
    @Bean
    ApplicationRunner populate(UserService userService, ProjectService projectService, PasswordEncoder passwordEncoder){
        return args -> {
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("123"));
            admin.setAuthorities(Set.of("ADMIN","USER"));


            User user = new User();
            user.setUsername("user");
            user.setPassword(passwordEncoder.encode("123"));
            user.setAuthorities(Set.of("USER"));




            String briefing1 = "Paragraphs\n" +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.";
            String briefing2 = "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.";
            String briefing3 = "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. ";


            Project project1 = Project.builder()
                    .name("Citylight SS2024")
                    .briefing(briefing1)
                    .type(ProjectType.GRAPHIC_DESIGN)
                    .user(admin)
                    .deadline(LocalDate.now().plusMonths(1).plusDays(3))
                    .status(Status.IN_PROGRESS)
                    .previewLink("http://www.google.com")
                    .build();

            Project project2 = Project.builder()
                    .name("NT Platform")
                    .briefing(briefing2)
                    .type(ProjectType.DESIGN_DEVELOPMENT)
                    .user(admin)
                    .deadline(LocalDate.now().plusMonths(5).plusDays(8))
                    .status(Status.TODO)
                    .previewLink("http://www.google.com")
                    .build();

            Project project3 = Project.builder()
                    .name("Landing Page")
                    .briefing("Lorem Ipsum Sit Dolor Amet sit dolor amet")
                    .type(ProjectType.DESIGN)
                    .user(user)
                    .deadline(LocalDate.now().plusYears(1).minusDays(20))
                    .status(Status.APPROVED)
                    .previewLink("http://www.google.com")
                    .build();
            Project project4 = Project.builder()
                    .name("Navigation Design")
                    .briefing(briefing3)
                    .type(ProjectType.DESIGN)
                    .user(admin)
                    .deadline(LocalDate.now().plusMonths(8).minusDays(20))
                    .status(Status.DONE)
                    .previewLink("http://www.google.com")
                    .build();

            userService.addClient(admin);
            userService.addClient(user);

            projectService.createProject(project1);
            projectService.createProject(project2);
            projectService.createProject(project3);
            projectService.createProject(project4);
        };
    }
}
