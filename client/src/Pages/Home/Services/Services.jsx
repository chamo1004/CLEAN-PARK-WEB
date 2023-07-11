import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import bodywash from "../../../img/bodywash~1.jpg";
import checkup from "../../../img/checkup~1.jpg";
import repair from "../../../img/repair~1.jpg";
import paintworks from "../../../img/paintworks.jpg";
import cleanup from "../../../img/cleanup.jpg";
import axios from "axios";

const serviceData = [
  {
    title: "Body Wash",
    description: "Choose from full service or normal service options.",
    backgroundImg: bodywash,
  },
  {
    title: "Check-Up",
    description:
      "We offer comprehensive check-ups for your engine, gearbox, and battery.",
    backgroundImg: checkup,
  },
  {
    title: "Repairing",
    description:
      "Our experts can handle engine repairs, gearbox repairs, oil changes, and battery replacements.",
    backgroundImg: repair,
  },
  {
    title: "Paintworks",
    description:
      "Our experts can handle engine repairs, gearbox repairs, oil changes, and battery replacements.",
    backgroundImg: paintworks,
  },
  {
    title: "Interior Clean-Up",
    description:
      "Our experts can handle engine repairs, gearbox repairs, oil changes, and battery replacements.",
    backgroundImg: cleanup,
  },
];

const Services = ({ ourServicesRef, offersRef }) => {
  const [listOfSerTab, setListOfSerTab] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/serTab")
      .then((response) => {
        setListOfSerTab(response.data);
      })
      .catch((error) => {
        console.log("Error fetching serTab data:", error);
      });
  }, []);

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.94))`,
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
              paddingBottom: "6rem",
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
          {serviceData.map((service, index) => (
            <Grid item xs={12} sm={4} key={index} sx={{ textAlign: "center" }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                backgroundImg={service.backgroundImg}
              />
            </Grid>
          ))}
          {listOfSerTab.map((course, index) => (
            <Grid item xs={12} sm={4} key={index} sx={{ textAlign: "center" }}>
              <ServiceCard
                title={course.title}
                description={course.description}
                backgroundImg={course.backgroundImg}
              />
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
          >
            <IconButton onClick={handleOffersClick}>
              <KeyboardArrowDownIcon
                sx={{ fontSize: "4rem", padding: "0.5rem", color: "white" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Services;
