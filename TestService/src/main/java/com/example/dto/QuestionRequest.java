package com.example.dto;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

import com.example.model.Exam;
import com.example.model.Subject;

public class QuestionRequest {
	
	private String qname;
	
	private String examLevel;
	
	private String optionOne;
	private String optionTwo;
	private String optionThree;
	private String optionFour;
	  
	private String answer;
	private String subjectName;
	private int  examId;
	public QuestionRequest() {
		super();
		// TODO Auto-generated constructor stub
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
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public int getExamId() {
		return examId;
	}
	public void setExamId(int examId) {
		this.examId = examId;
	}
	@Override
	public String toString() {
		return "QuestionRequest [qname=" + qname + ", examLevel=" + examLevel + ", optionOne=" + optionOne
				+ ", optionTwo=" + optionTwo + ", optionThree=" + optionThree + ", optionFour=" + optionFour
				+ ", answer=" + answer + ", subjectName=" + subjectName + ", examId=" + examId + "]";
	}
	public String getExamLevel() {
		return examLevel;
	}
	public void setExamLevel(String examLevel) {
		this.examLevel = examLevel;
	}
	
	
	

}
