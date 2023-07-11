import { Box, Divider, IconButton, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const CustomIconButton = styled(IconButton)({
  marginRight: "2rem",
  color: "white",
});

function Footer03() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          
      <Divider sx={{ marginBottom: "1rem" }} />
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
          <CustomIconButton>
            <CallIcon />
          </CustomIconButton>
          <CustomIconButton>
            <EmailIcon />
          </CustomIconButton>
          <CustomIconButton>
            <FacebookIcon />
          </CustomIconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer03;
