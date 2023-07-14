import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function About() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={5} elevation={6} mb={10} mr={60} p={4}>
        <Box
          sx={{
            position: "relative",
            alignItems: "center",
          }}
        >
          
          <Box
            sx={{
              width: "60em",
              height: "25em",
              padding: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.074)",
              border: "1px solid rgba(255, 255, 255, 0.222)",
              backdropFilter: "blur(20px)",
              borderRadius: ".7rem",
              transition: "all ease .3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                boxShadow: "0px 0px 20px 1px #ffbb763f",
                border: "1px solid rgba(255, 255, 255, 0.454)",
              },
            }}
          >
            <Grid container sx={{justifyContent: "center", color: "white"}}>
        <Grid item xs={10} md={8}>
          <Box sx={{ textAlign: "center", marginBottom: "10px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Our Mission
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Our vision at Clean Park Auto Service is to become the undisputed
            choice and most trusted automobile services company not just in our
            local market but also on a global scale. We aspire to bring the
            pride and excellence of our services to clients around the world.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ marginTop: 0, paddingTop: 0, color: "white" }}>
        <Grid item xs={10} md={8}>
          <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Our Vision
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Our mission is to establish ourselves as the premier auto care
            service provider, setting new standards in trust, convenience, and
            uniqueness. We strive to be the obvious choice for our customers by
            consistently delivering outstanding service and guiding our
            dedicated team to uphold our core values.
          </Typography>
        </Grid>
      </Grid>
           
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
