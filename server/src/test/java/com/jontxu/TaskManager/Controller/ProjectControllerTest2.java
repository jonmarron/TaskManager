package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.ProjectService;
import com.jontxu.TaskManager.model.Project;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@SpringBootTest(webEnvironment = RANDOM_PORT)
class ProjectControllerTest2 {
    @MockBean
    ProjectService projectService;
    @Autowired
    WebTestClient webTestClient;
    String url = "/projects";

    @Test
    void getAllProjects() throws Exception {
        webTestClient.get()
                .uri(url)
                .exchange()
                .expectStatus()
                .is2xxSuccessful();

        verify(projectService).getAllProjects("client", "asc");
    }

    @Test
    void createProject() {
        Project project = Project.builder().name("test").briefing("blabla").previewLink("www.google.com").build();
        when(projectService.createProject(project)).thenReturn(project);
        webTestClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(project)
                .exchange()
                .expectStatus()
                .is2xxSuccessful()
                .expectBody(Project.class)
                .isEqualTo(project);

        verify(projectService).createProject(project);
    }


}