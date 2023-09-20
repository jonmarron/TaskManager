/*package com.jontxu.TaskManager.runner;

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
            admin.setUsername("demo_admin");
            admin.setPassword(passwordEncoder.encode("123"));
            admin.setAuthorities(Set.of("ADMIN","USER"));

            User allaboutperiod = new User();
            allaboutperiod.setUsername("allaboutperiod");
            allaboutperiod.setPassword(passwordEncoder.encode("123"));
            allaboutperiod.setAuthorities(Set.of("USER"));

            User demoUser = new User();
            demoUser.setUsername("demo_user");
            demoUser.setPassword(passwordEncoder.encode("123"));
            demoUser.setAuthorities(Set.of("USER"));

            User google = new User();
            google.setUsername("Google");
            google.setPassword(passwordEncoder.encode("123"));
            google.setAuthorities(Set.of("USER"));

            User bethesda = new User();
            bethesda.setUsername("Bethesda");
            bethesda.setPassword(passwordEncoder.encode("123"));
            bethesda.setAuthorities(Set.of("USER"));

            User nintendo = new User();
            nintendo.setUsername("Nintendo");
            nintendo.setPassword(passwordEncoder.encode("123"));
            nintendo.setAuthorities(Set.of("USER"));

            String briefing1 = "Design a visually appealing and intuitive user interface for our tech company's new product, focusing on creating a modern and user-friendly dashboard for our customers. Incorporate our brand colors and ensure seamless navigation.";
            String briefing2 = "Develop a responsive and interactive user registration system for our product, allowing users to sign up, verify their email addresses, and set up their profiles. Implement robust security measures to safeguard user data.";
            String briefing3 = "Build a data visualization feature that dynamically displays real-time analytics and statistics within our product's dashboard. Utilize JavaScript and relevant libraries to present key data trends in an engaging and easily comprehensible manner.";
            String briefing4 = "Create a search functionality within our product's interface, enabling users to efficiently find and access specific information or resources. Implement filters and sorting options to enhance the user's search experience, optimizing performance for large datasets.";
            String briefing5 = "Redesign the period products webshop to create a more modern and user-friendly interface. Focus on improving the overall user experience, enhancing product categorization, and optimizing the checkout process for seamless shopping.";
            String briefing6 = "Develop a dedicated landing page for the \"FlowCup\" menstruation cup, focusing on educating potential customers about its benefits, sustainability, and ease of use. Incorporate engaging visuals, persuasive copy, and clear calls to action to encourage visitors to make a purchase or request more information. Optimize the page for search engines to drive organic traffic.";


            Project project1 = Project.builder()
                    .name("UI Revamp")
                    .briefing(briefing1)
                    .type(ProjectType.DEVELOPMENT)
                    .user(demoUser)
                    .deadline(LocalDate.now().plusMonths(1).plusDays(3))
                    .status(Status.IN_PROGRESS)
                    .previewLink("http://www.google.com")
                    .build();

            Project project2 = Project.builder()
                    .name("User Registration")
                    .briefing(briefing2)
                    .type(ProjectType.DESIGN_DEVELOPMENT)
                    .user(demoUser)
                    .deadline(LocalDate.now().plusMonths(5).plusDays(8))
                    .status(Status.TODO)
                    .previewLink("http://www.google.com")
                    .build();

            Project project3 = Project.builder()
                    .name("Search Enhancements")
                    .briefing(briefing4)
                    .type(ProjectType.DEVELOPMENT)
                    .user(demoUser)
                    .deadline(LocalDate.now().plusYears(1).minusDays(20))
                    .status(Status.APPROVED)
                    .previewLink("http://www.google.com")
                    .build();
            Project project4 = Project.builder()
                    .name("Data Visualization")
                    .briefing(briefing3)
                    .type(ProjectType.DESIGN)
                    .user(demoUser)
                    .deadline(LocalDate.now().plusMonths(8).minusDays(20))
                    .status(Status.DONE)
                    .previewLink("http://www.google.com")
                    .build();
            Project project5 = Project.builder()
                    .name("Website Redesign")
                    .briefing(briefing5)
                    .type(ProjectType.DESIGN)
                    .user(allaboutperiod)
                    .deadline(LocalDate.now().plusMonths(8).minusDays(20))
                    .status(Status.DONE)
                    .previewLink("http://www.google.com")
                    .build();
            Project project6 = Project.builder()
                    .name("FlowCup Landing Page")
                    .briefing(briefing6)
                    .type(ProjectType.DESIGN)
                    .user(allaboutperiod)
                    .deadline(LocalDate.now().plusMonths(8).minusDays(20))
                    .status(Status.DONE)
                    .previewLink("http://www.google.com")
                    .build();

            userService.addClient(admin);
            userService.addClient(allaboutperiod);
            userService.addClient(demoUser);
            userService.addClient(google);
            userService.addClient(bethesda);
            userService.addClient(nintendo);

            projectService.createProject(project1);
            projectService.createProject(project2);
            projectService.createProject(project3);
            projectService.createProject(project4);
            projectService.createProject(project5);
            projectService.createProject(project6);
        };
    }
}
*/