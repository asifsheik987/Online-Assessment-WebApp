package com.example.entity;

import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.entity.Subject;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "quiz_exam")
public class Exam {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	
	private String examName;

	@ManyToOne
	private Subject subject;

	@Column(name = "exam_desc")
	private String desc;

	@Column(name = "exam_date")
	private String date;
	
	@ManyToOne
	private User user;

//	@Column(name = "exam_marks")
//	private String marks;

//	@Column(name = "exam_totalQuestion")
//	private String totalQuestion;

//	@Column(name = "exam_passMarks")
//	private String passMarks;

//	@Column(name = "exam_level")
//	private String level;

//	 @OneToMany(mappedBy="ename")
//	 private List<Question> question;
	
	

	public int getId() {
		return id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getExamName() {
		return examName;
	}

	public void setExamName(String examName) {
		this.examName = examName;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
//
//	public String getMarks() {
//		return marks;
//	}
//
//	public void setMarks(String marks) {
//		this.marks = marks;
//	}

//	public String getTotalQuestion() {
//		return totalQuestion;
//	}
//
//	public void setTotalQuestion(String totalQuestion) {
//		this.totalQuestion = totalQuestion;
//	}

//	public String getPassMarks() {
//		return passMarks;
//	}
//
//	public void setPassMarks(String passMarks) {
//		this.passMarks = passMarks;
//	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	
	public Exam(int id, String examName, Subject subject, String desc, String date, User user) {
		super();
		this.id = id;
		this.examName = examName;
		this.subject = subject;
		this.desc = desc;
		this.date = date;
		this.user = user;
	}

	public Exam() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Exam [id=" + id + ", examName=" + examName + ", subject=" + subject + ", desc=" + desc + ", date="
				+ date + "]";
	}
	
	
	

//	public String getLevel() {
//		return level;
//	}
//
//	public void setLevel(String level) {
//		this.level = level;
//	}

}
