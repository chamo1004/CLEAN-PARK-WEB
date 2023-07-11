import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer03 from "../../Components/Footer03";
import Appointment from "../BookNow/Appointments";

export default function Home() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{
          backgroundColor: "black",
          
        }}><Appointment /></Box>
      
      <Box>
        <Footer03 />
      </Box>
    </>
  );
}
