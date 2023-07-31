import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link from "react-router-dom"
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import banner04 from "../../img/banner04.jpg";

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
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const phoneNumber = event.target.phonenumber.value;
    const password = event.target.password.value;

    try {
      // Send a POST request to the backend to authenticate the user
      const response = await axios.post("http://localhost:3001/user/login", {
        tel: phoneNumber,
        password: password,
      });

      // Assuming the backend returns a user object with a usertype property
      const user = response.data;

      // Navigate to different routes based on the usertype
      if (user.usertype === "customer") {
        navigate(`/profile01/${user.userid}`);
      } else if (user.usertype === "manager") {
        navigate("/profile02");
      } else if (user.usertype === "owner") {
        navigate("/profile03");
      } else {
        navigate("/profile01");
      }
    } catch (error) {
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${banner04})`,
            backgroundSize: "cover",
            p: 10,
            paddingBottomb: 6,
          }}
        >
          <Grid item xs={12} sm={8} md={5} elevation={6} mr={40} p={4} ml={30}>
            <Box
              sx={{
                width: "40em",
                height: "30em",
                padding: "4rem",
                marginLeft: "80px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
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
                  color="#3A3B3C"
                  textAlign="center" // Center horizontally
                >
                  Please enter your details.
                </Typography>
              </Box>
              <Box
                component="form"
                noValidate
                id="login-form"
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
                {loginError && (
                  <Typography variant="body1" color="error">
                    {loginError}
                  </Typography>
                )}
                <Button
                  type="submit" // Change type to submit
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
                      color="#3A3B3C"
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
