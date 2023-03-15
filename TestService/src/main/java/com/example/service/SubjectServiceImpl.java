package com.example.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.ExceptionHandler;
import com.example.model.Subject;
import com.example.repository.SubjectRepository;

@Service
public class SubjectServiceImpl implements SubjectService {

	@Autowired
	private SubjectRepository repo;

	@Override
	public List<Subject> getAllSubjects() {
		try {
			List<Subject> subjects = repo.findAll();
			if (subjects.isEmpty())
				throw new ExceptionHandler("ExamList is Empty!!!");
			return subjects;
		} catch (Exception e) {
			throw new ExceptionHandler("Error in subject service!!!");
		}
	}

	@Override
	public Subject createNewSubject(Subject subject) {
		if (subject.getName().isEmpty() || subject.getName().length() == 0)
			throw new ExceptionHandler("Subject name cannot be empty!!!");
		try {
			return repo.save(subject);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("subject cannot be null!!! " + e.getMessage());
		} catch (Exception e) {
			throw new ExceptionHandler("Error in subject service!!!");
		}
	}

	@Override
	public void deleteSubjectById(int id) {
		try {
			repo.deleteById(id);
		} catch (Exception e) {
			throw new ExceptionHandler("Give valid Id !! " + e.getMessage());
		}
	}

	@Override
	public Subject getSubjectByName(String name) {
		try {
			return repo.getByName(name);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("Name not found !!!");
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("subject name does not Exist!!! " + e.getMessage());
		}
	}

}
