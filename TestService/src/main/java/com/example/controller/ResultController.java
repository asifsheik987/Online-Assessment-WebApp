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

import com.example.exception.ExceptionHandler;
import com.example.model.Result;
import com.example.service.ResultService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/result")
public class ResultController {

	@Autowired
	private ResultService service;

	@GetMapping("/allResults")
	public ResponseEntity<?> getAllResults() {
		try {
			List<Result> results = service.getAllResult();
			return ResponseEntity.status(HttpStatus.OK).body(results);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@GetMapping("/resultForStudent/{studentName}")
	public ResponseEntity<?> getResultByStudentName(@PathVariable String studentName) {
		try {
			List<Result> results = service.getAllResultForStudent(studentName);

			return ResponseEntity.status(HttpStatus.OK).body(results);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@PostMapping("/addResult")
	public ResponseEntity<?> addResult(@RequestBody Result result) {
		try {

			Result addedResult = service.createNewResult(result);

			return ResponseEntity.status(HttpStatus.CREATED).body(addedResult);
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		} catch (Exception e) {
			ExceptionHandler ex = new ExceptionHandler("Error in Result Controller");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

	@DeleteMapping("/deleteResultByExam/{examId}")
	public ResponseEntity<?> deleteResultByExamId(@PathVariable int examId) {
		try {
			service.deleteResultinExam(examId);
			return ResponseEntity.status(HttpStatus.OK).body("1 Result Deleted");
		} catch (ExceptionHandler e) {
			ExceptionHandler ex = new ExceptionHandler(e.getErrorMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
		}
	}

}
