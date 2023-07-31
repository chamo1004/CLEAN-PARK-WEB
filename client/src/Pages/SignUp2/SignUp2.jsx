import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer03 from "../../Components/Footer03";
import SignupForm2 from "./SignupForm2";

export default function SignIn() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <SignupForm2 />
      <Box>
        <Footer03 />
      </Box>
    </>
  );
}
