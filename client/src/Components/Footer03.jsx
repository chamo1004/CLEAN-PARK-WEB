// @mui material components
import Link from "@mui/material/Link";
import { Box, Divider, IconButton, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

import logoImage from "./images/logomain.png";

const CustomLink = styled(Link)({
  textDecoration: "none",
  padding: "0.5rem",
});

const CustomIconButton = styled(IconButton)({
  marginRight: "2rem",
  color: "white",
});

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isCopied, setIsCopied] = React.useState(false);

  const handlePhoneClick = () => {
    const phoneNumber = "+94 71 362 3663";
    navigator.clipboard.writeText(phoneNumber);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 250);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#272727",
        padding: "3rem",
        color: "white",
        flexDirection: isMobile ? "column" : "row", // Change the direction to column on mobile devices
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Change the direction to column on mobile devices
            alignItems: isMobile ? "center" : "flex-start", // Center align on mobile devices
            marginBottom: isMobile ? "1rem" : 0, // Add some bottom margin on mobile devices
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row", // Change the direction to column on mobile devices
        }}
      >
        <Typography variant="body2" component="div">
          &copy; {new Date().getFullYear()} Clean Park Auto Service. All rights
          reserved.
        </Typography>
        <Box>
          <CustomIconButton onClick={handlePhoneClick}>
            <CallIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: "0.7rem" }}
            >
              +94 71 362 3663
            </Typography>
          </CustomIconButton>
          <CustomIconButton>
            <CustomLink
              color="#fff"
              href="mailto:cleanparkautoservice@gmail.com?subject=Inquiry"
            >
              <EmailIcon />
            </CustomLink>
          </CustomIconButton>

          <CustomIconButton>
            <CustomLink
              color="#fff"
              href="https://www.facebook.com/profile.php?id=100063835194124"
              target="_blank" // Open link in a new tab
            >
              <FacebookIcon />
            </CustomLink>
          </CustomIconButton>
        </Box>
      </Box>
      {isCopied && (
        <Box
          sx={{
            position: "fixed",
            top: "36rem",
            left: "69%",
            transform: "translateX(-50%)",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            zIndex: 999,
            color: "red",
          }}
        >
          Copied!
        </Box>
      )}
    </Box>
  );
}

export default Footer;
