import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer02 from "../../Components/Footer02";
import AboutUs from "./AboutUs";

export default function Contact() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <AboutUs />
      <Box>
        <Footer02 />
      </Box>
    </>
  );
}
