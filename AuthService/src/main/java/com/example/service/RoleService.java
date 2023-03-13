package com.example.service;

import java.util.List;
import java.util.Optional;

import com.example.model.Role;
import com.example.model.Role_Type;

public interface RoleService {

	public Role addRole(Role role);
	
	Optional<Role> findByName(Role_Type name);
	
	public List<Role> getRoles();
}
