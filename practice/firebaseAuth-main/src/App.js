import React from 'react'
import Navigation from './components/Navigation'
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App