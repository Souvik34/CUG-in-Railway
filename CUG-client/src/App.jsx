/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Nav from "./components/Navbar/Nav"

function App() {
  const [count, setCount] = useState(0)

  return (
     <Nav/>
  )
}

export default App