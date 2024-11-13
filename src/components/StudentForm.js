import React from "react";
const StudentForm = () => {
  const addStudentHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addStudentHandler}>
      <div style={{ marginBottom: "5px" }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>

      <div style={{ marginBottom: "5px" }}>
        <label htmlFor="mobile">Mobile:</label>
        <input type="number" id="mobile" />
      </div>

      <div style={{ marginBottom: "5px" }}>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
export default StudentForm;
