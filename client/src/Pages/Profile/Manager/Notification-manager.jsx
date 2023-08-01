import React, { useState, useEffect } from "react";
import axios from "axios";
import "./notification-manager.css";

const NotificationManager = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [jobStatus, setJobStatus] = useState("jobStarted");
  const [otherReason, setOtherReason] = useState("");

  useEffect(() => {
    // Fetch the car list from the API endpoint when the component mounts
    axios
      .get("http://localhost:3001/car")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching car list:", error);
      });
  }, []);

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setJobStatus("jobStarted");
    setOtherReason("");
  };

  const handleJobStatusChange = (event) => {
    setJobStatus(event.target.value);
  };

  const handleOtherReasonChange = (event) => {
    setOtherReason(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selectedCar, jobStatus, and otherReason (if applicable)
    console.log("Car:", selectedCar);
    console.log("Job Status:", jobStatus);
    if (jobStatus === "other") {
      console.log("Other Reason:", otherReason);
    }
  };

  const handleCancel = () => {
    setSelectedCar(null);
    setJobStatus("jobStarted");
    setOtherReason("");
  };

  return (
    <div className="car-list">
      <h1>Registered Vehicles</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.carid} onClick={() => handleCarClick(car)}>
            {car.number}
          </li>
        ))}
      </ul>

      {selectedCar && (
        <form onSubmit={handleSubmit} className="vehicle-form">
          <h2>Vehicle Number: {selectedCar.number}</h2>
          <div>
            <label>Notification:</label>
            <select value={jobStatus} onChange={handleJobStatusChange}>
              <option value="jobStarted">Job has been started</option>
              <option value="jobDone">Job done</option>
              <option value="other">Other</option>
            </select>
          </div>

          {jobStatus === "other" && (
            <div>
              <label>Other Reason:</label>
              <input
                type="text"
                value={otherReason}
                onChange={handleOtherReasonChange}
              />
            </div>
          )}

          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button
              type="button"
              style={{
                border: "2px solid red",
                backgroundColor: "transparent",
                color: "red",
                marginBottom: "20px",
              }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NotificationManager;
