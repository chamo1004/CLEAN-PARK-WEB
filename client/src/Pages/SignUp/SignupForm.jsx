import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          m={10}
          ml={55}
          mr={55}
          p={4}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Join our network
            </Typography>
            <Typography component="h1" variant="body1" color="#C0C0C0">
              We&apos;d love to have you!
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="First name"
                label="First name "
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                autoFocus
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm password"
                label="Confirm password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                component={Link}
                to="/otp"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
              >
                Sign up
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
                    Already have an account?{" "}
                    <Typography
                      component={Link}
                      to="/login/"
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
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default SignupForm;
