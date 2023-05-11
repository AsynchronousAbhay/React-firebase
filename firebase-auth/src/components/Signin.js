import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../utility/Configuration";
import { getFirestore, collection, addDoc, getDoc, doc } from "firebase/firestore";


const Signin = () => {
  const Navigate = useNavigate();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");

  const onSigninHanlder = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, Email, Password);
      // console.log(user);

      // const docRef = doc(db, "users", user.user.Email);
      // const docSnap = await getDoc(docRef);
      // console.log(docSnap.data());

    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <form className='w-50 mt-5 d-flex justify-content-center align-items-start flex-column' onSubmit={onSigninHanlder}>
        <h2 className='mb-4'>Singin User.</h2>
        {Message ? <p className='text-danger'>{Message}</p> : ""}
        <input
          className='form-control mb-4'
          type="text"
          placeholder='@gmail...'
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='form-control mb-4'
          type="password"
          placeholder='******'
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='mb-4 btn btn-success'>Signin</button>
        <Link className='text-dark text-decoration-none' to='/Signup'>
          Doesn't have an account ? Signup.
        </Link>
      </form>
    </div>
  )
}

export default Signin