import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import bodywash from "../../../img/bodywash~1.jpg";
import checkup from "../../../img/checkup~1.jpg";
import repair from "../../../img/repair~1.jpg";
import paintworks from "../../../img/paintworks.jpg";
import cleanup from "../../../img/cleanup.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const serviceData = [
  {
    backgroundImg: checkup,
  },
  {
    backgroundImg: bodywash,
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
    // Here, you can use the serviceId or any other information you need to pass to the "/booknow" page.
    // For now, let's simply navigate to the "/booknow" page.
    navigate("/booknow");
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
                onClick={() => handleBoxClick(servicetab.serviceid)}
                sx={{ cursor: "pointer" }}
              >
                <ServiceCard
                  servicetype={servicetab.servicetype}
                  description={servicetab.description}
                  backgroundImg={serviceData[index].backgroundImg}
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
