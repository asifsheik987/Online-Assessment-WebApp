package com.example.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.ExceptionHandler;
import com.example.model.User;
import com.example.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository repo;

	@Override
	public User getUserByUserName(String name) {
		try {
		return repo.findByUsername(name).get();
		}catch(IllegalArgumentException e) {
			throw new ExceptionHandler("name not found!!!");
		}catch(NoSuchElementException e) {
			throw new ExceptionHandler("Name doesnot exist");
		}
	}
	
	public Boolean existsByUsername(String username) {
		return repo.existsByUsername(username);
	}

    public Boolean existsByEmail(String email) {
    	return repo.existsByEmail(email);
    }

	@Override
	public User addUser(User user) {
		if(user.getEmail().isEmpty()||user.getUsername().isEmpty()||user.getPassword().isEmpty()) {
			throw new ExceptionHandler("User fields cannot be empty!!!");
		}try {
		return repo.save(user);
		}catch(IllegalArgumentException e) {
			throw new ExceptionHandler("user fields are null");
			
		}catch(Exception e) {
			throw new ExceptionHandler("Error in User Service!!!");
		}
	}

	@Override
	public List<User> getStudents() {
		// TODO Auto-generated method stub
		try {
		List<User> users = repo.getAllStudents();
		if(users.isEmpty())
			throw new ExceptionHandler("Users List is Empty");
		return users;
		}catch(Exception e) {
			throw new ExceptionHandler("error in user service!!!");
		}
	}
	
}
