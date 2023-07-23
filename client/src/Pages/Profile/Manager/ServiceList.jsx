import React, { useState, useEffect } from "react";
import "./servicelist.css";

const ServiceList = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch jobs data from the backend API
  useEffect(() => {
    fetch("http://localhost:3001/job")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if the price is a valid positive number
    if (!/^\d+(\.\d+)?$/.test(price) || parseFloat(price) <= 0) {
      setErrorMessage("Please enter a valid price.");
      return;
    }

    const jobData = {
      title: title,
      price: parseFloat(price), // Convert price to a floating-point number
    };

    // Make a POST request to add the job
    fetch("http://localhost:3001/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((response) => response.json())
      .then((data) => {
        setJobs([...jobs, data]); // Add the new job to the existing job list
        setShowForm(false);
        setTitle("");
        setPrice("");
        setSuccessMessage("Job added successfully!");
        setErrorMessage("");

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        setErrorMessage("Failed to add the job. Please try again.");
        setSuccessMessage("");
      });
  };

  const handleCancel = () => {
    setShowForm(false);
    setTitle("");
    setPrice("");
    setErrorMessage("");
  };

  return (
    <div className="job-list">
      <h2>Service List</h2>
      {!showForm && <button onClick={() => setShowForm(true)}>+</button>}
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price (Rs):</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="job-cards">
        {jobs.map((job) => (
          <div className="job-card" key={job.jobid}>
            <h3>{job.title}</h3>
            <p>{job.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
