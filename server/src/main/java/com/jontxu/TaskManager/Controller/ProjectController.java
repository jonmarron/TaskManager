package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.ProjectService;
import com.jontxu.TaskManager.model.Project;
import com.jontxu.TaskManager.model.Status;
import com.jontxu.TaskManager.model.User;
import com.jontxu.TaskManager.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("projects")
public class ProjectController {
    ProjectService projectService;
    UserRepository userRepository;
    JwtDecoder jwtDecoder;

    public ProjectController(ProjectService projectService, UserRepository userRepository, JwtDecoder jwtDecoder) {
        this.projectService = projectService;
        this.userRepository = userRepository;
        this.jwtDecoder = jwtDecoder;
    }

    @GetMapping
    public List<Project> getAllProjects(@RequestParam(required = false) String sort, @RequestParam(required = false, defaultValue = "asc") String direction) {
        return projectService.getAllProjects(sort, direction);
    }

    @GetMapping("client")
    public List<Project> getProjectsForUser(Authentication authentication) {
        Jwt jwtToken = ((JwtAuthenticationToken) authentication).getToken();
        Jwt decodedJwt = jwtDecoder.decode(jwtToken.getTokenValue());
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow();
        return projectService.getProjectsForUser(user);
    }
    @GetMapping("{id}")
    public Project getOneById(@PathVariable long id) throws ElementNotFoundException {
        return projectService.getOneById(id).orElseThrow(ElementNotFoundException::new);
    }

    @PostMapping
    public Project createProject(Authentication authentication, @RequestBody Project project) {
        Jwt jwtToken = ((JwtAuthenticationToken) authentication).getToken();
        Jwt decodedJwt = jwtDecoder.decode(jwtToken.getTokenValue());
        System.out.println(decodedJwt.getClaims());
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow();
        project.setStatus(Status.IN_PROGRESS);
        project.setPreviewLink("/");
        project.setUser(user);
        return projectService.createProject(project);
    }

    @DeleteMapping("{id}")
    public void deleteById (@PathVariable long id) {
        projectService.deleteById(id);
    }
}
