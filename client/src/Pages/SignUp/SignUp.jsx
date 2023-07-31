import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer03 from "../../Components/Footer03";
import SignupForm from "./SignupForm";

export default function SignIn() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <SignupForm />
      <Box>
        <Footer03 />
      </Box>
    </>
  );
}
