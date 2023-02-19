import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
export default function Dashboard() {
  const history=useHistory()
  return (
   <Base
   title="welcome To guvi"
   description="Please Click The Below Button To Navigate To Home" 
   >
    <Button variant='outlined' color='primary' size='large' onClick={()=>history.push("/")}>click me</Button>
   </Base>
  )
}
