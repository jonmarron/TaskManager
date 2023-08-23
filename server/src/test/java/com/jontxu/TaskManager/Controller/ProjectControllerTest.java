package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.ProjectService;
import com.jontxu.TaskManager.model.Project;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.http.MediaType.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProjectController.class)
class ProjectControllerTest {
    @MockBean
    ProjectService projectService;
    @Autowired
    MockMvc mockMvc;
    String url = "/projects";
    @Test
    void getAllProjects() throws Exception {
        mockMvc.perform(get(url).contentType(APPLICATION_JSON))
                .andExpect(status().isOk());
        verify(projectService).getAllProjects("client", "asc");
    }

    @Test
    void createProject() throws Exception {
//        not working yet
        Project project = Project.builder().name("test").briefing("blabla").previewLink("www.google.com").build();
        String json = "{name:'test',briefing:'blabla', previewLink:'www.google.com'}";
        mockMvc.perform(post(url).accept(APPLICATION_JSON).contentType(APPLICATION_JSON).content(json))
                .andExpect(status().isOk());
        verify(projectService).createProject(project);
    }
}