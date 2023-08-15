package com.jontxu.TaskManager.Service;

import com.jontxu.TaskManager.model.Project;
import com.jontxu.TaskManager.model.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects(){ return projectRepository.findAll();}
    public Optional<Project> getOneById(long id){
        return projectRepository.findById(id);
    }
    public Project createProject(Project project){
        return projectRepository.save(project);
    }
}
