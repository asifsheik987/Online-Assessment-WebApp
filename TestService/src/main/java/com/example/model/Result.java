package com.example.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "quiz_result")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	   
	@Column(name="result_status")
	private String status;
	   
	@Column(name="result_score")
    private String score;
	  	   
	   
	@Column(name="total_marks")
	private String totalMarks;
	   
	@ManyToOne   
	private Subject subject;
	   
	@ManyToOne
	private User user;
	
	@ManyToOne 
	private Exam exam;

	

}
