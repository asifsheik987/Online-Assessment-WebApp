package com.example.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.Question;
import com.example.model.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Integer>{
    
	@Query(value = " select * from quiz_result where user_id = (select id from quiz_users where username = ?1)",nativeQuery = true)
	public List<Result> getByUserName(String userName);
	
	@Query(value="DELETE FROM quiz_result WHERE  exam_id=?1",nativeQuery = true)
	public Result delByExamId(int examId);
	
}
