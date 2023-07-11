import { createTheme } from "@mui/material/styles";

const CPTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#B90504",
      //   secondary: "#990100",
    },
  },
  typography: {
    fontFamily: "Raleway",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 10, // Set the border radius to 10
  },
});

export default CPTheme;
