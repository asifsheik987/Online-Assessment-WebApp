package com.example.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.QuestionRequest;
import com.example.entity.Exam;
import com.example.entity.Question;
import com.example.entity.Subject;
import com.example.exception.EmptyInputException;
import com.example.service.ExamService;
import com.example.service.ExamServiceImpl;
import com.example.service.QuestionService;
import com.example.service.QuestionServiceImpl;
import com.example.service.SubjectService;
import com.example.service.SubjectServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/questions")
public class QuestionController {

	@Autowired
	private QuestionService service;
	@Autowired
	private SubjectService subService;
	@Autowired
	private ExamService exService;

	@GetMapping("/allQuestions")
	public ResponseEntity<?> getAllQuestions() {
		List<Question> questions = service.getAllQuestion();
		return ResponseEntity.status(HttpStatus.OK).body(questions);
	}

	@PostMapping("/addQuestion")
	public ResponseEntity<?> addNewQuestion(@RequestBody QuestionRequest data) {
		if (data.getQname().equals("") || data.getAnswer().equals("") || data.getSubjectName().equals("")
				|| data.getOptionOne().equals("") || data.getOptionTwo().equals("")
				|| data.getOptionThree().equals("")) {

			throw new EmptyInputException();
		}
		Question question = new Question();
		Subject subject = subService.getSubjectByName(data.getSubjectName());
		Exam exam = exService.getParticularExam(data.getExamId());
		Set<Exam> examSet = new HashSet<>();
		examSet.add(exam);
		question.setQname(data.getQname());
		question.setOptionOne(data.getOptionOne());
		question.setOptionTwo(data.getOptionTwo());
		question.setOptionThree(data.getOptionThree());
		question.setOptionFour(data.getOptionFour());
		question.setAnswer(data.getAnswer());
		question.setSubject(subject);
		question.setExam(examSet);
		question.setExamLevel(data.getExamLevel());
		Question Question_added = service.addNewQuestion(question);
		return ResponseEntity.status(HttpStatus.CREATED).body(Question_added);
	}

	@GetMapping("/getQuestionsForExam/{examId}")
	public ResponseEntity<?> getAllQuestionsForExam(@PathVariable(name = "examId") int id) {
		List<Question> questions = service.getAllQuestionForExam(id);
		return ResponseEntity.status(HttpStatus.OK).body(questions);

	}

	@PutMapping("/question/{id}")
	public ResponseEntity<?> updateQuestion(@PathVariable(name = "id") int id, @RequestBody Question question) {
		Question questionToUpdate = service.updateQuestion(id, question);

		return ResponseEntity.status(HttpStatus.OK).body(questionToUpdate);
	}

	@DeleteMapping("/deleteQuestion/{id}")
	public ResponseEntity<?> deleteQuestion(@PathVariable(name = "id") int id) {
		service.deleteQuestion(id);
		return ResponseEntity.status(HttpStatus.OK).body("Question Deleted");
	}

	@GetMapping("/getQuestionsBySubject/{subjectName}")
	public ResponseEntity<?> getQuestionsBysubject(@PathVariable String subjectName) {
		List<Question> questions = service.getAllQuestionsBySubject(subjectName);
		return ResponseEntity.status(HttpStatus.OK).body(questions);
	}

	@PutMapping("/addQuestionToExam/{examId}/{questionId}")
	public ResponseEntity<?> addQuestionToExam(@PathVariable(name = "examId") int examId,
			@PathVariable(name = "questionId") int questionId) {
		Question question = service.getParticularQuestion(examId, questionId);
		System.out.println(question);
		Exam exam = exService.getParticularExam(examId);
		System.out.println(question.getExam());

		Set<Exam> examSet = question.getExam();
		examSet.add(exam);
		question.setExam(examSet);
		Question questionupdated = service.addNewQuestion(question);
		return ResponseEntity.status(HttpStatus.OK).body(questionupdated);

	}

	@PutMapping("/deleteQuestionFromExam/{examId}/{questionId}")
	public ResponseEntity<?> adddeleteQuestionFromExam(@PathVariable(name = "examId") int examId,
			@PathVariable(name = "questionId") int questionId) {
		Question question = service.getParticularQuestion(examId, questionId);
		System.out.println(question);
		Exam exam = exService.getParticularExam(examId);
		System.out.println(question.getExam());

		Set<Exam> examSet = question.getExam();
		if (examSet.size() > 1) {
			examSet.remove(exam);
			question.setExam(examSet);
			Question questionupdated = service.addNewQuestion(question);
			return ResponseEntity.status(HttpStatus.OK).body(questionupdated);
		} else {
			service.deleteQuestion(questionId);
			return ResponseEntity.status(HttpStatus.OK).body("Question Deleted");
		}

	}

	@DeleteMapping("/removeQFromExam/{examId}")
	public ResponseEntity<?> delQuestionOnExam(@PathVariable int examId) {
		List<Question> questions = service.getAllQuestionForExam(examId);
		Exam exam = exService.getParticularExam(examId);
		for (Question q : questions) {
			Set<Exam> examSet = q.getExam();
			if (examSet.size() > 1) {
				examSet.remove(exam);
				q.setExam(examSet);
				Question questionupdated = service.addNewQuestion(q);
			} else {
				service.deleteQuestion(q.getId());
			}

		}
		return ResponseEntity.status(HttpStatus.OK).body("Questions related exam removed");

	}

}
