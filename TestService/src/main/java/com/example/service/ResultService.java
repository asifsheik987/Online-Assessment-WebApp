package com.example.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.entity.Result;

public interface ResultService {
	
	public List<Result> getAllResult();
	
	public  Result addNewResult(Result result);
	
	public List<Result> getAllResultForStudent( String userName);
	
	public void deleteResultinExam(int ExamId);

}
