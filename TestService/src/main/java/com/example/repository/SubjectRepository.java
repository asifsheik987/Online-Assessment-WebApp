package com.example.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer>{
	
	@Transactional
	public Subject getByName(String Name);

}
