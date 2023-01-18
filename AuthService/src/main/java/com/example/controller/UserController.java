package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.security.services.UserDetailsServiceImpl;
import com.example.service.UserServiceImpl;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/testUser")
public class UserController {
	@Autowired
	private UserServiceImpl service;

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('INSTRUCTOR') or hasAuthority('STUDENT')")
    public ResponseEntity<?> allAccess() {
        return ResponseEntity.status(HttpStatus.OK).body("Public Content.");
    }

    @GetMapping("/student")
    @PreAuthorize("hasAuthority('STUDENT')")
    public ResponseEntity<?> userAccess() {
        return ResponseEntity.status(HttpStatus.OK).body("User Content.");
    }

    @GetMapping("/instructor")
    @PreAuthorize("hasAuthority('INSTRUCTOR')")
    public ResponseEntity<?> instructorAccess() {
        return ResponseEntity.status(HttpStatus.OK).body("Instructor Board.");
    }
    
    
    @GetMapping("/getUser/{userName}")
    public ResponseEntity<?> getUserByUserName(@PathVariable(name = "userName") String name){
    	
    	User user = service.getUserByUserName(name);
    	
    	return ResponseEntity.status(HttpStatus.OK).body(user);
    	
    }
    @GetMapping("/allStudents")
    public ResponseEntity<?> getAllStudents(){
    	List<User> students = service.getStudents();
    	return ResponseEntity.status(HttpStatus.OK).body(students);
    }

}
