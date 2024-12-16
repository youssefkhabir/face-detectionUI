import React, { useState } from "react";
import "./AddUser.css"; // Optional for custom styles

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !age || !image) {
      alert("Please fill all fields!");
      return;
    }

    console.log("User Added:", {
      firstName,
      lastName,
      age,
      imageName: image.name,
    });

    alert("User added successfully!");
  };

  return (
    <div className="adduser-page">
    <div className="adduser-container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div></div>
  );
};

export default AddUser;
