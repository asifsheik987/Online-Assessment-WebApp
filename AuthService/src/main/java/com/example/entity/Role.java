package com.example.entity;
import javax.persistence.*;

@Entity
@Table(name = "quiz_roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private Role_Type name;

    public Role() {

    }

    public Role(Role_Type name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Role_Type getName() {
        return name;
    }

    public void setName(Role_Type name) {
        this.name = name;
    }

	@Override
	public String toString() {
		return "Role [id=" + id + ", name=" + name + "]";
	}
    

}
