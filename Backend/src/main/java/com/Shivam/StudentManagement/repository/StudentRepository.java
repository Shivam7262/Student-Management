package com.Shivam.StudentManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Shivam.StudentManagement.entity.Student;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
