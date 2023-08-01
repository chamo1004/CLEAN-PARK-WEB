import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:3001/appointment");
      const sortedAppointments = response.data.sort((a, b) => {
        const dateA = new Date(a.date + " " + a.time);
        const dateB = new Date(b.date + " " + b.time);
        return dateA - dateB;
      });
      setAppointments(sortedAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleConfirm = (appointmentid) => {
    // Implement your confirm appointment logic here
    console.log(`Confirm appointment with ID ${appointmentid}`);
  };

  const handleIgnore = (appointmentId) => {
    // Implement your ignore appointment logic here
    console.log(`Ignore appointment with ID ${appointmentid}`);
  };

  return (
    <div className="table-container">
      <h2>Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Service Type</th>
            <th>Car Number</th>
            <th>Confirm</th>
            <th>Ignore</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.appointmentid}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.servicetype}</td>
              <td>{appointment.Car?.number}</td> {/* Use optional chaining */}
              <td>
                <button
                  onClick={() => handleConfirm(appointment.appointmentid)}
                >
                  Confirm
                </button>
              </td>
              <td>
                <button onClick={() => handleIgnore(appointment.appointmentid)}>
                  Ignore
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
