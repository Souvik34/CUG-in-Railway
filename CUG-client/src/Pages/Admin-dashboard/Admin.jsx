import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      Admin Home 
      <Outlet/>
    </div>
  )
}

export default Admin
