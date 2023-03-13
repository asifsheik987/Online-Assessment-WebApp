package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Role;
import com.example.model.Role_Type;

import java.util.Optional;
@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
	
	
    Optional<Role> findByName(Role_Type name);
    
}
