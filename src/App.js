import logo from './logo.svg';
import './App.css';
import Base from './Base/Base';
import StudentDetails from './components/Students';
import Dashboard from './components/Dashboard';
import Authpage from './components/Authpage';
import { Redirect, Route, Switch } from 'react-router-dom';
import StudentList from './components/StudentList';
import { useState } from 'react';
import {data} from './Data/data'
import Home from './components/Home';
import Addstudents from './components/Addstudents';
import { EditStudents } from './components/EditStudents';
function App() {
  const[StudentsData,setStudents]=useState(data)
  return (
   
    <div className="App">
    <Switch>
      <Route exact path="/">
<Home/> 
      </Route>
      <Route path="/dashboard">
<Dashboard/>
      </Route>
      <Route path="/login">
<Authpage/>
      </Route>
      <Route path="/students">
        <StudentDetails StudentsData={StudentsData}
         setStudents={setStudents}/>
        </Route>
       <Route path="/profile/:id">
          <StudentList StudentsData={StudentsData}/> 

        </Route> 
        <Route path='/adddata'>
<Addstudents StudentsData={StudentsData}
         setStudents={setStudents}/>
         </Route>
       
         <Route path="/edit/:id">
          <EditStudents StudentsData={StudentsData} setStudents={setStudents}/> 
          </Route> 
         
     
      <Route path="/dashboard">
        <Redirect to="/"/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
{/* <Base
title="GUVI STUDENT DATABASE"
description="All students details"
      >
       <StudentDetails/>
       <Dashboard/>
       <Authpage/>
</Base> */}