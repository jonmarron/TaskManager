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

            User allaboutperiod = new User();
            allaboutperiod.setUsername("allaboutperiod");
            allaboutperiod.setPassword(passwordEncoder.encode("123"));
            allaboutperiod.setAuthorities(Set.of("USER"));


            User artebagno = new User();
            artebagno.setUsername("artebagno");
            artebagno.setPassword(passwordEncoder.encode("123"));
            artebagno.setAuthorities(Set.of("USER"));




            String briefing1 = "Create an internal website for employees to log and track their Foosball games, fostering team spirit. Develop user-friendly features, leaderboards, and a casual, collaborative design reflecting our company culture. Aim for a three-month launch with regular updates.";
            String briefing2 = "Develop a user-friendly e-commerce platform for our sustainable period products store, emphasizing eco-friendliness and convenience. Showcase a wide product range, provide educational content on sustainability, and ensure a seamless shopping experience. Aim for a launch within three months to promote environmentally conscious choices.";
            String briefing3 = "Redesign our dating app's navigation bar for improved user experience. Prioritize key features, enhance aesthetics, and ensure brand consistency. Complete the redesign in two months, incorporating usability testing feedback.";
            String briefing4 = "Create a captivating landing page for a bathtub company that highlights their luxurious and innovative bathtub designs. Showcase an array of exquisite products, emphasizing their comfort, style, and cutting-edge features. Implement an intuitive navigation system and compelling visuals to engage visitors and drive inquiries.";


            Project project1 = Project.builder()
                    .name("WuzzlerScore")
                    .briefing(briefing1)
                    .type(ProjectType.DESIGN_DEVELOPMENT)
                    .user(artebagno)
                    .deadline(LocalDate.now().plusMonths(1).plusDays(3))
                    .status(Status.IN_PROGRESS)
                    .previewLink("http://www.google.com")
                    .build();

            Project project2 = Project.builder()
                    .name("Webshop AAP")
                    .briefing(briefing2)
                    .type(ProjectType.DESIGN_DEVELOPMENT)
                    .user(allaboutperiod)
                    .deadline(LocalDate.now().plusMonths(5).plusDays(8))
                    .status(Status.TODO)
                    .previewLink("http://www.google.com")
                    .build();

            Project project3 = Project.builder()
                    .name("Landing Page")
                    .briefing(briefing4)
                    .type(ProjectType.DESIGN)
                    .user(artebagno)
                    .deadline(LocalDate.now().plusYears(1).minusDays(20))
                    .status(Status.APPROVED)
                    .previewLink("http://www.google.com")
                    .build();
            Project project4 = Project.builder()
                    .name("Navigation Design")
                    .briefing(briefing3)
                    .type(ProjectType.DESIGN)
                    .user(allaboutperiod)
                    .deadline(LocalDate.now().plusMonths(8).minusDays(20))
                    .status(Status.DONE)
                    .previewLink("http://www.google.com")
                    .build();

            userService.addClient(admin);
            userService.addClient(allaboutperiod);
            userService.addClient(artebagno);

            projectService.createProject(project1);
            projectService.createProject(project2);
            projectService.createProject(project3);
            projectService.createProject(project4);
        };
    }
}
