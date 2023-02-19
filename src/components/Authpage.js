import { Button, FormControl, FormLabel, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { authdata } from '../Data/authdata'

export default function Authpage() {
  const [auth,setAuth]=useState(authdata)
  const [loginName,setLoginName]=useState("")
  const [password,setPassword] = useState("")
  const[error,setError] = useState(false)
  const history=useHistory()
  console.log(auth)

  const LoginUser=()=>{
if(loginName=== auth[0].name && password=== auth[0].password){
  localStorage.setItem("user-name",loginName)
  setError(false)
  history.push('/students')
}
  else{
    console.log("wrong password")
    setError(true)
  }
}
  

  return (
    <Base
    title="Please Login or SignUp"
    description='username:admin - pwd :admin123'
        >
<div className='login-page'>
  <main>
  
    <FormControl>
      
      <FormLabel>Email</FormLabel>
      <Input
      name="email"
      type='email'
      placeholder='john@gmail.com'
      onChange={(e)=>setLoginName(e.target.value)}
      value={loginName}
      />
       </FormControl>{""}
       <FormControl>
      <FormLabel>Password</FormLabel>
      <Input
      name="password"
      type='Password'
      placeholder='Password'
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
      />
      </FormControl>
<Button
sx={{mt:1}} 
onClick={LoginUser}
>
  Log in</Button>
  {error?
  <Typography>
    Invalid credentials
  </Typography>
 :""}
  </main>
 

</div>
     
    </Base>
  )
  }
