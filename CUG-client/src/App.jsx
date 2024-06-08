/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from "./Components/Navbar/Nav"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Outlet/>
    </>
  )
}

export default App