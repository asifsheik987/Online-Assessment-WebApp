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

import com.example.exception.ExceptionHandler;
import com.example.model.User;
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
    	try {
    	
    	User user = service.getUserByUserName(name);
    	
    	return ResponseEntity.status(HttpStatus.OK).body(user);
    	}catch(ExceptionHandler e) {
    		ExceptionHandler ex = new ExceptionHandler( e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getErrorMessage());
    	}
    	
    }
    @GetMapping("/allStudents")
    public ResponseEntity<?> getAllStudents(){
    	try {
    	List<User> students = service.getStudents();
    	return ResponseEntity.status(HttpStatus.OK).body(students);
    	}catch(ExceptionHandler e) {
    		ExceptionHandler ex = new ExceptionHandler( e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
    	}
    }

}
