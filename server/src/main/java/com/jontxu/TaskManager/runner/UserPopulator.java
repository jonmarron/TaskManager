package com.jontxu.TaskManager.runner;

import com.jontxu.TaskManager.model.User;
import com.jontxu.TaskManager.model.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;
@Configuration
public class UserPopulator {
    @Bean
    ApplicationRunner populateUsers(UserRepository userRepository, PasswordEncoder passwordEncoder){
        return args -> {
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("123"));
            admin.setRoles(Set.of("ADMIN","USER"));

            userRepository.save(admin);

            User user = new User();
            user.setUsername("user");
            user.setPassword(passwordEncoder.encode("123"));
            user.setRoles(Set.of("USER"));

            userRepository.save(user);
        };
    }
}
