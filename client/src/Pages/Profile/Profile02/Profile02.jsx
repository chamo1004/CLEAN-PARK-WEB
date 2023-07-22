import React, { useState } from "react";
import "./profile02.css";

const FeedMessage = ({ message }) => (
  <div className="dash-content">
    <h2>Welcome to the Feed!</h2>
    <p>{message}</p>
  </div>
);

export default function Profile02() {
  const [activeTab, setActiveTab] = useState("yourinfo");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "yourinfo":
        return <YourInfo />;
      case "cardetails":
        return <CarDetails />;
      case "services":
        return <Services />;
      case "appointments":
        return <MakeAppointments />;
      case "feed":
        return <FeedMessage message="This is feed" />;
      default:
        return null;
    }
  };

  return (
    <div className="yourinfo">
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
                  activeTab === "feed" ? "active" : ""
                }`}
                onClick={() => handleTabClick("feed")}
              >
                Feed
              </a>
            </li>
          </ul>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
