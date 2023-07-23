import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./joblist.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch job data from the backend
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/job");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  // Function to add a new job to the frontend
  const addNewJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  // Simulate adding a new job
  const handleAddJob = () => {
    const newJob = {
      id: Date.now(),
      title: "New Job",
      price: 500,
    };

    addNewJob(newJob);
  };

  return (
    <div className="job-list">
      <h1>Job List</h1>
      <div className="job-container">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <h2>{job.title}</h2>
            <p>Price: ${job.price}</p>
          </div>
        ))}
      </div>
      <div className="job-button">
        <Link to="/login">
          <button>BOOK NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default JobList;
