package com.example.demo.models;
import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "SomeObject")
public class SomeObject implements Serializable {

    @Id
    @Column(name = "ID", unique = true, nullable = false)
    private Long id;

    @Column(name = "NAME", length = 100)
    private String name;

    public SomeObject() {
    }

    public SomeObject(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "SomeObject{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
