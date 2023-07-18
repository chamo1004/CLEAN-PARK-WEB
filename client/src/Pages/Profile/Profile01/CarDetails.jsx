import React, { useState } from "react";
import "./cardetails.css";

export default function CoursesTab() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    confirmation: false,
  });

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

    const appointmentData = {
      title: formData.title,
      date: formData.date,
      time: formData.time,
      confirmation: formData.confirmation,
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
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="carcontorls">
      <h2 style={{ marginTop: "0vh", fontSize: "1rem", color: "#232323" }}>
        Add Appointments :
      </h2>
      <div className="newappointment">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <label>
            <input
              type="checkbox"
              name="confirmation"
              checked={formData.confirmation}
              onChange={handleChange}
            />
            Confirmation
          </label>
          <button type="submit">Submit</button>
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

      <div className="myappointments"></div>

      <div className="myappointments"></div>

      <div className="myappointments"></div>

      <div className="myappointments"></div>

      <div className="myappointments"></div>
    </div>
  );
}
