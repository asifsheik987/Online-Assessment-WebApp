package com.example.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.ExceptionHandler;
import com.example.model.Exam;
import com.example.repository.ExamRepository;

@Service
public class ExamServiceImpl implements ExamService {
	@Autowired
	private ExamRepository repo;

	@Override
	public List<Exam> getAllExam() {
		try {
			List<Exam> allExams = repo.findAll();
			if (allExams.isEmpty())
				throw new ExceptionHandler("601", "Exam List is Empty!!!");
			return allExams;
		} catch (Exception e) {
			throw new ExceptionHandler("603", "Error in exam Service!!!!");

		}
	}

	@Override
	public Exam getParticularExam(int id) {
		try {
			Exam exam = repo.findById(id).get();
			return exam;
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("602", "Id not found " + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("604", "Exam id doesnot Exits!!!");
		}
	}

	@Override
	public Exam addNewExam(Exam exam) {
		if (exam.getExamName().isEmpty() || exam.getSubject().equals(null) || exam.getExamName().length() == 0) {
			throw new ExceptionHandler("601", "Exam fields cannot be Empty!!!");
		}
		try {
			return repo.save(exam);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("602", "Exam fields are null and" + e.getMessage());
		} catch (Exception e) {
			throw new ExceptionHandler("603", "Error in Exam Service Layer!!!");
		}
	}

	@Override
	public void deleteExamById(int id) {
		try {
			repo.deleteById(id);
		} catch (Exception e) {
			throw new ExceptionHandler("602", "Give valid Id and " + e.getMessage());
		}
	}

	@Override
	public List<Exam> getBySubjectName(String subjectName) {
		try {
			return repo.getBySubjectName(subjectName);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("602", "Exam name not found!!!" + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("604", "Subject name doesnot exist!!!" + e.getMessage());
		}
	}

	@Override
	public List<Exam> getByUserId(Long userId) {
		try {
			return repo.getByUserId(userId);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("602", "userId not found" + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("604", "UserID does not exist!!!" + e.getMessage());
		}
	}

}
