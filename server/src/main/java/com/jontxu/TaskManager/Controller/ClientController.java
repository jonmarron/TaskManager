package com.jontxu.TaskManager.Controller;

import com.jontxu.TaskManager.Service.ClientService;
import com.jontxu.TaskManager.model.Client;
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
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }
    @PostMapping
    public Client addClient(@RequestBody Client client){
        return clientService.addClient(client);
    }
}
