import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import banner04 from "../../img/banner04.jpg";
import { Link as RouterLink } from "react-router-dom";

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

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const phoneNumber = event.target.elements.phonenumber.value;
    const password = event.target.elements.password.value;

    // Make a GET request to the backend endpoint with query parameters
    try {
      const response = await axios.get("/api/login", {
        params: { phoneNumber, password },
      });
      // Handle the response
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${banner04})`,
            backgroundSize: "cover",
            p: 10,
            paddingBottomb: 6,
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            elevation={6}
            mr={40}
            p={4}
            ml={30}
            mr={30}
          >
            <Box
              sx={{
                width: "40em",
                height: "30em",
                padding: "4rem",
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
              <Box alignItems="center">
                <Typography
                  component="h1"
                  variant="h4"
                  alignItems="center"
                  textAlign="center" // Center horizontally
                >
                  Welcome back!
                </Typography>
                <Typography
                  component="h1"
                  variant="body1"
                  color="#C0C0C0"
                  textAlign="center" // Center horizontally
                >
                  Please enter your details.
                </Typography>
              </Box>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmit}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone number"
                  type="text"
                  name="phonenumber"
                  autoComplete="phonenumber"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Box display="flex" alignItems="center"></Box>
                <Button
                  component={RouterLink}
                  to="/profile01"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 3 }}
                >
                  Continue
                </Button>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="#C0C0C0"
                      fontWeight="regular"
                    >
                      Don&apos;t have an account?{" "}
                      <Typography
                        component={Link}
                        to="/signup"
                        variant="body1"
                        color="black"
                        fontWeight="medium"
                        sx={{ textDecoration: "none" }}
                      >
                        Sign up
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default LoginForm;
