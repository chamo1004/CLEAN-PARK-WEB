import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer03 from "../../Components/Footer03";
import OTP from "./OTP";

export default function Verification() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>

      <OTP />

      <Box>
        <Footer03 />
      </Box>
    </>
  );
}
