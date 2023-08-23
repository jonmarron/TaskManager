package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.UserService;
import com.jontxu.TaskManager.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping
    public List<User> getAllClients(){
        return userService.getAllClients();
    }
    @PostMapping
    public User addClient(@RequestBody User user){
        return userService.addClient(user);
    }
    @DeleteMapping("{id}")
    public void deleteById(@PathVariable long id){
        userService.deleteById(id);
    }
}
