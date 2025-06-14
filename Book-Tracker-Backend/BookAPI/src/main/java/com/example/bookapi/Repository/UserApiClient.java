package com.example.bookapi.Repository;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "UserApi")
public interface UserApiClient {
    
    @GetMapping("/users/exists/{id}")
    ResponseEntity<Boolean> checkUserExists(@PathVariable Long id);
    
}
