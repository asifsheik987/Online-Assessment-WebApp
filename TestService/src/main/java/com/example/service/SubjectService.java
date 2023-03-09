package com.example.service;

import java.util.List;

import com.example.model.Subject;

public interface SubjectService {
	
	public List<Subject> getAllSubjects();
	
	public Subject addNewSubject(Subject subject );
	
	public void deleteSubjectById(int id);
	
	public Subject getSubjectByName(String name);
}
