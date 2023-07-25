import { useContext, useState } from "react";
import "./newUser.scss";
import { UsersContext } from "../../context/userContext/UserContext";
import storage from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Upload } from "@mui/icons-material";
import { createUser } from "../../context/userContext/UserApiCalls";

function NewUser() {
  const [user, setUser] = useState({ profilePic: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", isAdmin: false });
  const [img, setImg] = useState("");

  const [progress, setProgress] = useState(0);
  const { dispatch } = useContext(UsersContext);
  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: img, label: "profilePic" }]);
  };
  const upload = (items) => {
    items.forEach((item) => {
      if (item.file != null) {
        const fileName = new Date().getTime() + item.label + item.file.name;
        const storageRef = ref(storage, `/items/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, item.file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            setProgress(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            switch (snapshot.state) {
              case "paused":
                console.log("paused...");
                break;
              case "running":
                console.log("uploading...");
                break;
              case "success":
                console.log("uploaded");
                break;
            }
          },
          (error) => {
            switch (error.code) {
              case "storage/unauthorized":
                console.log("not authorized ");
                break;
              case "storage/canceled":
                console.log("cancelled");
                break;
              case "storage/unknown":
                console.log("unknown storage");
                break;
            }
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setUser((prev) => {
                return { ...prev, [item.label]: url };
              });
            });
          }
        );
      }
    });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
    setProgress(0);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input name="username" type="text" placeholder="john" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input name="email" type="email" placeholder="john12@gmail.com" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input name="password" type="password" placeholder="password" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>profile picture</label>
          <div>

          <input
            type="file"
            id="profilePic"
            onChange={(e) => setImg(e.target.files[0])}
            />
        <span onClick={handleUpload}>
          <Upload /> {progress.toFixed(0) + "%"}
        </span>
            </div>
        </div>
        <div className="newUserItem">
          <label>Is Admin?</label>
          <select
            className="newUserSelect"
            name="isAdmin"
            onChange={handleChange}
          >
            <option value={"false"}>No</option>
            <option value={"true"}>Yes</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default NewUser;
