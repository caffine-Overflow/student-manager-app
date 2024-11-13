import React from "react";

const StudentList = ({ students, onDeleteStudent, onEditStudent }) => {
  return (
    <div>
      <h3>Student List:</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>{student.name}</strong> - {student.mobile} -{" "}
            {student.address}
            <button onClick={() => onEditStudent(student)}>Edit</button>
            <button onClick={() => onDeleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
