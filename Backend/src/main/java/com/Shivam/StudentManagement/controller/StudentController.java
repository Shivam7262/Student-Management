package com.Shivam.StudentManagement.controller;

import com.Shivam.StudentManagement.entity.Student;
import com.Shivam.StudentManagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {
    //Get all the students
    @Autowired
    StudentRepository repo;


    @GetMapping("/")
    public String show(){
        return  "Hii";
    }

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return repo.findAll();
    }

  //Find student with id
    @GetMapping("/students/{id}")
    public  Student getStudent(@PathVariable int id){
        return repo.findById(id).orElse(null);
    }

    //For Add new student

    @PostMapping("/students/add")
    public  void createStudent(@RequestBody  Student student){
        repo.save(student);
    }

    //For update
//@PutMapping("/students/update/{id}")
//public Student updateStudents(@PathVariable int id, @RequestBody Student updatedStudent) {
//    Student student = repo.findById(id).orElse(null);
//
//    if (student != null) {
//        student.setName("Abhinav");
//        student.setPercentage(88);
//        return repo.save(student);
//    } else {
//        return null; // Or you can throw a custom exception later if you want
//    }
//}
    @PutMapping("/students/update/{id}")
    public Student updateStudents(@PathVariable int id, @RequestBody Student updatedStudent) {
        System.out.println("🔄 Update request for ID: " + id);
        System.out.println("📦 Incoming data: " + updatedStudent);

        Student student = repo.findById(id).orElse(null);
        if (student != null) {
            student.setName(updatedStudent.getName());
            student.setEmail(updatedStudent.getEmail());
            student.setBranch(updatedStudent.getBranch());
            student.setPercentage(updatedStudent.getPercentage());
            return repo.save(student);
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }



//For Delete the student

    @DeleteMapping("/students/delete/{id}")
    public void  removeStudent(@PathVariable int id){
        repo.findById(id).ifPresent(student -> repo.delete(student));

    }


}
