package com.example.dto;

public class QuestionResponse {
	//id,exam_level,question_answer,option_one,option_two,
	//option_three,option_four,question_name,subject_id,exam_id
	
	private int id;
	private String exam_level;
	private String question_answer;
	private String option_one;
	private String option_two;
	private String option_three;
	private String option_four;
	private String question_name;
	private String subject_id;
	private String exam_id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getExam_level() {
		return exam_level;
	}
	public void setExam_level(String exam_level) {
		this.exam_level = exam_level;
	}
	public String getQuestion_answer() {
		return question_answer;
	}
	public void setQuestion_answer(String question_answer) {
		this.question_answer = question_answer;
	}
	public String getOption_one() {
		return option_one;
	}
	public void setOption_one(String option_one) {
		this.option_one = option_one;
	}
	public String getOption_two() {
		return option_two;
	}
	public void setOption_two(String option_two) {
		this.option_two = option_two;
	}
	public String getOption_three() {
		return option_three;
	}
	public void setOption_three(String option_three) {
		this.option_three = option_three;
	}
	public String getOption_four() {
		return option_four;
	}
	public void setOption_four(String option_four) {
		this.option_four = option_four;
	}
	public String getQuestion_name() {
		return question_name;
	}
	public void setQuestion_name(String question_name) {
		this.question_name = question_name;
	}
	public String getSubject_id() {
		return subject_id;
	}
	public void setSubject_id(String subject_id) {
		this.subject_id = subject_id;
	}
	public String getExam_id() {
		return exam_id;
	}
	public void setExam_id(String exam_id) {
		this.exam_id = exam_id;
	}
	public QuestionResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public QuestionResponse(int id, String exam_level, String question_answer, String option_one, String option_two,
			String option_three, String option_four, String question_name, String subject_id, String exam_id) {
		super();
		this.id = id;
		this.exam_level = exam_level;
		this.question_answer = question_answer;
		this.option_one = option_one;
		this.option_two = option_two;
		this.option_three = option_three;
		this.option_four = option_four;
		this.question_name = question_name;
		this.subject_id = subject_id;
		this.exam_id = exam_id;
	}
	

}
