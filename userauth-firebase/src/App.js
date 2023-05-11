import React, { useEffect, useState } from 'react'
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import { Route, Routes } from "react-router-dom";
import Signup from './components/signup/Signup';
import { auth } from './firebase';

const App = () => {
  const [userName, setuserName] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setuserName(user.displayName)
      } else {
        setuserName("");
      }
      console.log(user);
    })
  }, [])


  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home name={userName} />} />
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/signup' exact element={<Signup />} />
      </Routes>

    </div>
  )
}

export default App