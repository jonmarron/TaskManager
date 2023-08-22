package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.model.ProjectType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("projectTypes")
@CrossOrigin("*")
public class ProjectTypeController {
    @GetMapping
    public List<ProjectType> getAllTypes(){
        return Arrays.asList(ProjectType.class.getEnumConstants());
    }
}
