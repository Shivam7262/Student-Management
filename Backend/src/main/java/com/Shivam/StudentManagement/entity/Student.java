package com.Shivam.StudentManagement.entity;

import jakarta.persistence.*;

@Entity
@Table (name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int rollNo;
    @Column
    private  String name;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column
    private String email;
    @Column
    private  float percentage;
    @Column
    private  String branch;

    public  Student(){

    }

    public Student(int rollNo,  String name,String email, float percentage, String branch) {
        this.rollNo =rollNo;
        this.name = name;
        this.email = email;
        this.percentage = percentage;
        this.branch = branch;
    }

    public float getPercentage() {
        return percentage;
    }

    public void setPercentage(float percentage) {
        this.percentage = percentage;
    }

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    @Override
    public String toString() {
        return "Student{" +
                "rollNo=" + rollNo +
                ", name='" + name + '\'' +
                ",email='" + email + '\''+
                ", percentage=" + percentage +
                ", branch='" + branch + '\'' +
                '}';
    }





}
