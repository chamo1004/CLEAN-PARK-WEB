import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile01.css";
import { Link } from "react-router-dom";
import CarDetails from "./CarDetails";
import YourInfo from "../YourInfo";

const Services = () => (
  <div>
    <h2>Welcome to the Services!</h2>
    <p>This is the Feed content.</p>
  </div>
);

const MakeAppointments = () => (
  <div>
    <h2>Welcome to the MakeAppointments!</h2>
    <p>This is the Feed content.</p>
  </div>
);

export default function Profile01() {
  // Existing state
  const [activeTab, setActiveTab] = useState("yourinfo");
  const [showForm, setShowForm] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [errors, setErrors] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchAppointments();
    fetchCarData();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:3001/appointment");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const fetchCarData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/car");
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = async () => {
    // Validate the form before submitting
    const newErrors = {};

    if (!vehicleNumber.trim()) {
      newErrors.vehicleNumber = "Vehicle number is required";
    }

    if (!vehicleModel.trim()) {
      newErrors.vehicleModel = "Vehicle model is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Create the car object to be sent to the server
      const newCar = {
        model: vehicleModel,
        number: vehicleNumber,
      };

      // Send the data to the server
      const response = await axios.post("http://localhost:3001/car", newCar);

      // Optionally, you can handle the response from the server if needed
      console.log("Car created successfully:", response.data);

      // Clear the form and close it after successful submission
      setVehicleNumber("");
      setVehicleModel("");
      setVehicleColor("");
      setShowForm(false);
      setErrors({});
      // Fetch updated car data to reflect the newly added car
      fetchCarData();
    } catch (error) {
      console.error("Error creating car:", error);
      // Handle any error that occurred during the API call here
    }
  };

  const renderCarTabs = () => {
    return carData.map((car) => (
      <li key={car.id}>
        <a
          href="#"
          className={`dash-nav-item ${
            activeTab === car.number ? "active" : ""
          }`}
          onClick={() => handleTabClick(car.number)}
        >
          {car.number}
        </a>
      </li>
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "yourinfo":
        return <YourInfo />;
      default:
        const selectedCar = carData.find((car) => car.number === activeTab);
        return (
          <CarDetails
            car={selectedCar}
            appointments={appointments}
            fetchAppointments={fetchAppointments}
          />
        );
      case "services":
        return <Services />;
      case "appointments":
        return <MakeAppointments />;
    }
  };

  return (
    <div className={`yourinfo ${showForm ? "form-open" : ""}`}>
      <div className="dash-container">
        <div className="dash-sidebar">
          <ul className="dash-nav">
            <li>
              <a
                href="#"
                className={`dash-nav-item name ${
                  activeTab === "yourinfo" ? "active" : ""
                }`}
                onClick={() => handleTabClick("yourinfo")}
              >
                <div className="dash-name">
                  <h1 style={{ marginTop: "-0.5vh" }}>Dulan Chathuranga</h1>
                  <h2>dulan.chr@gmail.com</h2>
                </div>
              </a>
            </li>
            <div className="dash-name">
              <h2 style={{ fontWeight: "bold" }}>Your Vehicles</h2>
            </div>
            {renderCarTabs()}
            <li>
              <button onClick={() => setShowForm(true)}>+</button>
            </li>
          </ul>
          <div className="dash-logo">
            <div className="profile-buttons">
              <button component={Link} to="/signup" variant="contained">
                Log Out
              </button>
            </div>
          </div>
        </div>
        <div className="dash-content">{renderContent()}</div>
      </div>

      {showForm && (
        <div className="popup-form">
          <div className="popup-form-content">
            <div className="profile-field">
              <label>Vehicle Number</label>
              <input
                type="text"
                name="vehicleNumber"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
              />
              {errors.vehicleNumber && (
                <div className="error">{errors.vehicleNumber}</div>
              )}
              <label>Vehicle Model</label>
              <input
                type="text"
                name="vehicleModel"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
              />
              {errors.vehicleModel && (
                <div className="error">{errors.vehicleModel}</div>
              )}
              <label>Vehicle Color</label>
              <input
                type="text"
                name="vehicleColor"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <button onClick={handleFormSubmit}>Submit</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
