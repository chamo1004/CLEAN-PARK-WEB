import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import AboutUs from "./AboutUs";

export default function Aboutmain() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <AboutUs />
      <Box>
        <Footer />
      </Box>
    </>
  );
}
