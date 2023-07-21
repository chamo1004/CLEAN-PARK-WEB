import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [carData, setCarData] = useState(null); // New state variable for car details

  useEffect(() => {
    fetchServiceTypes();
    fetchAppointments();
    fetchVehicleDetails();
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
      const response = await axios.get("http://localhost:3001/appointment", {
        params: { include: "services" },
      });
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const fetchVehicleDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3001/car");
      if (response.data && response.data.length > 0) {
        // Assuming you have only one car record in the database
        setCarData(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching car data:", error);
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
      <div className="card2">
        <div className="card2-title">
          <h1>The, Plad 02 {vehicleModel}</h1>
        </div>

        <div className="card2-subtitle">
          <h2>BX-3422{vehicleNumber}</h2>
        </div>
      </div>

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
            appointments.map((appointment) => (
              <div key={appointment.id} className="appintmenttab">
                <div className="appoint-date">{appointment.date}</div>
                <div className="appoint-time">
                  <>@</>
                  {appointment.time}
                  <div className="appoint-service">
                    {/* Display the service type */}
                    {appointment.services && appointment.services.length > 0
                      ? appointment.services
                          .map((service) => service.servicetype)
                          .join(", ")
                      : "Service data not available"}
                  </div>
                </div>
                {/* Display confirmation status */}
                {appointment.confirmation ? (
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
