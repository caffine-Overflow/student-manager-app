import React, { useState, useEffect } from "react";

const StudentForm = ({ onAddStudent, studentToEdit, onUpdateStudent }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMobile, setEnteredMobile] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  useEffect(() => {
    if (studentToEdit) {
      setEnteredName(studentToEdit.name);
      setEnteredMobile(studentToEdit.mobile);
      setEnteredAddress(studentToEdit.address);
    }
  }, [studentToEdit]);

  const nameChangeHandler = (event) => setEnteredName(event.target.value);
  const mobileChangeHandler = (event) => setEnteredMobile(event.target.value);
  const addressChangeHandler = (event) => setEnteredAddress(event.target.value);

  const addStudentHandler = (event) => {
    event.preventDefault();
    if (studentToEdit) {
      onUpdateStudent({
        ...studentToEdit,
        name: enteredName,
        mobile: enteredMobile,
        address: enteredAddress,
      });
    } else {
      const studentData = {
        name: enteredName,
        mobile: enteredMobile,
        address: enteredAddress,
      };
      onAddStudent(studentData);
    }
    setEnteredName("");
    setEnteredMobile("");
    setEnteredAddress("");
  };

  return (
    <form onSubmit={addStudentHandler}>
      <div style={{ marginBottom: "5px" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>

      <div style={{ marginBottom: "5px" }}>
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          value={enteredMobile}
          onChange={mobileChangeHandler}
        />
      </div>

      <div style={{ marginBottom: "5px" }}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={enteredAddress}
          onChange={addressChangeHandler}
        />
      </div>

      <button type="submit">{studentToEdit ? "Update" : "Add"}</button>
    </form>
  );
};

export default StudentForm;
