package com.example.model;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "quiz_question")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question {

	  @Id
	  @GeneratedValue(strategy = GenerationType.SEQUENCE)
	  private int id;
	  
	  @Column(name="question_name")
	  private String qname;
	  private String ExamLevel;
	  private String optionOne;
	  private String optionTwo;
	  private String optionThree;
	  private String optionFour;
	  
	  @Column(name="question_answer")
	  private String answer;
	  
	   @ManyToOne
	   private Subject subject;
	   
	   
	   @ManyToMany
	   @JoinTable(name = "quiz_exam_questions",
	            joinColumns = @JoinColumn(name = "question_id"),
	            inverseJoinColumns = @JoinColumn(name = "exam_id"))
	   private Set<Exam> exam;
		   
}
