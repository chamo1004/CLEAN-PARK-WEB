import {
  Box,
  Button,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

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

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  return (
    <ThemeProvider theme={theme}>
      <>
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
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
            }}
          >
            <Typography component="h1" variant="h4">
              Welcome back
            </Typography>
            <Typography component="h1" variant="body1" color="#C0C0C0">
              Please enter your details.
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
              <Box display="flex" alignItems="center">
                <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                <Typography
                  variant="body1"
                  fontWeight="regular"
                  onClick={handleSetRememberMe}
                  color="#C0C0C0"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  &nbsp;&nbsp;Remember me
                </Typography>
              </Box>
              <Button
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
      </>
    </ThemeProvider>
  );
};

export default LoginForm;
