import React, { useState } from "react";
import "./profile01.css";
import logocore from "../../../img/logo192.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CarDetails from "./CarDetails";
const YourInfo = () => (
  <div>
    <h2>Welcome to the YourInfo!</h2>
    <p>This is the Feed content.</p>
  </div>
);

const Services = () => (
  <div>
    <h2>Welcome to the Services!</h2>
    <p>This is the Feed content.</p>
  </div>
);

const MakeAppointments = () => (
  <div>
    <h2>Welcome to the MakeAppointments!</h2>
    <p>This is the Feed content.</p>
  </div>
);

export default function Profile01() {
  const [activeTab, setActiveTab] = useState("feed");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "feed":
        return <YourInfo />;
      case "assignments":
        return <CarDetails />;
      case "courses":
        return <Services />;
      case "students":
        return <MakeAppointments />;
      default:
        return null;
    }
  };

  return (
    <div className="feed">
      <div className="dash-container">
        <div className="dash-sidebar">
          <ul className="dash-nav">
            <li>
              <a
                href="#"
                className={`dash-nav-item name ${
                  activeTab === "feed" ? "active" : ""
                }`}
                onClick={() => handleTabClick("feed")}
              >
                <div className="dash-name">
                  <h1 style={{ marginTop: "-0.5vh" }}>Dulan Chathuranga</h1>
                  <h2>dulan.chr@gmail.com</h2>
                </div>
              </a>
            </li>
            <div className="dash-name">
              {/* <img
              src={logocore}
              width={40}
              alt="logocore"
              style={{ marginLeft: ".5vw" }}
            /> */}

              <h2 style={{ fontWeight: "bold" }}>Your Vehicles</h2>
            </div>
            <li>
              <a
                href="#"
                className={`dash-nav-item ${
                  activeTab === "assignments" ? "active" : ""
                }`}
                onClick={() => handleTabClick("assignments")}
              >
                CarName
              </a>
            </li>
          </ul>
          <div className="dash-logo">
            <img src={logocore} width={40} alt="logocore" />
            <Button
              component={Link}
              to="/auth/sign-up"
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "",
                marginTop: -3.5,
                marginLeft: 3,
              }}
            >
              Log Out
            </Button>
          </div>
        </div>
        <div className="dash-content">{renderContent()}</div>
      </div>
    </div>
  );
}
