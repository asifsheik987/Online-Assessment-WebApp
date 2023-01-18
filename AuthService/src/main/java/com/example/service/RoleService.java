package com.example.service;

import java.util.Optional;

import com.example.entity.Role;
import com.example.entity.Role_Type;

public interface RoleService {

	public Role addRole(Role role);
	
	Optional<Role> findByName(Role_Type name);
}
