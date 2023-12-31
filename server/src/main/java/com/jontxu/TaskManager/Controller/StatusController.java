package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.model.Status;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("status")
public class StatusController {
    @GetMapping
    public List<Status> getAllStatus(){
        return Arrays.asList(Status.class.getEnumConstants());
    }
}
