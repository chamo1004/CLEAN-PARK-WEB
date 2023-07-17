import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import banner06 from "../../img/banner06.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});

const OTP = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);

  const handleOTPChange = (index, value) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "100vh",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${banner06})`,
            backgroundSize: "cover",
            p: 8,
          }}
        >
          <Grid item xs={12} sm={8} elevation={4} p={4} ml={30} mr={30}>
            <Box
              sx={{
                width: "40em",
                height: "30em",
                padding: "4rem",
                paddingRight: "8rem",
                paddingLeft: "8rem",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
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
              <Typography variant="h4" sx={{ mb: 2 }} textAlign="center">
                Join our network
              </Typography>
              <Typography
                variant="body1"
                color="#C0C0C0"
                sx={{ mb: 2 }}
                textAlign="center"
              >
                We'd love to have you!
              </Typography>

              <Grid container justifyContent="center" spacing={1}>
                {otp.map((digit, index) => (
                  <Grid item key={index}>
                    <TextField
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      variant="outlined"
                      size="small"
                      inputProps={{
                        maxLength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "1.5rem",
                          letterSpacing: "1rem",
                          width: "3rem",
                          height: "3rem",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>

              <Button
                component={Link}
                to="/login"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 3,
                }}
              >
                Verify me
              </Button>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Typography
                    variant="body1"
                    color="#C0C0C0"
                    fontWeight="regular"
                  >
                    Didn't receive the code?{" "}
                    <Typography
                      component={Link}
                      to="/"
                      variant="body1"
                      color="black"
                      fontWeight="medium"
                      sx={{ textDecoration: "none" }}
                    >
                      Resend code
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default OTP;
