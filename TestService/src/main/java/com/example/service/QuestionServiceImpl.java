package com.example.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.ExceptionHandler;
import com.example.model.Question;
import com.example.repository.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService {
	@Autowired
	private QuestionRepository repo;

	@Override
	public List<Question> getAllQuestion() {
		try {
			List<Question> questions = repo.findAll();
			if (questions.isEmpty())
				throw new ExceptionHandler("Question List is Empty!!!");
			return questions;
		} catch (Exception e) {
			throw new ExceptionHandler("Error in Question service!!!");
		}
	}

	@Override
	public Question createNewQuestion(Question question) {
		if (question.getQname().isEmpty() || question.getExam().isEmpty() || question.getSubject().equals(null))
			throw new ExceptionHandler("Question fields cannot be Empty ");
		try {
			return repo.save(question);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("Question fields are null and " + e.getMessage());
		} catch (Exception e) {
			throw new ExceptionHandler("Error in Question Service Layer!!!");
		}
	}

	@Override
	public List<Question> getAllQuestionForExam(int id) {
		try {
			return repo.findByExamId(id);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("Exam Id not found!!!! " + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("Exam Id does not Exist!!! " + e.getMessage());
		}
	}

	@Override
	public Question updateQuestion(int id, Question question) {

		question.setId(id);
		return repo.save(question);
	}

	@Override
	public void deleteQuestion(int id) {
		try {
			repo.deleteById(id);
		} catch (Exception e) {
			throw new ExceptionHandler("Give valid question Id " + e.getMessage());
		}

	}

	@Override
	public List<Question> getAllQuestionsBySubject(String subjectName) {
		try {
			return repo.findBySubject(subjectName);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("Subject name not Found!!! " + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("Subject Name doesnot Exist!!!" + e.getMessage());
		}
	}

	@Override
	public Question getParticularQuestion(int examId, int questionId) {
		try {
			return repo.getQuestion(examId, questionId);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("arguments not found!!! " + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("arguments does not exist!!! " + e.getMessage());
		}
	}

}
