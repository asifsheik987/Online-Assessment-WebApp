package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.entity.Result;
import com.example.repository.ResultRepository;

@Repository
public class ResultServiceImpl implements ResultService{
	
	
	@Autowired
	private ResultRepository repo;

	@Override
	public List<Result> getAllResult() {
		return repo.findAll();
	}

	@Override
	public Result addNewResult(Result result) {
		return repo.save(result);
	}

	@Override
	public List<Result> getAllResultForStudent(String userName) {
		
		return repo.getByUserName(userName);
	}

	@Override
	public void deleteResultinExam(int examId) {
		repo.delByExamId(examId);

	}

}
