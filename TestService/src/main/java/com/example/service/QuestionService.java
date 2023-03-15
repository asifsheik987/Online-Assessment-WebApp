package com.example.service;

import java.util.List;

import com.example.model.Question;

public interface QuestionService {
		 public List<Question> getAllQuestion();
		
		 public Question createNewQuestion(Question question );
		 
		 
		 public List<Question> getAllQuestionForExam(int id);
		 
		  public Question updateQuestion(int id ,Question question);
		 
		 
		 public void deleteQuestion(int id);
		 
		 public List<Question> getAllQuestionsBySubject(String subjectName);
		 
		 public Question getParticularQuestion(int examId,int questionId);

}
