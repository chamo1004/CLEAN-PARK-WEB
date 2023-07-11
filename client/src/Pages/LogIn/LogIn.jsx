import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer03 from "../../Components/Footer03";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <LoginForm />
      <Box>
        <Footer03 />
      </Box>
    </>
  );
}
