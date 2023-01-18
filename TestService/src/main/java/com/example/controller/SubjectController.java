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

import com.example.entity.Subject;
import com.example.exception.EmptyInputException;
import com.example.service.SubjectService;
import com.example.service.SubjectServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/subjects")
public class SubjectController {
	
	@Autowired
	private SubjectService service;
	
	@GetMapping("/allSubjects")
	public ResponseEntity<?> getAllSubjects(){
		List<Subject> subjects = service.getAllSubjects();
		return ResponseEntity.status(HttpStatus.OK).body(subjects);
	}
	@PostMapping("/addSubject")
	public ResponseEntity<?> addNewSubject(@RequestBody Subject subject){
		if(subject.getName()=="") {
			throw new EmptyInputException();
		}
		Subject Subject_added = service.addNewSubject(subject);
		return ResponseEntity.status(HttpStatus.CREATED).body(Subject_added);
	}
	@DeleteMapping("/deleteSubject/{subjectId}")
	public ResponseEntity<?> deleteSubject(@PathVariable(name = "subjectId") int id) {
		service.deleteSubjectById(id);
		return ResponseEntity.status(HttpStatus.OK).body("1 is deleted");
		
	}
	@GetMapping("/getSubject/{subjectName}")
	public ResponseEntity<?> getSubjectByName(@PathVariable(name = "subjectName")String name){
		
			Subject subject = service.getSubjectByName(name);
			return ResponseEntity.status(HttpStatus.OK).body(subject);
		
	}

}
