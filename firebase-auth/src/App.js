import React from 'react'
import Navigation from './components/Navigation'
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Profile from './components/Profile';
import ProfileNav from './components/ProfileNav';

const App = () => {
  return (
    <div>
      {Profile ? <ProfileNav /> : <Navigation />}
      {Home ? <Navigation /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Profile/:id' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App