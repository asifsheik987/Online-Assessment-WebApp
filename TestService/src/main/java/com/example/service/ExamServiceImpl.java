package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Exam;
import com.example.repository.ExamRepository;

@Service
public class ExamServiceImpl implements ExamService{
	@Autowired
	private ExamRepository repo;

	@Override
	public List<Exam> getAllExam() {
		return repo.findAll();
	}

	@Override
	public Exam getParticularExam(int id) {
		Exam exam = repo.getById(id);
		return exam;
	}

	@Override
	public Exam addNewExam(Exam exam) {
		return repo.save(exam);
	}
	@Override
	public void deleteExamById(int id) {
		repo.deleteById(id);
	}
	@Override
	public List<Exam> getBySubjectName(String subjectName){
		return repo.getBySubjectName(subjectName);
	}

	@Override
	public List<Exam> getByUserId(Long userId) {
		// TODO Auto-generated method stub
		return repo.getByUserId(userId);
	}
	

}
