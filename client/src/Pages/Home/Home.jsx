import React, { useRef } from "react";
import NavBar from "../../Components/NavBar";
import Welcome from "./Welcome";
import Services from "./Services/Services";
import About from "./About";
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
      <Box
        sx={{ background: "linear-gradient(to bottom, black, #000, black)" }}
      >
        <Services />
      </Box>
      <Grid item xs={12} sm={12}>
        <About />
      </Grid>

      <Footer />
    </Box>
  );
}
