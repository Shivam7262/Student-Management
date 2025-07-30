import { useEffect, useState } from "react";
import { getStudent, updateStudent } from "../services/studentService";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ FIXED: All fields have default (controlled) values
  const [student, setStudent] = useState({
    name: "",
    email: "",
    branch: "",
    percentage: ""
  });

  useEffect(() => {
    if (!id || id === "undefined") {
      console.error("🚨 Invalid or missing ID in URL");
      alert("Invalid student ID. Redirecting to home.");
      navigate("/");
      return;
    }

    getStudent(id)
      .then((res) => {
        const data = res.data;

        // ✅ Ensure no field is undefined/null (still controlled)
        setStudent({
          name: data.name || "",
          email: data.email || "",
          branch: data.branch || "",
          percentage: data.percentage?.toString() || ""
        });
      })
      .catch((err) => {
        console.error("🚫 Failed to fetch student:", err.message || err);
        alert("Unable to load student data.");
        navigate("/");
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Updating student with data:", student);
      await updateStudent(id, {
        ...student,
        percentage: parseFloat(student.percentage) // ✅ Ensure correct type
      });

      alert("✅ Student updated successfully!");
      navigate("/");
      window.location.reload(); // to refresh list data
    } catch (err) {
      console.error("❌ Update failed:", err.message || err);
      alert("Failed to update student. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-center mb-2">Edit Student</h2>

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

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
}
