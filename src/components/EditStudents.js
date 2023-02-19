import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base'


export const EditStudents = ({ StudentsData, setStudents }) => {
 const history=useHistory();
  const {id}=useParams();
 const [editid, setEditId] = useState("");
 const [idx, setstudentIdx] = useState("");
 const [name, setstudentName] = useState("");
 const student=StudentsData[id]
 const [ph_no, setstudentPhno] = useState("");
 const [g_mail, setstudentGmail] = useState("");
 const [gender, setstudentGender] = useState("");
 const [course, setstudentCourse] = useState("");
 const [fee, setstudentFees] = useState("");
 const[image, setstudentImage] = useState("");
   //  initial things and mounting happening
 
 useEffect(()=>{
    setEditId(student.id)
    setstudentIdx(student.id);
    setstudentName(student.name);
    setstudentPhno(student.ph_no);
    setstudentGmail(student.g_mail);
    setstudentGender(student.gender);
    setstudentImage(student.image);
    setstudentCourse(student.course);
    setstudentFees(student.fees);
 },[]);
 
 
 const updateStudentdata = () => {
    // select and find our students
    const editStudentIndex = StudentsData.findIndex(
      (stud) => stud.id === editid
    );

    // we need the update
    const updatedObj = {
      id,
      name,
      ph_no,
      g_mail,
      gender,
      image,
      course,
      fee,
   
    };

    // change the updated object in the specific array of data
    StudentsData[editStudentIndex] = updatedObj;
    setStudents([...StudentsData]);
    // set the student data
    setstudentIdx("");
    setstudentName("");
    setstudentPhno("");
    setstudentGmail("");
    setstudentGender("");
    setstudentImage("");
    setstudentCourse("");
    setstudentFees("");
    history.push('/students')
   
  };
 
 return (
        <Base
        title="Addstudents"
        description="edit"
        >
        <div className="input-section">
                  <h1>Batch Details</h1>
                  <h3>All Student Details</h3>
                  <TextField
                    fullWidth
                    label="Enter the Id"
                    id="fullWidth"
                    onChange={(event) => setstudentIdx(event.target.value)}
                    value={idx}
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
                   <TextField fullWidth label="Upload your Image Url" id="fullWidth" 
                    onChange={(event) => setstudentImage(event.target.value)}
                    value={image}/> 
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
                                                      
                  <button className="add-data-btn" onClick={updateStudentdata}>
                Update Data
              </button> 
                     
                      </div>
                      
                      
        </Base>
  )
}
