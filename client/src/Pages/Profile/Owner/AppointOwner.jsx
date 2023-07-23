import React, { useState, useEffect } from "react";
import axios from "axios";
import "./appointowner.css"; // Import the CSS file for styling

const AppointOwner = () => {
  const [AppointOwner, setAppointOwner] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get("http://localhost:3001/appointment/confirmed-appointments")
      .then((response) => {
        setAppointOwner(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="confirmed-appointments">
      <h2>Confirmed Appointments</h2>
      <ul>
        {AppointOwner.map((appointment) => (
          <li className="appointment-li" key={appointment.appointmentid}>
            <span>{appointment.title}</span>
            <span>{appointment.date}</span>
            <span>{appointment.time}</span>
            <span className="vehicle-number">
              Vehicle No: {appointment.vehicleNumber}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointOwner;
