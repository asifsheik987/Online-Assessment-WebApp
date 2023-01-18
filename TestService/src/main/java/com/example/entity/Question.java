package com.example.entity;


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

@Entity
@Table(name = "quiz_question")
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQname() {
		return qname;
	}

	public void setQname(String qname) {
		this.qname = qname;
	}

	public String getOptionOne() {
		return optionOne;
	}

	public void setOptionOne(String optionOne) {
		this.optionOne = optionOne;
	}

	public String getOptionTwo() {
		return optionTwo;
	}

	public void setOptionTwo(String optionTwo) {
		this.optionTwo = optionTwo;
	}

	public String getOptionThree() {
		return optionThree;
	}

	public void setOptionThree(String optionThree) {
		this.optionThree = optionThree;
	}

	public String getOptionFour() {
		return optionFour;
	}

	public void setOptionFour(String optionFour) {
		this.optionFour = optionFour;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	

	public Set<Exam> getExam() {
		return exam;
	}

	public void setExam(Set<Exam> exam) {
		this.exam = exam;
	}

	public String getExamLevel() {
		return ExamLevel;
	}

	public void setExamLevel(String examLevel) {
		ExamLevel = examLevel;
	}

	public Question(int id, String qname, String examLevel, String optionOne, String optionTwo, String optionThree,
			String optionFour, String answer, Subject subject, Set<Exam> exam) {
		super();
		this.id = id;
		this.qname = qname;
		ExamLevel = examLevel;
		this.optionOne = optionOne;
		this.optionTwo = optionTwo;
		this.optionThree = optionThree;
		this.optionFour = optionFour;
		this.answer = answer;
		this.subject = subject;
		this.exam = exam;
	}

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Question [id=" + id + ", qname=" + qname + ", ExamLevel=" + ExamLevel + ", optionOne=" + optionOne
				+ ", optionTwo=" + optionTwo + ", optionThree=" + optionThree + ", optionFour=" + optionFour
				+ ", answer=" + answer + ", subject=" + subject + ", exam=" + exam + "]";
	}
		   
}
