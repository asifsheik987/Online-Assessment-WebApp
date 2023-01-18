package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Question;
import com.example.repository.QuestionRepository;
@Service
public class QuestionServiceImpl implements QuestionService{
	@Autowired
	private QuestionRepository repo;

	@Override
	public List<Question> getAllQuestion() {
		return repo.findAll();
	}

	@Override
	public Question addNewQuestion(Question question) {
		return repo.save(question);
	}

	@Override
	public List<Question> getAllQuestionForExam(int id) {
		return repo.findByExamId(id);
	}

	@Override
	public Question updateQuestion(int id, Question question) {
		
		question.setId(id);
		return repo.save(question);
	}

	@Override
	public void deleteQuestion(int id) {
		repo.deleteById(id);
		
	}

	@Override
	public List<Question> getAllQuestionsBySubject(String subjectName) {
		
		return repo.findBySubject(subjectName);
	}

	@Override
	public Question getParticularQuestion(int examId, int questionId) {
		// TODO Auto-generated method stub
		return repo.getQuestion(examId, questionId);
	}

}
