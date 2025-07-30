import { useState } from "react";
import { addStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [student, setStudent] = useState({ name: "", email: "",branch:"",percentage:"" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-center mb-2">Add Student</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={student.branch}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="number"
        name="percentage"
        placeholder="Percentage"
        value={student.percentage}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
