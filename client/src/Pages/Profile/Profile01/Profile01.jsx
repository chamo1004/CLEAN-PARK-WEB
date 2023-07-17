import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import banner04 from "../../../img/banner04.jpg";

const categories = [
  {
    id: 1,
    name: "Your info",
    description: "Description for Category 1",
  },
  {
    id: 2,
    name: "Car details",
    description: "Description for Category 2",
  },
  {
    id: 3,
    name: "Services",
    description: "Description for Category 3",
  },
  {
    id: 4,
    name: "Make an appointment",
    description: "Description for Category 4",
  },
];

const Dashboard01 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          backgroundSize: "cover",
          p: 4,
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={8} md={5} elevation={6} m>
          <Box
            sx={{
              width: "100%",
              height: "89vh",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.222)",
              backdropFilter: "blur(20px)",
              borderRadius: ".7rem",
              transition: "all ease .3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",

              "&:hover": {
                boxShadow: "0px 0px 20px 1px #ffbb763f",
                border: "1px solid rgba(255, 255, 255, 0.454)",
              },
            }}
          >
            <Grid container>
              <Grid item xs={3}>
                {categories.map((category) => (
                  <Box
                    key={category.id}
                    sx={{
                      padding: 1,
                      cursor: "pointer",
                      backgroundColor:
                        selectedCategory?.id === category.id
                          ? "#ffffff26"
                          : "transparent",
                      color:
                        selectedCategory?.id === category.id
                          ? "#fff"
                          : "#ffffff",
                      "&:hover": {
                        backgroundColor: "#ffffff11",
                      },
                    }}
                    onClick={() => handleCategorySelect(category)}
                  >
                    <Typography variant="h6">{category.name}</Typography>
                  </Box>
                ))}
              </Grid>

              <Grid item xs={8}>
                <Box
                  sx={{
                    padding: 2,
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, 0.9)), url(${banner04})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    minWidth: "80vw",
                    color: "#ffffff",
                  }}
                >
                  {selectedCategory ? (
                    <Typography variant="body1">
                      {selectedCategory.description}
                    </Typography>
                  ) : (
                    <Typography variant="body1">Select a category</Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard01;
