package com.example.userapi.Service;

import com.example.userapi.Model.User;
import com.example.userapi.Model.UserResponseDTO;
import com.example.userapi.Repository.UserRepository;
import com.example.userapi.Security.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    
    public UserResponseDTO generateUserResponse(String username, String token) {
        UserResponseDTO response = new UserResponseDTO();
        response.setUsername(username);
        response.setToken(token);
        return response;
    }
    
    public UserResponseDTO register(String username, String password) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("Username already taken");
        }
        User user = new User(username, passwordEncoder.encode(password));
        userRepository.save(user);
        String token = jwtUtil.generateToken(user.getUsername());
        return generateUserResponse(user.getUsername(), token);
    }
    
    public UserResponseDTO login(String username, String password) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found."));
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Incorrect password.");
        }
        String token = jwtUtil.generateToken(user.getUsername());
        return generateUserResponse(user.getUsername(), token);
    }
    
    
}
