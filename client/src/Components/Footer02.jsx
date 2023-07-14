// @mui material components
import Link from "@mui/material/Link";
import { Box, Divider, IconButton, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import logoImage from "./images/logomain.png";

const CustomLink = styled(Link)({
  textDecoration: "none",
  padding: "2rem",
});

const CustomIconButton = styled(IconButton)({
  marginRight: "2rem",
  color: "white",
});

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#272727",
        padding: "2rem",
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
        >
          <Typography variant="h6" component="div">
            <img src={logoImage} alt="Logo" style={{ height: 60 }} />
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: isMobile ? 0 : "8px", marginTop: "12px" }} // Remove left margin on mobile devices
          >
            Clean Park Auto Service
          </Typography>
        </Box>
        <Box>
          <CustomLink color="#fff" href="#">
            Home
          </CustomLink>
          |
          <CustomLink color="#fff" href="#">
            Services
          </CustomLink>
          |
          <CustomLink color="#fff" href="#">
            Contact
          </CustomLink>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
