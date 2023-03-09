package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.NewQuizRequest;
import com.example.exception.EmptyInputException;
import com.example.exception.ExceptionHandler;
import com.example.model.Exam;
import com.example.model.Subject;
import com.example.model.User;
import com.example.service.ExamService;
import com.example.service.ExamServiceImpl;
import com.example.service.SubjectServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/exam")
public class ExamController {
	@Autowired
	private ExamService service;
	@Autowired
	private SubjectServiceImpl subService;

	@GetMapping("/allExams")
	public ResponseEntity<?> getAllExams() {
		try {
			List<Exam> exams = service.getAllExam();
			return ResponseEntity.status(HttpStatus.OK).body(exams);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorCode(), e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@PostMapping("/addExam")
	public ResponseEntity<?> addExam(@RequestBody NewQuizRequest quiz) {
		try {
			Exam exam = new Exam();
			exam.setExamName(quiz.getExamName());
			exam.setDesc(quiz.getDesc());
			exam.setDate(quiz.getDate());
			Subject subject = subService.getSubjectByName(quiz.getSubjectName());
			User user = new User();
			user.setId(quiz.getUserId());
			exam.setUser(user);
			exam.setSubject(subject);
			Exam examCreated = service.addNewExam(exam);
			return ResponseEntity.status(HttpStatus.CREATED).body(examCreated);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorCode(), e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		} catch (Exception e) {
			ExceptionHandler ex = new ExceptionHandler("605", "Error in exam controller!!!");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@GetMapping("/getExam/{id}")
	public ResponseEntity<?> getExam(@PathVariable int id) {
		try {
			Exam exam = service.getParticularExam(id);
			return ResponseEntity.status(HttpStatus.OK).body(exam);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorCode(), e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}

	}

	@DeleteMapping("/deleteExam/{id}")
	public ResponseEntity<?> deleteExam(@PathVariable int id) {
		try {
			service.deleteExamById(id);
			return ResponseEntity.status(HttpStatus.OK).body("1 Exam deleted");
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorCode(), e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@GetMapping("/getExamOnSubjectName/{subjectName}")
	public ResponseEntity<?> getExamsOnSubjectName(@PathVariable String subjectName) {
		try {
			List<Exam> exams = service.getBySubjectName(subjectName);
			return ResponseEntity.ok(exams);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorCode(), e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@GetMapping("/getByUserId/{userId}")
	public ResponseEntity<?> getExamsByUserId(@PathVariable(name = "userId") Long userId) {
		try {
			List<Exam> exams = service.getByUserId(userId);
			return ResponseEntity.ok(exams);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorCode(), e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

}
