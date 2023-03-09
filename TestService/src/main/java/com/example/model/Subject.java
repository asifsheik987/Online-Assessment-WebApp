package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "quiz_subject")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Subject {
    
	  @Id
	  @GeneratedValue(strategy = GenerationType.SEQUENCE)
	  private int id;
	  
	  @Column(name="subject_name",nullable = false)
	  private String name;
	  	  
	  
}
