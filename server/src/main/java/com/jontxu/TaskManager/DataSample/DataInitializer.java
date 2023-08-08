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
        Client client1 = Client.builder().name("client 1").registrationDate(LocalDate.now()).build();

        Project project1 = Project.builder().name("project1").briefing("Lorem Ipsum Sit Dolor Amet").type(ProjectType.DESIGN).client(client1).deadline(LocalDate.now()).status(Status.IN_PROGRESS).previewLink("http://www.google.com").build();

        clientService.addClient(client1);
        projectService.createProject(project1);
    }
}
