import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
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

const OTP = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid
          item
          xs={12}
          sm={8}
          md={4} // Adjust the width by modifying the `md` value
          component={Paper}
          elevation={6}
          m={10}
          ml={50}
          mr={50}
          p={4}
        >
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              OTP verification code
            </Typography>
            <Typography component="h1" variant="body1" color="#C0C0C0">
              We have sent a verification code to your mobile number
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1, md: 4 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="digit1"
                    inputProps={{ maxLength: 1 }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="digit2"
                    inputProps={{ maxLength: 1 }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="digit3"
                    inputProps={{ maxLength: 1 }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="digit4"
                    inputProps={{ maxLength: 1 }}
                  />
                </Grid>
              </Grid>

              <Button
                component={Link}
                to="/login"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
              >
                Verify me
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
                    Didn&apos;t receive the code?{" "}
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
          </Box>
        </Grid>
      </>
    </ThemeProvider>
  );
};

export default OTP;
