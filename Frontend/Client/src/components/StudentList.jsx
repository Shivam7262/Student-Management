import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const loadStudents = async () => {
    try {
      const res = await getStudents();
      console.log("✅ Students loaded:", res.data);
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("❌ Failed to load students:", err.message || err);
    }
  };

  const handleDelete = async (rollNo) => {
    if (!rollNo) {
      alert("Invalid student roll number for deletion.");
      return;
    }

    try {
      await deleteStudent(rollNo);
      loadStudents(); // refresh
    } catch (err) {
      console.error("❌ Failed to delete student:", err.message || err);
      alert("Delete failed.");
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const validStudents = students.filter((stu) => stu?.rollNo);

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-4 text-purple-700 text-center">
        🎓 Student Management System
      </h1> */}

      <button
        onClick={() => navigate("/add")}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4 flex items-center gap-2"
      >
        ➕ Add Student
      </button>

      {validStudents.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No students found.</p>
      ) : (
        <table className="w-full border border-gray-300 shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Branch</th>
              <th className="p-2 border">Percentage</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {validStudents.map((stu) => (
              <tr key={stu.rollNo} className="text-center">
                <td className="p-2 border">{stu.rollNo}</td>
                <td className="p-2 border">{stu.name}</td>
                <td className="p-2 border">{stu.email}</td>
                <td className="p-2 border">{stu.branch}</td>
                <td className="p-2 border">{stu.percentage}</td>
                <td className="p-2 border space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => navigate(`/edit/${stu.rollNo}`)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(stu.rollNo)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
