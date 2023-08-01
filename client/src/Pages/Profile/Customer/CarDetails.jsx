import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cardetails.css";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function CarDetails({ car, appointments, fetchAppointments }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    confirmation: false,
    servicetype: "",
  });

  const [errors, setErrors] = useState({});
  const [serviceTypes, setServiceTypes] = useState([]);

  useEffect(() => {
    fetchServiceTypes();
  }, []);

  const fetchServiceTypes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/service");
      setServiceTypes(response.data);
    } catch (error) {
      console.error("Error fetching service types:", error);
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
      errors.title = "Title can't only contain numbers";
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
    if (!formData.servicetype) {
      errors.servicetype = "Service Type is required";
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
      servicetype: formData.servicetype,
      carid: car.carid,
    };
    console.log("appointmentdata ", appointmentData);
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
        servicetype: "",
      });
      setErrors({});
      // Fetch updated appointments after submission
      fetchAppointments();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Function to sort appointments in ascending order by date and time
  const sortAppointmentsByDateTime = (appointments) => {
    return appointments.slice().sort((a, b) => {
      const dateA = new Date(a.date + " " + a.time);
      const dateB = new Date(b.date + " " + b.time);
      return dateA - dateB;
    });
  };

  return (
    <div className="carcontorls">
      {car && (
        <div className="card2">
          <div className="card2-title">
            <h1>{car.model}</h1>
          </div>
          <div className="card2-subtitle">
            <h2>{car.number}</h2>
          </div>
          <div className="bell-icon">
            <NotificationsIcon fontSize="large" color="action" />
          </div>
        </div>
      )}
      <div className="appointmentss">
        <h2
          style={{
            marginTop: "1.5vh",
            marginBottom: "3vh",
            fontSize: "1.6rem",
            fontWeight: "400",
            marginLeft: "0vh",
            color: "#232323",
          }}
        >
          Add Appointments
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
                value={formData.servicetype}
                onChange={handleChange}
                required
              >
                <option value="">Select Service Type</option>
                {serviceTypes.map((servicetype) => (
                  <option
                    key={servicetype.serviceid}
                    value={servicetype.serviceid}
                  >
                    {servicetype.servicetype}
                  </option>
                ))}
              </select>
              {errors.servicetype && (
                <p className="error">{errors.servicetype}</p>
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
                Submit
              </button>
            </div>
          </form>
        </div>
        <h2
          style={{
            marginTop: "0vh",
            marginBottom: "3vh",
            fontSize: "2rem",
            fontWeight: "400",
            color: "#232323",
            opacity: "0.5",
          }}
        >
          My appointments
        </h2>
        <div className="appointmentlist">
          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            sortAppointmentsByDateTime(appointments).map((appointment) => (
              <div key={appointment.id} className="appintmenttab">
                <div className="appoint-date">{appointment.date}</div>
                <div className="appoint-time">
                  <>at </>
                  {appointment.time}
                </div>
                <div className="appoint-service">
                  {/* Display the service type */}
                  {appointment.services && appointment.services.length > 0 ? (
                    appointment.services.map((service) => (
                      <div key={service.id}>{appointment.servicetype}</div>
                    ))
                  ) : (
                    <div>Service data not available</div>
                  )}
                </div>
                {/* Display confirmation status */}
                {appointment.status ? (
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      backgroundColor: "green",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      marginTop: "15px",
                    }}
                  >
                    Confirmed
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      backgroundColor: "red",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      marginTop: "15px",
                    }}
                  >
                    Confirmation pending
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
