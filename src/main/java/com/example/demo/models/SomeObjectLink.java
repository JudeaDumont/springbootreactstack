package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "SomeObject")
public class SomeObjectLink implements Serializable {

    @Id
    @Column(name = "ID", unique = true, nullable = false)
    private Long id;

    @Column(name = "LINKFROM", nullable = false)
    private Long linkFrom;

    @Column(name = "LINKTO", nullable = false)
    private Long linkTo;

    public SomeObjectLink() {
    }

    public Long getId() {
        return id;
    }

    public Long getLinkFrom() {
        return linkFrom;
    }

    public Long getLinkTo() {
        return linkTo;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLinkFrom(Long linkFrom) {
        this.linkFrom = linkFrom;
    }

    public void setLinkTo(Long linkTo) {
        this.linkTo = linkTo;
    }

    @Override
    public String toString() {
        return "SomeObjectLink{" +
                "id=" + id +
                ", linkFrom=" + linkFrom +
                ", linkTo=" + linkTo +
                '}';
    }
}
