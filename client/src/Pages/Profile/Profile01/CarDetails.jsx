// AppointmentsTab.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentCard from "./AppointmentCard"; // Import the AppointmentCard component
import "./cardetails.css";

export default function AppointmentsTab() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    confirmation: false,
    serviceType: "",
  });

  const [errors, setErrors] = useState({});
  const [serviceTypes, setServiceTypes] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchServiceTypes();
    fetchAppointments();
  }, []);

  const fetchServiceTypes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/service");
      setServiceTypes(response.data);
    } catch (error) {
      console.error("Error fetching service types:", error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:3001/appointment");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};

    // Validate title (not only numbers)
    if ((formData.title && !formData.title) || /^\d+$/.test(formData.title)) {
      errors.title = "Can't enter only numbers";
    }

    // Validate date
    if (!formData.date) {
      errors.date = "Date is required";
    }

    // Validate time
    if (!formData.time) {
      errors.time = "Time is required";
    }

    // Validate confirmation (checkbox)
    if (!formData.confirmation) {
      errors.confirmation = "Confirmation is required";
    }

    // Validate serviceType (dropdown)
    if (!formData.serviceType) {
      errors.serviceType = "Service Type is required";
    }

    // If there are validation errors, set the errors state
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const appointmentData = {
      title: formData.title,
      date: formData.date,
      time: formData.time,
      confirmation: formData.confirmation,
      serviceType: formData.serviceType,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    };

    try {
      const response = await fetch(
        "http://localhost:3001/appointment",
        requestOptions
      );
      const data = await response.json();

      console.log("Data successfully submitted:", data);
      // Reset the form after submission if needed
      setFormData({
        title: "",
        date: "",
        time: "",
        confirmation: false,
        serviceType: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="carcontorls">
      <h2 style={{ marginTop: "0vh", fontSize: "1rem", color: "#232323" }}>
        Add Appointments:
      </h2>
      <div className="newappointment">
        <form className="addc-form" onSubmit={handleSubmit}>
          <div className="addc-form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Optional"
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
          <div className="addc-form-group">
            <label htmlFor="title">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>
          <div className="addc-form-group">
            <label htmlFor="title">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            {errors.time && <p className="error">{errors.time}</p>}
          </div>

          <div className="addc-form-group">
            <label htmlFor="serviceType">Service:</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select Service Type</option>
              {serviceTypes.map((serviceType) => (
                <option
                  key={serviceType.serviceid}
                  value={serviceType.serviceid}
                >
                  {serviceType.servicetype}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="error">{errors.serviceType}</p>
            )}
          </div>

          <div className="addc-form-group">
            <label>
              <input
                type="checkbox"
                name="confirmation"
                checked={formData.confirmation}
                onChange={handleChange}
                required
              />
              Confirmation
            </label>
            {errors.confirmation && (
              <p className="error">{errors.confirmation}</p>
            )}
          </div>

          <div className="addc-form-group">
            <button type="submit" className="addc-btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <h2
        style={{
          marginTop: "2vh",
          fontSize: "1rem",
          color: "#232323",
          opacity: "0.5",
        }}
      >
        My appointments
      </h2>
      <div className="appointmentlist">
        {/* Render the AppointmentCard components with the fetched data */}
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.appointmentid}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
            serviceType={appointment.serviceType}
          />
        ))}
      </div>
    </div>
  );
}
