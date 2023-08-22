package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.ProjectService;
import com.jontxu.TaskManager.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("projects")
@CrossOrigin("*")
public class ProjectController {
    ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    @Secured("ROLE_USER")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("{id}")
    public Project getOneById(@PathVariable long id) throws ElementNotFoundException {
        return projectService.getOneById(id).orElseThrow(ElementNotFoundException::new);
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

}
