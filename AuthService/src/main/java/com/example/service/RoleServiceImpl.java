package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Role;
import com.example.entity.Role_Type;
import com.example.repository.RoleRepository;

@Service
public class RoleServiceImpl implements RoleService{
	@Autowired
	private RoleRepository repo;

	@Override
	public Role addRole(Role role) {
		// TODO Auto-generated method stub
		return repo.save(role);
	}

	@Override
	public Optional<Role> findByName(Role_Type name) {
		// TODO Auto-generated method stub
		return repo.findByName(name);
	}

	@Override
	public List<Role> getRoles() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

}
