package com.example.model;

import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.model.Subject;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "quiz_exam")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Exam {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@Column(name="exam_name")
	private String examName;

	@ManyToOne
	private Subject subject;

	@Column(name = "exam_desc")
	private String desc;

	@Column(name = "exam_date")
	private String date;
	
	@ManyToOne
	private User user;


}
