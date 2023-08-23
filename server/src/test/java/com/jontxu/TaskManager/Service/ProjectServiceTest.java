package com.jontxu.TaskManager.Service;

import com.jontxu.TaskManager.model.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProjectServiceTest {
    ProjectRepository projectRepository = mock(ProjectRepository.class);
    ProjectUidGenerator projectUidGenerator = mock(ProjectUidGenerator.class);
    ProjectService projectService = new ProjectService(projectRepository, projectUidGenerator);
    @Test
    void getAllProjects() {
        projectService.getAllProjects("client", "asc");
        verify(projectRepository).findAll();
    }

    @Test
    void getOneById() {
    }

    @Test
    void createProject() {
        //Arranger
        User user1 = User.builder().username("DataWave Innovations").registrationDate(LocalDate.now().minusYears(1).plusDays(3).plusMonths(4)).build();
        String briefing1 = "Suspendisse urna nibh viverra non semper suscipit posuere a pede.";

        Project project = Project.builder()
                .name("Citylight SS2024")
                .briefing(briefing1)
                .type(ProjectType.GRAPHIC_DESIGN)
                .user(user1)
                .deadline(LocalDate.now().plusMonths(1).plusDays(3))
                .status(Status.IN_PROGRESS)
                .previewLink("http://www.google.com")
                .build();

        Mockito.when(projectUidGenerator.generateUid(project)).thenReturn("test");

        assertNull(project.getUid());
        //Act
        Project result = projectService.createProject(project);

        //Assert
        verify(projectUidGenerator).generateUid(project);
        assertNotNull(project.getUid());
        verify(projectRepository).save(project);
    }
}