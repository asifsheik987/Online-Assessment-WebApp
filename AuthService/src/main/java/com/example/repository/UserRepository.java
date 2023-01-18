package com.example.repository;

import com.example.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	
    public Optional<User> findByUsername(String username);

    public Boolean existsByUsername(String username);

    public Boolean existsByEmail(String email);
    
    @Query(value = "select id,email,username,password from quiz_users join quiz_user_roles on quiz_users.id = quiz_user_roles.user_id where quiz_user_roles.role_id=2",nativeQuery = true)
    public List<User> getAllStudents();
}
