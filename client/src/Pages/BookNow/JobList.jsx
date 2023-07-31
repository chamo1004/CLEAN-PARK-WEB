import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./joblist.css";

const JobList = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/service")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setServices([]);
      });
  }, []);

  return (
    <div className="job-list1">
      <h1>Unleash Top-Notch Auto Services!</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : services.length > 0 ? (
        <>
          <div className="service-cards1">
            {services.map((service) => (
              <div className="service-card1" key={service.serviceid}>
                <h2>{service.servicetype}</h2>

                <div className="jobs1">
                  {service.Jobs && service.Jobs.length > 0 ? (
                    service.Jobs.map((job) => (
                      <div className="job-card1" key={job.jobid}>
                        <div className="job-card1-content1">
                          <p>{job.title}</p>
                          <p>Rs. {job.price}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="notice">No jobs found.</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="notice">These prices can be changed.</div>

          <div className="button-container">
            <Button
              variant="contained"
              component={RouterLink}
              to="/login"
              sx={{
                backgroundColor: "red",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#888",
                  alignItems: "center",
                },
              }}
            >
              Make an appointment
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="notice">No services found.</div>
        </>
      )}

      {/* Conditionally render the "Book now" button and the notice */}
      {/* {services.length > 0 && (
        <>
          
        </>
      )} */}
    </div>
  );
};

export default JobList;
