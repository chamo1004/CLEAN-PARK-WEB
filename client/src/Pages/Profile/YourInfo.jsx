import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./yourinfo.css";

const YourInfo01 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("cus1id:", id);

  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCustomerData();
  }, [id]);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/getcusdata/${id}`
      );
      const customerData = response.data;
      if (data && data.userid) {
        setCustomerData({
          name: `${customerData.firstname} ${customerData.lastname}`,
          email: customerData.email,
          phone: customerData.backuptel,
          address: customerData.address,
          password: customerData.password,
        });
      }
      console.log("cus1ssid:", firstname);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      // Perform API call to update the customer data on the backend
      await axios.put(`http://localhost:3001/customer/${id}`, {
        email: customerData.email,
        backuptel: customerData.phone,
        address: customerData.address,
        password: customerData.password,
      });
      // Optionally, you can handle the response from the server if needed

      // For demonstration purposes, we'll display a success message
      console.log("Customer data updated successfully!");
    } catch (error) {
      console.error("Error updating customer data:", error);
      // Handle any error that occurred during the API call here
    }
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
              value={customerData.name}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{customerData.name}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Email</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="email"
              name="email"
              value={customerData.email}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{customerData.email}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Phone</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="tel"
              name="phone"
              value={customerData.phone}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{customerData.phone}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Address</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="text"
              name="address"
              value={customerData.address}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">{customerData.address}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Password</label>
          {isEditing ? (
            <input
              className="profile-input"
              type="password"
              name="password"
              value={customerData.password}
              onChange={handleInputChange}
            />
          ) : (
            <p className="input-p">********</p>
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

export default YourInfo01;
