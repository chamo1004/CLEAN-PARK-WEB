import React, { useState, useEffect } from "react";
import "./notification-manager.css";

const BASE_API_URL = "YOUR_BACKEND_API_URL"; // Replace with your backend API URL

const Notificationmanager = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    // Fetch car data from your backend API
    fetch(BASE_API_URL + "/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleSendNotification = () => {
    // Send notification for the selected car (You need to implement this function)
    if (selectedCar) {
      // Replace the following line with your notification sending logic
      console.log(`Sending notification for car: ${selectedCar.name}`);
    } else {
      console.log("No car selected.");
    }
  };

  return (
    <div className="app">
      <div className="car-list">
        <h2>Car List</h2>
        <ul>
          {cars.map((car) => (
            <li key={car.id} onClick={() => handleCarClick(car)}>
              {car.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-car">
        {selectedCar ? (
          <>
            <h2>Selected Car</h2>
            <p>{selectedCar.name}</p>
            <button onClick={handleSendNotification}>Send Notification</button>
          </>
        ) : (
          <p>No car selected.</p>
        )}
      </div>
    </div>
  );
};

export default Notificationmanager;
