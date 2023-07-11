import {
  Box,
  Button,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authSignIn } from "../../firebase/Services/AuthService";
import { getCurrentUser } from "../../firebase/manageUsers";

const Login = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [payload, setPayload] = useState({ email: "", password: "" });

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const onChangeInput = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authSignIn(payload);
      console.log("Login ~ response:", response);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log("Login ~ error:", error);
    }
  };

  useEffect(() => {
    console.log("Login ~ user:", user);
    if (user) {
      navigate("/appointment");
    }
  }, [navigate, user]);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        m={8}
        p={2}
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
            Welcome back
          </Typography>
          <Typography component="h1" variant="body1" color="#C0C0C0">
            Please enter your details.
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => handleSubmit(e)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => onChangeInput(e)}
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
              onChange={(e) => onChangeInput(e)}
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
            <Grid container>
              <Grid item xs>
                <Typography
                  component={Link}
                  to="/auth/forgot-password"
                  variant="body1"
                  color="#fff"
                  fontWeight="medium"
                  sx={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  color="#C0C0C0"
                  fontWeight="regular"
                >
                  Don&apos;t have an account?{" "}
                  <Typography
                    component={Link}
                    to="/auth/sign-up"
                    variant="body1"
                    color="#fff"
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
  );
};

export default Login;
