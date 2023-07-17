import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import banner05 from "../../img/banner05.jpg";

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

const SignupForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Validate the form fields
    const errors = {};

    // Validate first name
    const firstName = formData.get("firstName");
    if (!firstName) {
      errors.firstName = "First name is required";
    }

    // Validate last name
    const lastName = formData.get("lastName");
    if (!lastName) {
      errors.lastName = "Last name is required";
    }

    // Validate address
    const address = formData.get("address");
    if (!address) {
      errors.address = "Address is required";
    }

    // Validate email
    const email = formData.get("email");
    if (!email) {
      errors.email = "Email address is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    // Validate phone number
    const phoneNumber = formData.get("phonenumber");
    if (!phoneNumber) {
      errors.phonenumber = "Phone number is required";
    } else if (!validatePhoneNumber(phoneNumber)) {
      errors.phonenumber = "Invalid phone number";
    }

    // Validate secondary phone number
    const backupTel = formData.get("backuptel");
    if (backupTel && !validatePhoneNumber(backupTel)) {
      errors.backuptel = "Invalid secondary phone number";
    }

    // Validate password
    const password = formData.get("password");
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password should be at least 6 characters long";
    }

    // Validate confirm password
    const confirmPassword = formData.get("confirm password");
    if (!confirmPassword) {
      errors["confirm password"] = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors["confirm password"] = "Passwords do not match";
    }

    // If there are validation errors, set the errors state and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Clear any previous errors
    setErrors({});

    // Prepare the data for POST request
    const userData = {
      email,
      password,
      firstname: firstName,
      lastname: lastName,
      tel: phoneNumber,
    };

    try {
      // Create a new user
      const userResponse = await axios.post(
        "http://localhost:3001/user",
        userData
      );

      if (userResponse.data) {
        const user = userResponse.data;

        // Send POST request to create a new customer
        const customerData = {
          address,
          backuptel: backupTel,
          userId: user.userid,
        };

        const customerResponse = await axios.post(
          "http://localhost:3001/customer",
          customerData
        );

        if (customerResponse.data) {
          // Redirect to the OTP verification page
          navigate("/otp");
        } else {
          throw new Error("Failed to sign up as a customer");
        }
      } else {
        throw new Error("Failed to sign up as a user");
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@[\w-]+\.[\w-.]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;

    return phoneNumberRegex.test(phoneNumber);
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${banner05})`,
            backgroundSize: "cover",
            p: 8,
          }}
        >
          <Grid item xs={12} sm={8} elevation={6} mr={30} p={4} ml={30}>
            <Box
              sx={{
                width: "45em",
                height: "63em",
                padding: "4rem",
                paddingBottom: "12rem",
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
              <form onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First name"
                  name="firstName"
                  autoComplete="firstName"
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last name"
                  name="lastName"
                  autoComplete="lastName"
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  error={errors.address ? true : false}
                  helperText={errors.address}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  autoComplete="email"
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone number"
                  type="text"
                  name="phonenumber"
                  autoComplete="phonenumber"
                  error={errors.phonenumber ? true : false}
                  helperText={errors.phonenumber}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="backuptel"
                  label="Secondary phone number"
                  type="text"
                  name="backuptel"
                  autoComplete="backuptel"
                  error={errors.backuptel ? true : false}
                  helperText={errors.backuptel}
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
                  error={errors["password"] ? true : false}
                  helperText={errors["password"]}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  error={errors["confirm password"] ? true : false}
                  helperText={errors["confirm password"]}
                />
                <Button
                  component={Link}
                  to="/verification"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 3 }}
                >
                  Sign up
                </Button>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item>
                    <Typography
                      variant="body1"
                      color="#C0C0C0"
                      fontWeight="regular"
                    >
                      Already have an account?{" "}
                      <Typography
                        component={Link}
                        to="/login"
                        variant="body1"
                        color="black"
                        fontWeight="medium"
                        sx={{ textDecoration: "none" }}
                      >
                        Log In
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default SignupForm;
