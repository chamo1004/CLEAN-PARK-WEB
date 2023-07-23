import React, { useState } from "react";
import "./yourinfo.css";

const YourInfo = () => {
  // Sample initial data
  const initialData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone1: "123-456-7890",
    phone2: "987-654-3210",
    address: "1234 Elm Street, City, State, Zip",
    password: "********", // You can use a masked password field here
  };

  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can perform API calls or save the data to a backend here
    // For demonstration purposes, we'll simply update the state
    // with the current data (simulating data save).
    initialData = { ...data };
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-details">
        <div className="profile-field">
          <label>Name</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{data.name}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Email</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{data.email}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Phone 1</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="tel"
              name="phone1"
              value={data.phone1}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{data.phone1}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Phone 2</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="tel"
              name="phone2"
              value={data.phone2}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{data.phone2}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Address</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="text"
              name="address"
              value={data.address}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{data.address}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Password</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="password"
              name="password"
              value={data.password}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{data.password}</p>
          )}
        </div>
      </div>
      <div className="profile-buttons">
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default YourInfo;
