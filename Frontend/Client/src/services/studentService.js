import axios from "axios";

const BASE_URL = "http://localhost:8080";

// Fetch all students
export const getStudents = () => axios.get(`${BASE_URL}/students`);

// Fetch single student by ID
export const getStudent = (id) => {
  if (!id || id === "undefined") {
    console.error("❌ getStudent called with invalid ID:", id);
    return Promise.reject(new Error("Invalid student ID"));
  }
  return axios.get(`${BASE_URL}/students/${id}`);
};

// Add new student
export const addStudent = (data) =>
  axios.post(`${BASE_URL}/students/add`, data);

// Update student by ID
export const updateStudent = (id, data) => {
  if (!id || id === "undefined") {
    console.error("❌ updateStudent called with invalid ID:", id);
    return Promise.reject(new Error("Invalid student ID"));
  }
  return axios.put(`${BASE_URL}/students/update/${id}`, data);
};

// Delete student by ID
export const deleteStudent = (id) => {
  if (!id || id === "undefined") {
    console.error("❌ deleteStudent called with invalid ID:", id);
    return Promise.reject(new Error("Invalid student ID"));
  }
  return axios.delete(`${BASE_URL}/students/delete/${id}`);
};
