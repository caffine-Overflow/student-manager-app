import React, { useState } from "react";

const StudentForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMobile, setEnteredMobile] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mobileChangeHandler = (event) => {
    setEnteredMobile(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const addStudentHandler = (event) => {
    event.preventDefault();
    console.log(`${enteredName}-${enteredMobile}-${enteredAddress}`);

    // Reset the form fields
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

      <button type="submit">Add</button>
    </form>
  );
};

export default StudentForm;
