import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../Components/NavBar";
import JobList from "./JobList";
import Footer03 from "../../Components/Footer03";

export default function BookNow() {
  return (
    <>
      <Box>
        <NavBar />
      </Box>

      <JobList />

      <Footer03 />
    </>
  );
}
