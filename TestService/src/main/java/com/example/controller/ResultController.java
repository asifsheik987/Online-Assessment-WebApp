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

import com.example.entity.Result;
import com.example.service.ResultService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/result")
public class ResultController {
	
	@Autowired
	private ResultService service;
	
	@GetMapping("/allResults")
	public ResponseEntity<?> getAllResults(){
		List<Result> results = service.getAllResult();
		return ResponseEntity.status(HttpStatus.OK).body(results);
	}
	@PostMapping("/addResult")
	public ResponseEntity<?> addResult( @RequestBody Result result){
		Result addedResult = service.addNewResult(result);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(addedResult);
	}
	@GetMapping("/resultForStudent/{studentName}")
	public ResponseEntity<?> getResultByStudentName(@PathVariable String studentName){
		List<Result> results = service.getAllResultForStudent(studentName);
		
		return ResponseEntity.status(HttpStatus.OK).body(results);
 	}
	@DeleteMapping("/deleteResultByExam/{examId}")
	public ResponseEntity<?> deleteResultByExamId(@PathVariable int examId){
		service.deleteResultinExam(examId);
		return ResponseEntity.status(HttpStatus.OK).body("1 Result Deleted");
	}

}
