import React, { useRef } from "react";
import NavBar from "../../Components/NavBar";
import Welcome from "./Welcome";
import Services from "./Services/Services";
import { Offers } from "./Offers";
import Footer from "../../Components/Footer";
import { Box, Grid } from "@mui/material";

export default function Home() {
  const offersRef = useRef(null);

  const handleOffersClick = () => {
    offersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <NavBar />

      <Welcome />

      <Services ourServicesRef={offersRef} offersRef={offersRef} />
      <Grid item xs={12} sm={12}>
        <Offers />
      </Grid>

      <Footer />
    </Box>
  );
}
