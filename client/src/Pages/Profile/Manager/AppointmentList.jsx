import React, { useEffect, useState } from "react";
import "./appointmentlist.css";
import Calendar from "./Calendar";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

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

  // Filter appointments by the selected day
  const filteredAppointments = selectedDay
    ? appointments.filter((appointment) => appointment.date === selectedDay)
    : appointments;

  // Sort appointments by time in ascending order
  const sortedAppointments = [...filteredAppointments].sort(
    (a, b) => new Date(a.time) - new Date(b.time)
  );

  return (
    <div className="appointment-list">
      <h2>Appointment List</h2>
      {/* Add the appointment calendar */}
      <div className="App">
        <Calendar />
      </div>
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
