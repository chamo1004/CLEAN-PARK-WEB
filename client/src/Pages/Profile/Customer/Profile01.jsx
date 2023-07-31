import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile01.css";
import { Link } from "react-router-dom";
import CarDetails from "./CarDetails";
import YourInfo from "../YourInfo";

export default function Profile01() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("cus1id:", id);

  const [activeTab, setActiveTab] = useState("yourinfo");
  const [showForm, setShowForm] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [errors, setErrors] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [carData, setCarData] = useState([]);
  const [customerData, setCustomerData] = useState({
    firstname: "",
    lastname: "",
    email: "", // Add email property here
    userid: "",
  });

  useEffect(() => {
    fetchAppointments();
    fetchCarData();
    fetchCustomerData();
  }, [id]);

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

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/getcusdata/${id}`
      );
      const data = response.data;
      if (data && data.userid) {
        setCustomerData({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email, // Fetch and include the email property
          userid: data.userid,
        });
      }
      console.log("cus1ssid:", firstname);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = async () => {
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
      const newCar = {
        model: vehicleModel,
        number: vehicleNumber,
      };

      const response = await axios.post("http://localhost:3001/car", newCar);

      console.log("Car created successfully:", response.data);

      setVehicleNumber("");
      setVehicleModel("");
      setVehicleColor("");
      setShowForm(false);
      setErrors({});

      fetchCarData();
    } catch (error) {
      console.error("Error creating car:", error);
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
      // Add cases for other tabs: "services" and "appointments" if needed
      // case "services":
      //   return <Services />;
      // case "appointments":
      //   return <MakeAppointments />;
    }
  };

  if (!id) {
    return <div>Loading...</div>; // or display a message or redirect
  }

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
                  <div className="nameq">
                    <h1 style={{ marginTop: "-0.5vh" }}>
                      {customerData.firstname}
                    </h1>
                    <h1 style={{ marginTop: "-0.5vh" }}>
                      {customerData.lastname}
                    </h1>
                  </div>

                  <h2>{customerData.email}</h2>
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
              <button
                component={Link}
                to="/signup"
                variant="contained"
                onClick={() => navigate("/signup")}
              >
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
