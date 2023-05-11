import React from 'react'
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import app from './firebase/firebase'

const Firestore = () => {
    const db = getFirestore(app);

    const addFirestore = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const readAllFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.id);
            console.log(doc.data());
        });
    }

    const updateFirestore = async () => {
        try {
            const usersRef = collection(db, "users");
            await setDoc(doc(usersRef, "EgoXepztWm9MvmDqcnxs"), {
                name: "San Francisco", state: "CA", country: "USA",
                capital: false, population: 860000,
                regions: ["west_coast", "norcal"]
            });
            console.log("User data updated");
        } catch (error) {
            console.log(error);
        }
    }

    const deletefirestore = async () => {
        try {
            const usersRef = collection(db, "users");
            const ref = doc(usersRef, "EgoXepztWm9MvmDqcnxs");
            await deleteDoc(ref);
            // await deleteDoc(doc(db, "users", "EgoXepztWm9MvmDqcnxs"));
            console.log("data deleted!");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button onClick={addFirestore}>addFirestore</button>
            <button onClick={readAllFirestore}>readAllFirestore</button>
            <button onClick={updateFirestore}>updateFirestore</button>
            <button onClick={deletefirestore}>deletefirestore</button>
        </div>
    )
}

export default Firestore