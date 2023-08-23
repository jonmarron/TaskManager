package com.jontxu.TaskManager.Service;

import com.jontxu.TaskManager.model.User;
import com.jontxu.TaskManager.model.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ClientService {
    private UserRepository userRepository;

    public ClientService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllClients(){
        return userRepository.findAll();
    }

    public User addClient(User user){
        user.setRegistrationDate(LocalDate.now());
        return userRepository.save(user);
    }

    public void deleteById(long id){ userRepository.deleteById(id);}
}
