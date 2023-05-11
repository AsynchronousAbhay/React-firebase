import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../utility/Configuration";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Signup = () => {
    const Navigate = useNavigate(); 
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");

    const onsignuphandler = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                Email,
                Password
            );
            const docRef = await addDoc(collection(db, "users"), {
                Email,
                Username,
            });
            Navigate('/profile/' + docRef.id);
            // console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <form
                className='w-50 mt-5 d-flex justify-content-center align-items-start flex-column' onSubmit={onsignuphandler}
            >
                <h2 className='mb-4'>Singup User.</h2>
                <input
                    className='form-control mb-4'
                    type="text"
                    placeholder='username'
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <button className='mb-4 btn btn-success'>Signup</button>
                <Link className='text-dark text-decoration-none' to='/Signin'>
                    Already Have an account? Signin.
                </Link>
            </form>
        </div>
    )
}

export default Signup