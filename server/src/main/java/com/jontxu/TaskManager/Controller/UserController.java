package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.ClientService;
import com.jontxu.TaskManager.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("clients")
public class ClientController {
    ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }
    @GetMapping
    public List<User> getAllClients(){
        return clientService.getAllClients();
    }
    @PostMapping
    public User addClient(@RequestBody User user){
        return clientService.addClient(user);
    }
    @DeleteMapping("{id}")
    public void deleteById(@PathVariable long id){
        clientService.deleteById(id);
    }
}
