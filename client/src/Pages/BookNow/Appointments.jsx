import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Appointment from "../SignUp/SignupForm";

const Appointments = () => {
  const [errors, setErrors] = useState({
    vehicleNumber: false,
    contactNumber: false,
    date: false,
    time: false,
  });

  const navigate = useNavigate();

  const handleMobileNumberChange = (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");
  };

  const validateFields = () => {
    let hasErrors = false;

    if (!/^[A-Z]{2,3}-[0-9]{4}$/.test(vehicleNumberRef.current.value)) {
      setErrors((prevState) => ({ ...prevState, vehicleNumber: true }));
      hasErrors = true;
    } else {
      setErrors((prevState) => ({ ...prevState, vehicleNumber: false }));
    }

    if (!/^[0-9]{10}$/.test(contactNumberRef.current.value)) {
      setErrors((prevState) => ({ ...prevState, contactNumber: true }));
      hasErrors = true;
    } else {
      setErrors((prevState) => ({ ...prevState, contactNumber: false }));
    }

    if (dateRef.current.value === "") {
      setErrors((prevState) => ({ ...prevState, date: true }));
      hasErrors = true;
    } else {
      setErrors((prevState) => ({ ...prevState, date: false }));
    }

    if (timeRef.current.value === "") {
      setErrors((prevState) => ({ ...prevState, time: true }));
      hasErrors = true;
    } else {
      setErrors((prevState) => ({ ...prevState, time: false }));
    }

    return !hasErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateFields();

    if (isValid) {
      // Handle form submission or further processing
      console.log("Form submitted successfully");

      // Change the link here
      navigate("/new-link");
    } else {
      console.log("Form validation failed");
    }
  };

  const handleTextFieldFocus = (field) => {
    setErrors((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  const vehicleNumberRef = useRef();
  const contactNumberRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  return (
    <> 
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        ml={45}
        mr={45}
        p={4}
      >
        
        <Box
          sx={{
            my: 4,
            mx: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: 8,
          }}
        >
          <Typography component="h1" variant="h4">
            Make an appointment
          </Typography>
          <Typography component="h1" variant="body1">
            Tell us how you like it!
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="vehicleModel"
              label="Vehicle model"
              name="vehicleModel"
              autoComplete="vehicle-model"
              autoFocus
              InputLabelProps={{
                shrink: true, // Label always displayed in the border
              }}
              sx={{
                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {},
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="vehicleNumber"
              label="Vehicle number"
              placeholder="ABC9999 / AB9999  (Type without spaces)"
              name="vehicleNumber"
              autoComplete="vehicle-number"
              autoFocus
              inputRef={vehicleNumberRef}
              error={errors.vehicleNumber}
              helperText={
                errors.vehicleNumber &&
                "Please enter a valid vehicle number (e.g., XXX-0000)"
              }
              InputLabelProps={{
                shrink: true, // Label always displayed in the border
              }}
              onFocus={() => handleTextFieldFocus("vehicleNumber")}
              sx={{
                "& .MuiFormHelperText-root": {},
                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {},
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="contactNumber"
              label="Contact number"
              name="contactNumber"
              autoComplete="contact-number"
              inputMode="numeric"
              pattern="[0-9]*"
              onInput={handleMobileNumberChange}
              autoFocus
              inputRef={contactNumberRef}
              error={errors.contactNumber}
              helperText={
                errors.contactNumber && "Please enter a valid contact number"
              }
              InputLabelProps={{
                shrink: true, // Label always displayed in the border
              }}
              onFocus={() => handleTextFieldFocus("contactNumber")}
              sx={{
                "& .MuiFormHelperText-root": {},
                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {},
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="serviceType"
              label="Service type"
              type="text"
              id="serviceType"
              InputLabelProps={{
                shrink: true, // Label always displayed in the border
              }}
              sx={{
                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {},
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="date"
              label="Date"
              type="date"
              id="date"
              inputRef={dateRef}
              error={errors.date}
              helperText={errors.date && "Please select a date"}
              InputLabelProps={{
                shrink: true, // Label always displayed in the border
              }}
              onFocus={() => handleTextFieldFocus("date")}
              sx={{
                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {},
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="time"
              label="Time"
              type="time"
              id="time"
              inputRef={timeRef}
              error={errors.time}
              helperText={errors.time && "Please select a time"}
              InputLabelProps={{
                shrink: true, // Label always displayed in the border
              }}
              onFocus={() => handleTextFieldFocus("time")}
              sx={{
                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {},
                  "&.Mui-focused fieldset": {
                    borderColor: "red",
                  },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 3,
                backgroundColor: "red",
                color: "#fff",
              }}
              onClick={handleSubmit}
            >
              Book now
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Appointments;
