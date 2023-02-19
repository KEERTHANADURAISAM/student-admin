import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

export default function StudentDetails({ StudentsData, setStudents }) {
  const history = useHistory();
  useEffect(()=>{
if(!localStorage.getItem("user-name"))
history.replace("/login")

  },[])
  // del student data
  const removeData = (studId) => {
    const selectedStudent = StudentsData.filter((stud) => stud.id !== studId);
    setStudents(selectedStudent);
  };

  return (
    <Base title=" Batch Details" description="All student Details">
      <div className="container">
        <div className="card-container">
          {StudentsData.map((stud, id) => (
            <Card sx={{ maxWidth: 345 }} key={id} className="card">
              <CardMedia
                component="img"
                alt="my img"
                height="300"
                image={stud.image}
              />
              <CardContent sx={{ color: "black" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Name:{stud.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <b>Phone No:{stud.ph_no}</b>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <b>G-mail:{stud.g_mail}</b>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <b>Gender:{stud.gender}</b>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <b>Course:{stud.course}</b>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <b>Fee:{stud.fee}</b>
                </Typography>
              </CardContent>
              <div className="add-btn">
                <Button
                  variant="outlined"
                  onClick={() => history.push(`/edit/${id}`)}
                >
                  Edit
                </Button>

                <Button variant="outlined" onClick={() => removeData(stud.id)}>
                  Delete
                </Button>
                <Button onClick={() => history.push(`/profile/${id}`)}>
                  View Student
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Base>
  );
}
