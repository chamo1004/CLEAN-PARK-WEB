import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import bannerWelcome from "../../img/banner02.jpg";

const Welcome = ({ ourServicesRef }) => {
  const handleLearnMoreClick = () => {
    ourServicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bannerWelcome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "calc(100vh - 90px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h1" sx={{ color: "white" }}>
                Revitalize Your Ride with Expert Care
              </Typography>
              <Typography variant="h5" component="h2" sx={{ color: "#888" }}>
                Effortless Appointments, Seamless Service Updates
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                component={RouterLink}
                to="/aboutus"
                sx={{
                  backgroundColor: "red",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#888",
                    alignItems: "center",
                  },
                }}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
