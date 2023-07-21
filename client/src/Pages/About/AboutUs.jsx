import React from "react";
import { Box, Grid, Button, Typography, styled } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarsIcon from "@mui/icons-material/Stars";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import banner09 from "../../img/banner09.jpg";

const AboutUs = ({ aboutUsRef }) => {
  const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textAlign: "center",
  }));

  const BodyText = styled(Typography)(({ theme }) => ({
    textAlign: "justify",
  }));

  return (
    <Box
      ref={aboutUsRef}
      sx={{
        backgroundColor: "black",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner09})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 90px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "10vh",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <SectionTitle variant="h4" gutterBottom>
            Need reliable auto service? Look no further!
          </SectionTitle>
        </Grid>

        <Grid item xs={12} sm={8} md={5} elevation={6} mb={2} mr={50} p={4}>
          <Box
            sx={{
              position: "relative",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "56em",
                padding: "1rem",
                marginLeft: "37px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "black",
                border: "0px solid rgba(255, 255, 255, 0.222)",
                backdropFilter: "blur(20px)",
                borderRadius: ".7rem",
                transition: "all ease .3s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  boxShadow: "0px 0px 20px 1px #ffbb763f",
                  border: "0px solid rgba(255, 255, 255, 0.454)",
                },
              }}
            >
              <Box sx={{ textAlign: "center", marginBottom: "1px" }}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  At Clean Park Auto Service, we are dedicated to providing
                  exceptional automotive maintenance and care to our valued
                  clients. With our state-of-the-art equipment and a team of
                  skilled professionals, we deliver top-quality preventive
                  maintenance services for a wide range of vehicles, including
                  the latest models. We pride ourselves on our commitment to
                  excellence, forging strategic partnerships with leading global
                  car product brands to enhance the services we offer.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} elevation={6} mr={55} p={4}>
          <Box
            sx={{
              position: "relative",
              alignItems: "center",
            }}
          >
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11006.892782113175!2d81.33444663000726!3d6.922356807227263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4519069dc4eb3%3A0xe5ac9d75a72d3627!2sObbegoda%20Junction!5e0!3m2!1sen!2slk!4v1689587933852!5m2!1sen!2slk"
                width={1000}
                height={400}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <SectionTitle variant="h4" gutterBottom>
            Core values
          </SectionTitle>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              width: "18em",
              height: "19em",
              padding: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              color: "black",
              border: "1px solid rgba(255, 255, 255, 0.222)",
              backdropFilter: "blur(20px)",
              borderRadius: ".7rem",
              transition: "all ease .3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                boxShadow: "0px 0px 20px 1px #ffbb763f",
                border: "1px solid rgba(255, 255, 255, 0.454)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: ".1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <HowToRegIcon sx={{ marginRight: "0.5rem" }} />
              TRUST
            </Typography>
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontSize: ".9em",
                  fontWeight: 300,
                  letterSpacing: ".1em",
                  justifyContent: "center",
                }}
              >
                Trust is the foundation of our business. We build lasting
                relationships with our customers by consistently providing
                reliable and transparent services for years. Our customers can
                trust us to take care of their vehicles with the utmost
                professionalism.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              width: "18em",
              height: "19em",
              padding: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              color: "black",
              border: "1px solid rgba(255, 255, 255, 0.222)",
              backdropFilter: "blur(20px)",
              borderRadius: ".7rem",
              transition: "all ease .3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                boxShadow: "0px 0px 20px 1px #ffbb763f",
                border: "1px solid rgba(255, 255, 255, 0.454)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: ".1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <ScheduleIcon sx={{ marginRight: "0.5rem" }} />
              CONVENIENCE
            </Typography>
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontSize: ".9em",
                  fontWeight: 300,
                  letterSpacing: ".1em",
                  justifyContent: "center",
                }}
              >
                We understand the importance of convenience in today's
                fast-paced world. We strive to make the automotive maintenance
                for our customers' convenient. From online booking options to
                efficient service delivery, we prioritize convenience at every
                step.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              width: "18em",
              height: "19em",
              padding: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              color: "black",
              border: "1px solid rgba(255, 255, 255, 0.222)",
              backdropFilter: "blur(20px)",
              borderRadius: ".7rem",
              transition: "all ease .3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                boxShadow: "0px 0px 20px 1px #ffbb763f",
                border: "1px solid rgba(255, 255, 255, 0.454)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: ".1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <StarsIcon sx={{ marginRight: "0.5rem" }} />
              UNIQUENESS
            </Typography>
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontSize: ".9em",
                  fontWeight: 300,
                  letterSpacing: ".1em",
                  justifyContent: "center",
                }}
              >
                We believe in standing out from the crowd. Our commitment to
                uniqueness drives us to offer innovative solutions and services
                that set us apart from our competitors. We explore new
                technologies and industry trends to ensure the best automotive
                care.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              width: "18em",
              height: "19em",
              padding: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              color: "black",
              border: "1px solid rgba(255, 255, 255, 0.222)",
              backdropFilter: "blur(20px)",
              borderRadius: ".7rem",
              transition: "all ease .3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                boxShadow: "0px 0px 20px 1px #ffbb763f",
                border: "1px solid rgba(255, 255, 255, 0.454)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: ".1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <PeopleIcon sx={{ marginRight: "0.5rem" }} />
              TEAMWORK
            </Typography>
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontSize: ".9em",
                  fontWeight: 300,
                  letterSpacing: ".1em",
                  justifyContent: "center",
                }}
              >
                Our success is the result of our dedicated team. We foster a
                culture of collaboration, respect, and continuous improvement
                among our staff. We work towards our common goal of exceeding
                customer expectations and maintaining our position as industry
                leaders.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Box
          sx={{
            position: "relative",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "56em",
              mt: 10,
              padding: "2rem",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              color: "black",
              border: "0px solid rgba(255, 255, 255, 0.222)",
              backdropFilter: "blur(20px)",
              borderRadius: ".7rem",
              transition: "all ease .3s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                boxShadow: "0px 0px 20px 1px #ffbb763f",
                border: "0px solid rgba(255, 255, 255, 0.454)",
              },
            }}
          >
            <Box sx={{ textAlign: "center", marginBottom: "1px" }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                We are here to serve you with integrity, expertise, and a
                commitment to excellence. Join us at Clean Park Auto Service and
                experience the difference of exceptional automotive care.
              </Typography>
            </Box>
          </Box>
          <Button
            component={Link}
            to="/signup"
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 3,
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "#000",
              },
            }}
          >
            Become a member
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutUs;
