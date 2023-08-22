package com.jontxu.TaskManager.Service;

import com.jontxu.TaskManager.model.Client;
import com.jontxu.TaskManager.model.ClientRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ClientService {
    private ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAllClients(){
        return clientRepository.findAll();
    }

    public Client addClient(Client client){
        client.setRegistrationDate(LocalDate.now());
        return clientRepository.save(client);
    }

    public void deleteById(long id){ clientRepository.deleteById(id);}
}
