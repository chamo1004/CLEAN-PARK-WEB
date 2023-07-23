import React, { useEffect, useState } from "react";
import "./appointmentlist.css"; // Import the CSS file for styling

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:3001/appointment")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleConfirm = (appointmentId) => {
    // Handle confirm logic here, e.g., update appointment status in the backend
    console.log(`Confirmed appointment with ID: ${appointmentId}`);
  };

  const handleIgnore = (appointmentId) => {
    // Handle ignore logic here, e.g., remove appointment from the list or mark as ignored
    console.log(`Ignored appointment with ID: ${appointmentId}`);
  };

  // Sort appointments by date in ascending order
  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="appointment-list">
      <h2>Appointment List</h2>
      <div className="appointment-cards">
        {sortedAppointments.map((appointment) => (
          <div className="appointment-card" key={appointment.id}>
            <h3>{appointment.title}</h3>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Service Type: {appointment.servicetype}</p>
            <p>Car Number: {appointment.carnumber}</p>
            <div className="appointment-actions">
              <button
                className="confirm-button"
                onClick={() => handleConfirm(appointment.id)}
              >
                Confirm
              </button>
              <button onClick={() => handleIgnore(appointment.id)}>
                Ignore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
