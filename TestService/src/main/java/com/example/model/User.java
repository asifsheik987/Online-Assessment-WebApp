package com.example.model;


import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(	name = "quiz_users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	@Id
    private Long id;

    private String username;
    private String email;


}
