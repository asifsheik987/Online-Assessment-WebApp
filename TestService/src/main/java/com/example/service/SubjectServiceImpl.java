package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Subject;
import com.example.repository.SubjectRepository;

@Service
public class SubjectServiceImpl  implements SubjectService{
	
	@Autowired
	private SubjectRepository repo;

	@Override
	public List<Subject> getAllSubjects() {
		return repo.findAll();
	}

	@Override
	public Subject addNewSubject(Subject subject) {
		return repo.save(subject);
	}

	@Override
	public void deleteSubjectById(int id) {
		repo.deleteById(id);;
	}
	
	@Override
	public Subject getSubjectByName(String name) {
		return repo.getByName(name);
	}

	
	

}
