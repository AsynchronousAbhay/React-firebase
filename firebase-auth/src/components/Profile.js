import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getFirestore, getDoc } from "firebase/firestore";
import app from '../utility/Configuration';


const Profile = () => {
    const { id } = useParams();
    const db = getFirestore(app);
    const [users, setusers] = useState(null);

    const getData = async () => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        console.log("Document data:", docSnap.data());
        setusers(docSnap.data());
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='p-5'>
            <div className='container d-flex align-items-center'>
                <div
                    style={{
                        height: '10vmax',
                        width: '10vmax',
                        marginRight: "3vmax",
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        backgroundImage: "URL('https://images.unsplash.com/photo-1677093598645-3a34acad5b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                </div>
                <div className='ms-5'>
                    <h2 className='text-capitalize'>{users && users.Username}</h2>
                    <h4 className='text-capitalize'>{users && users.Email}</h4>
                </div>
            </div>

        </div>
    )
}

export default Profile