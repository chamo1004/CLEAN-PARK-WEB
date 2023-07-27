import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import bodywash from "../../../img/bodywash~1.jpg";
import checkup from "../../../img/checkup~1.jpg";
import repair from "../../../img/repair~1.jpg";
import paintworks from "../../../img/paintworks.jpg";
import cleanup from "../../../img/cleanup.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const serviceData = [
  {
    backgroundImg: bodywash,
  },
  {
    backgroundImg: checkup,
  },
  {
    backgroundImg: repair,
  },
  {
    backgroundImg: paintworks,
  },
  {
    backgroundImg: cleanup,
  },
];

const Services = ({ ourServicesRef, offersRef }) => {
  let navigate = useNavigate();
  const [listOfSerTab, setListOfSerTab] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/service") // Fetch data from the backend
      .then((response) => {
        setListOfSerTab(response.data);
      })
      .catch((error) => {
        console.log("Error fetching service data:", error);
      });
  }, []);

  const handleBoxClick = (serviceId) => {
    navigate(`/servicecardcontent/${serviceId}`);
  };

  const handleOffersClick = () => {
    offersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box
        ref={ourServicesRef}
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          paddingLeft: "3.5rem",
          cursor: "pointer", // Add cursor style to indicate clickability
        }}
        // Move onClick function to the Box component
      >
        <Grid container spacing={0} p={0}>
          <Grid
            item
            xs={12}
            sm={12}
            p={2}
            sx={{
              paddingRight: "4.5rem",
              paddingBottom: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="h2">
              Why Choose Us?
            </Typography>
            <Typography variant="h3" component="h2">
              Discover the Difference
            </Typography>
          </Grid>

          {listOfSerTab.map((servicetab, index) => (
            <Grid item xs={12} sm={4} key={index} sx={{ textAlign: "center" }}>
              <Box
                onClick={() => handleBoxClick(servicetab.serviceid)} // Pass the correct Id to the handleBoxClick function
                sx={{ cursor: "pointer" }}
              >
                <ServiceCard
                  servicetype={servicetab.servicetype}
                  description={servicetab.description}
                  backgroundImg={serviceData[index].backgroundImg} // Use the hard-coded image based on the index
                />
              </Box>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            sm={12}
            p={0}
            sx={{
              paddingRight: "4.5rem",
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Services;
