package com.jontxu.TaskManager.Service;

import com.jontxu.TaskManager.model.User;
import com.jontxu.TaskManager.model.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllClients(){
        return userRepository.findAll().stream()
                        .filter(user -> !user.getAuthorities().contains("ADMIN"))
                        .collect(Collectors.toList());

    }

    public User addClient(User user){
        user.setRegistrationDate(LocalDate.now());
        return userRepository.save(user);
    }

    public void deleteById(long id){ userRepository.deleteById(id);}
}
