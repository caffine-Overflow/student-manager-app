import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const addStudentHandler = (studentData) => {
    setStudents((prevStudents) => [...prevStudents, studentData]);
  };

  const updateStudentHandler = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.name === updatedStudent.name ? updatedStudent : student
      )
    );
    setStudentToEdit(null); // Reset after update
  };

  const deleteStudentHandler = (index) => {
    setStudents((prevStudents) =>
      prevStudents.filter((_, idx) => idx !== index)
    );
  };

  const editStudentHandler = (student) => {
    setStudentToEdit(student);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Student Management</h2>
      {/* Display total number of students */}
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <strong>Total Number of Students: {students.length}</strong>
      </div>

      <StudentForm
        onAddStudent={addStudentHandler}
        studentToEdit={studentToEdit}
        onUpdateStudent={updateStudentHandler}
      />
      <StudentList
        students={students}
        onDeleteStudent={deleteStudentHandler}
        onEditStudent={editStudentHandler}
      />
    </div>
  );
};

export default App;
