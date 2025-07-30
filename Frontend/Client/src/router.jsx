import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}
