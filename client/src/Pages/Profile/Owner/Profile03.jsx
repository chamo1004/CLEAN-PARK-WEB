// Profile02.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile03.css";
import YourInfo from "../YourInfo";
import AppointOwner from "./AppointOwner";
import ServiceOwner from "./ServiceOwner";
import DailyIncome from "./DailyIncome";

export default function Profile02() {
  const [activeTab, setActiveTab] = useState("yourinfo");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "yourinfo":
        return <YourInfo />;
      case "appointment":
        return <AppointOwner appointments={appointmentsData} />;
      case "services":
        return <ServiceOwner />;
      case "income":
        return <DailyIncome />;
      default:
        return null;
    }
  };

  // Assuming you have your appointments data in an array called "appointmentsData"
  // You can replace "appointmentsData" with your actual data source
  const appointmentsData = [
    { id: 1, name: "John Doe", date: "2023-07-25" },
    { id: 2, name: "Jane Smith", date: "2023-07-27" },
    // Add more appointment data here
  ];

  return (
    <div className={`yourinfo `}>
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
                  <h1 style={{ marginTop: "-0.5vh" }}>Dulan Chathuranga</h1>
                  <h2>dulan.chr@gmail.com</h2>
                </div>
              </a>
            </li>
            {/* Add other menu items on the left side here */}
            <li>
              <a
                href="#"
                className={`dash-nav-item ${
                  activeTab === "appointment" ? "active" : ""
                }`}
                onClick={() => handleTabClick("appointment")}
              >
                Appointments
              </a>
            </li>

            {/* Add other menu items on the left side here */}
            <li>
              <a
                href="#"
                className={`dash-nav-item ${
                  activeTab === "services" ? "active" : ""
                }`}
                onClick={() => handleTabClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`dash-nav-item ${
                  activeTab === "income" ? "active" : ""
                }`}
                onClick={() => handleTabClick("income")}
              >
                Income
              </a>
            </li>
          </ul>
          <div className="profile-buttons">
            <button component={Link} to="/signup" variant="contained">
              Log Out
            </button>
          </div>
        </div>
        <div className="dash-content">{renderContent()}</div>
      </div>
    </div>
  );
}
