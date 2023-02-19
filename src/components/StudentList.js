
import React from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base'
 

export default function StudentList({StudentsData}) {
//    console.log(StudentsData)
const {id}=useParams();
console.log(id)
 const student=StudentsData[id]
//  console.log(student)
  return (
    <Base
title="Student Profile"
description="Individual Student Details"
    >
        <div>
       
            
            <h2>Student Name:{student.name}</h2>
            <img src={student.image}></img>
            <p><b>Contact Number:{student.ph_no}</b></p>
            <p><b>Gmail:{student.g_mail}</b></p>
            <p><b>Gender:{student.gender}</b></p>
            <p><b>Course:{student.course}</b></p>
            <p><b>Fee:{student.fee}</b></p>
        </div>
    
    </Base>
  )
}
