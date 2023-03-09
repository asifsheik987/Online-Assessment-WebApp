package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dto.QuestionResponse;
import com.example.model.Question;
@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer>{
	
	public List<Question> findByExamId(int id);
	
	@Query(value = "select * from quiz_question where subject_id = (select id from quiz_subject where subject_name = ?1)",nativeQuery = true)
	public List<Question> findBySubject(String subjectName);
	
//	@Query(value="select id,exam_level,question_answer,option_one,option_two,option_three,option_four,question_name,subject_id,exam_id from assessment_question join assessment_exam_questions on assessment_question.id = assessment_exam_questions.question_id WHERE assessment_exam_questions.exam_id=?1 and\r\n"
//			+ " assessment_exam_questions.question_id=?2")
//	public QuestionResponse getQuestionInExam(int examId,int questionId);
	@Query(value="select * from quiz_question left outer join quiz_exam_questions on quiz_question.id = quiz_exam_questions.question_id WHERE quiz_exam_questions.exam_id!=? and\r\n"
			+ " quiz_exam_questions.question_id=?",nativeQuery = true)
	public Question getQuestion(int examid,int questionid);
	

}
