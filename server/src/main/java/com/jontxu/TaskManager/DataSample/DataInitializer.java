package com.jontxu.TaskManager.DataSample;

import com.jontxu.TaskManager.Service.ClientService;
import com.jontxu.TaskManager.Service.ProjectService;
import com.jontxu.TaskManager.model.Client;
import com.jontxu.TaskManager.model.Project;
import com.jontxu.TaskManager.model.ProjectType;
import com.jontxu.TaskManager.model.Status;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataInitializer implements CommandLineRunner {
    private ProjectService projectService;
    private ClientService clientService;

    public DataInitializer(ProjectService projectService, ClientService clientService) {
        this.projectService = projectService;
        this.clientService = clientService;
    }

    @Override
    public void run(String... args) throws Exception {

        Client client1 = Client.builder().name("DataWave Innovations").registrationDate(LocalDate.now().minusYears(1).plusDays(3).plusMonths(4)).build();
        Client client2 = Client.builder().name("NexusTech Solutions").registrationDate(LocalDate.now().minusYears(3).minusDays(50)).build();
        Client client3 = Client.builder().name("InfraTech Insights").registrationDate(LocalDate.now().minusYears(5).plusDays(200)).build();

        String briefing1 = "Paragraphs\n" +
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.";
        String briefing2 = "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.";
        String briefing3 = "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. ";


        Project project1 = Project.builder()
                .name("Citylight SS2024")
                .briefing(briefing1)
                .type(ProjectType.GRAPHIC_DESIGN)
                .client(client1)
                .deadline(LocalDate.now().plusMonths(1).plusDays(3))
                .status(Status.IN_PROGRESS)
                .previewLink("http://www.google.com")
                .build();

        Project project2 = Project.builder()
                .name("NT Platform")
                .briefing(briefing2)
                .type(ProjectType.DESIGN_DEVELOPMENT)
                .client(client2)
                .deadline(LocalDate.now().plusMonths(5).plusDays(8))
                .status(Status.TODO)
                .previewLink("http://www.google.com")
                .build();

        Project project3 = Project.builder()
                .name("Landing Page")
                .briefing("Lorem Ipsum Sit Dolor Amet sit dolor amet")
                .type(ProjectType.DESIGN)
                .client(client3)
                .deadline(LocalDate.now().plusYears(1).minusDays(20))
                .status(Status.APPROVED)
                .previewLink("http://www.google.com")
                .build();
        Project project4 = Project.builder()
                .name("Navigation Design")
                .briefing(briefing3)
                .type(ProjectType.DESIGN)
                .client(client1)
                .deadline(LocalDate.now().plusMonths(8).minusDays(20))
                .status(Status.DONE)
                .previewLink("http://www.google.com")
                .build();

        clientService.addClient(client1);
        clientService.addClient(client2);
        clientService.addClient(client3);

        projectService.createProject(project1);
        projectService.createProject(project2);
        projectService.createProject(project3);
        projectService.createProject(project4);
    }
}
