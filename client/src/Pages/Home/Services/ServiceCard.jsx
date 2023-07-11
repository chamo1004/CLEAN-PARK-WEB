import React from "react";
import { Box, Typography } from "@mui/material";

const ServiceCard = ({ title, description, backgroundImg }) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 15,
          borderRadius: 2,
          height: "80%",
          width: "90%",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Typography variant="h4" component="h2" sx={{ marginBottom: 0 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {description}
        </Typography>
        <ul>

        </ul>
      </Box>
    </>
  );
};

export default ServiceCard;
