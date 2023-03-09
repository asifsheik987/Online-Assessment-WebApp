package com.example.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.exception.ExceptionHandler;
import com.example.model.Result;
import com.example.repository.ResultRepository;

@Repository
public class ResultServiceImpl implements ResultService {

	@Autowired
	private ResultRepository repo;

	@Override
	public List<Result> getAllResult() {
		try {
			List<Result> results = repo.findAll();
			if (results.isEmpty())
				throw new ExceptionHandler("601", "Result List is Empty!!!");

			return results;
		} catch (Exception e) {
			throw new ExceptionHandler("603", "Error in Result Service!!!");
		}
	}

	@Override
	public Result addNewResult(Result result) {
		if (result.getScore().isEmpty() || result.getStatus().isEmpty() || result.getSubject().equals(null)
				|| result.getUser().equals(null) || result.getExam().equals(null))
			throw new ExceptionHandler("601", "Result fields cannot be Empty!!!");
		try {
			return repo.save(result);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("602", "All exam fields are null!! " + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("603", "Error in Result Service!!! ");
		}
	}

	@Override
	public List<Result> getAllResultForStudent(String userName) {
		try {
			return repo.getByUserName(userName);
		} catch (IllegalArgumentException e) {
			throw new ExceptionHandler("602", "userName not found!!! " + e.getMessage());
		} catch (NoSuchElementException e) {
			throw new ExceptionHandler("604", "userName doesnot exist!!! " + e.getMessage());
		}
	}

	@Override
	public void deleteResultinExam(int examId) {
		try {
			repo.delByExamId(examId);
		} catch (Exception e) {
			throw new ExceptionHandler("602", "Give valid Id!!! " + e.getMessage());
		}
	}

}
