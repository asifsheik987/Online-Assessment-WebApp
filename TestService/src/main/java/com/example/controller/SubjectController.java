package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exception.ExceptionHandler;
import com.example.model.Subject;
import com.example.service.SubjectService;
import com.example.service.SubjectServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/subjects")
public class SubjectController {

	@Autowired
	private SubjectService service;

	@GetMapping("/allSubjects")
	public ResponseEntity<?> getAllSubjects() {
		try {
			List<Subject> subjects = service.getAllSubjects();
			return ResponseEntity.status(HttpStatus.OK).body(subjects);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler( e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@PostMapping("/addSubject")
	public ResponseEntity<?> addNewSubject(@RequestBody Subject subject) {
		try {
			Subject Subject_added = service.addNewSubject(subject);
			return ResponseEntity.status(HttpStatus.CREATED).body(Subject_added);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		} catch (Exception e) {
			ExceptionHandler ex = new ExceptionHandler("Error in Controller!!!");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@DeleteMapping("/deleteSubject/{subjectId}")
	public ResponseEntity<?> deleteSubject(@PathVariable(name = "subjectId") int id) {
		try {
			service.deleteSubjectById(id);
			return ResponseEntity.status(HttpStatus.OK).body("1 is deleted");
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler( e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@GetMapping("/getSubject/{subjectName}")
	public ResponseEntity<?> getSubjectByName(@PathVariable(name = "subjectName") String name) {
		try {
			Subject subject = service.getSubjectByName(name);
			return ResponseEntity.status(HttpStatus.OK).body(subject);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

}
