package com.jontxu.TaskManager.Service;

import com.jontxu.TaskManager.model.Project;
import com.jontxu.TaskManager.model.ProjectRepository;
import com.jontxu.TaskManager.model.User;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ProjectService {
    private ProjectRepository projectRepository;
    private ProjectUidGenerator projectUidGenerator;

    public ProjectService(ProjectRepository projectRepository, ProjectUidGenerator projectUidGenerator) {
        this.projectRepository = projectRepository;
        this.projectUidGenerator = projectUidGenerator;
    }

    public List<Project> getAllProjects(String sort, String direction) {
        Sort sorting;
        if (Objects.isNull(sort)) {
            sorting = Sort.unsorted();
        } else {
            sorting = Sort.by(direction.equalsIgnoreCase("asc") ? Sort.Direction.ASC : Sort.Direction.DESC, sort);
        }
        return projectRepository.findAll(sorting);
    }

    public List<Project> getProjectsForUser(User user) {
        if(user.getUsername().equalsIgnoreCase("admin")) {
            return projectRepository.findAll();
        }
        return projectRepository.findByUser(user);
    }

    public Optional<Project> getOneById(long id) {
        return projectRepository.findById(id);
    }

    public Project createProject(Project project) {
        String uid = projectUidGenerator.generateUid(project);
        project.setUid(uid);
        return projectRepository.save(project);
    }

    public void deleteById(long id) {
        projectRepository.deleteById(id);
    }

}
