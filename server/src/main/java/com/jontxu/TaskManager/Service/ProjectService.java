package com.jontxu.TaskManager.Service;

import com.jontxu.TaskManager.model.Project;
import com.jontxu.TaskManager.model.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private ProjectRepository projectRepository;
    private ProjectUidGenerator projectUidGenerator;

    public ProjectService(ProjectRepository projectRepository, ProjectUidGenerator projectUidGenerator) {
        this.projectRepository = projectRepository;
        this.projectUidGenerator = projectUidGenerator;
    }

    public List<Project> getAllProjects(){ return projectRepository.findAll();}
    public Optional<Project> getOneById(long id){
        return projectRepository.findById(id);
    }
    public Project createProject(Project project){
        String uid = projectUidGenerator.generateUid(project);
        project.setUid(uid);
        return projectRepository.save(project);
    }

}
