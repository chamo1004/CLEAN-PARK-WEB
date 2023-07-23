import React, { useState, useEffect } from "react";
import axios from "axios";
import "./serviceowner.css"; // Import the CSS file for styling

const ServiceOwner = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get("http://localhost:3001/job")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="service-list">
      <h2>Service List</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.carid}>
              <td>{service.title}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceOwner;
