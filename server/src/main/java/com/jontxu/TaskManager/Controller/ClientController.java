package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.ClientService;
import com.jontxu.TaskManager.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("clients")
@CrossOrigin("*")
public class ClientController {
    ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }
    @GetMapping
    @Secured("ROLE_ADMIN")
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }
    @PostMapping
    public Client addClient(@RequestBody Client client){
        return clientService.addClient(client);
    }
    @DeleteMapping("{id}")
    public void deleteById(@PathVariable long id){
        clientService.deleteById(id);
    }
}
