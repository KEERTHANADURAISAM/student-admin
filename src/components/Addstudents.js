import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

const Addstudents = ({ StudentsData, setStudents }) => {
  const history = useHistory();
  const [id, setstudentId] = useState("");
  const [name, setstudentName] = useState("");
  const [ph_no, setstudentPhno] = useState("");
  const [g_mail, setstudentGmail] = useState("");
  const [gender, setstudentGender] = useState("");
  const [course, setstudentCourse] = useState("");
  const [fee, setstudentFees] = useState("");
  const [image, setstudentImage] = useState("");
  const addNewStudent = () => {
    const newStudent = {
      id,
      name,
      ph_no,
      g_mail,
      image,
      gender,
      course,
      fee,
    };
    setStudents([...StudentsData, newStudent]);
    setstudentId("");
    setstudentName("");
    setstudentPhno("");
    setstudentGmail("");
    setstudentGender("");
    setstudentImage("");
    setstudentCourse("");
    setstudentFees("");
    history.push("/students");
  };
  return (
    <Base title="Addstudents" description="add">
      <div className="input-section">
        <h1>Batch Details</h1>
        <h3>All Student Details</h3>
        <TextField
          fullWidth
          label="Enter the Id"
          id="fullWidth"
          onChange={(event) => setstudentId(event.target.value)}
          value={id}
        />
        <TextField
          fullWidth
          label="Enter the Name"
          id="fullWidth"
          onChange={(event) => setstudentName(event.target.value)}
          value={name}
        />
        <TextField
          fullWidth
          label="Enter Your Contact No"
          id="fullWidth"
          onChange={(event) => setstudentPhno(event.target.value)}
          value={ph_no}
        />
        <TextField
          fullWidth
          label="Upload your Image Url"
          id="fullWidth"
          onChange={(event) => setstudentImage(event.target.value)}
          value={image}
        />
        <TextField
          fullWidth
          label="Enter Your Gmail "
          id="fullWidth"
          onChange={(event) => setstudentGmail(event.target.value)}
          value={g_mail}
        />
        <TextField
          fullWidth
          label="Enter the gender"
          id="fullWidth"
          onChange={(event) => setstudentGender(event.target.value)}
          value={gender}
        />
        <TextField
          fullWidth
          label="Enter the Course"
          id="fullWidth"
          onChange={(event) => setstudentCourse(event.target.value)}
          value={course}
        />
        <TextField
          fullWidth
          label="Enter the Fees$"
          id="fullWidth"
          onChange={(event) => setstudentFees(event.target.value)}
          value={fee}
        />
      </div>

      <button className="add-data-btn" onClick={addNewStudent}>
        Add Data
      </button>
    </Base>
  );
};

export default Addstudents;
