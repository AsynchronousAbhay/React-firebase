import Firestore from "./Firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import app from "./firebase/firebase";
import { async } from "@firebase/util";


function App() {
  const storage = getStorage(app);

  const createStorage = async (e) => {
    // console.log(e.target.files[0]);
    try {
      const file = e.target.files[0];
      const storageRef = ref(storage, file.name);
      await uploadBytes(storageRef, file);
      // const downloadURL = await getDownloadURL(ref(storage, file.name));
      const downloadURL = await getDownloadURL(storageRef);
      console.log(downloadURL);
    } catch (err) {
      console.log(err);
    }
  };

  const readAllmultimedia = async () => {
    const listRef = ref(storage, "");
    // console.log(listRef);

    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log(folderRef);
        });
        res.items.forEach((itemRef) => {
          console.log(itemRef);
        });
      }).catch((error) => {
        console.log(error);
      });
  };

  const deletemultimedia = async () => {
    try {
      const storageRef = ref(storage, '144565.jpg');
      await deleteObject(storageRef)
      console.log("image deleted!");
    } catch (err) {
      console.log(err);
    }
  };

  const updateStorage = async () => {

  }



  return (
    <div className="App">
      <Firestore />
      <hr />
      <h1>Multimedias</h1>
      <hr />
      <input type="file" onChange={createStorage} />
      <hr />
      <button onClick={readAllmultimedia}>Read All Multimedia</button>
      <button onClick={deletemultimedia}>delete Multimedia</button>
      <button className="btn btn-warning ms-2" onClick={updateStorage}>
        Update Multimedia
      </button>
    </div>
  );
}

export default App;
