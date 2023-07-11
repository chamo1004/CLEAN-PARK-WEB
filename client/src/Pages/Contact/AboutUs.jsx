import { Box, Grid, Typography, styled, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarsIcon from "@mui/icons-material/Stars";
import PeopleIcon from "@mui/icons-material/People";
import bannerWelcome from "../../img/banner02.jpg";

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bannerWelcome})`,
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
      <Grid container spacing={2} p={4} justifyContent="center">
        <Grid item xs={12}>
          <SectionTitle variant="h4" gutterBottom>
            About Clean Park Auto Service
          </SectionTitle>
          <BodyText variant="body1">
            At Clean Park Auto Service, we are dedicated to providing exceptional automotive maintenance and care to our valued clients. With our state-of-the-art equipment and a team of skilled professionals, we deliver top-quality preventive maintenance services for a wide range of vehicles, including the latest models. We pride ourselves on our commitment to excellence, forging strategic partnerships with leading global car product brands to enhance the services we offer.
          </BodyText>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 600, margin: "auto", marginBottom: 2, backgroundColor: "grey", translate: "0.6" }}>
            <CardContent>
              <CardHeader
                sx={{ alignItems: "center" }}
                avatar={<VisibilityIcon />}
                title="Our Vision"
              />
              <BodyText variant="body1">
                Our vision at Clean Park Auto Service is to become the undisputed choice and most trusted automobile services company not just in our local market but also on a global scale. We aspire to bring the pride and excellence of our services to clients around the world.
              </BodyText>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 600, margin: "auto", marginBottom: 2, backgroundColor: "grey" }}>
            <CardContent>
              <CardHeader
                sx={{ alignItems: "center" }}
                avatar={<AssignmentTurnedInIcon />}
                title="Our Mission"
              />
              <BodyText variant="body1">
                Our mission is to establish ourselves as the premier auto care service provider, setting new standards in trust, convenience, and uniqueness. We strive to be the obvious choice for our customers by consistently delivering outstanding service and guiding our dedicated team to uphold our core values.
              </BodyText>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <SectionTitle variant="h5" gutterBottom>
              Core Values
            </SectionTitle>
            <BodyText variant="body1">
              <HowToRegIcon />
              <strong>Trust:</strong> Trust is the foundation of our business. We build lasting relationships with our customers by consistently providing reliable and transparent services. Our clients can trust us to take care of their vehicles with the utmost professionalism.
            </BodyText>
            <BodyText variant="body1">
              <ScheduleIcon />
              <strong>Convenience:</strong> We understand the importance of convenience in today's fast-paced world. We strive to make the automotive maintenance process as convenient as possible for our clients. From online booking options to efficient service delivery, we prioritize convenience at every step.
            </BodyText>
            <BodyText variant="body1">
              <StarsIcon />
              <strong>Uniqueness:</strong> We believe in standing out from the crowd. Our commitment to uniqueness drives us to offer innovative solutions and services that set us apart from our competitors. We continuously explore new technologies and industry trends to ensure we provide the best automotive care.
            </BodyText>
            <BodyText variant="body1">
              <PeopleIcon />
              <strong>Teamwork:</strong> Our success is the result of our cohesive and dedicated team. We foster a culture of collaboration, respect, and continuous improvement among our staff. Together, we work towards our common goal of exceeding customer expectations and maintaining our position as industry leaders.
            </BodyText>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <BodyText variant="body1">
              Join us at Clean Park Auto Service and experience the difference of exceptional automotive care. We are here to serve you with integrity, expertise, and a commitment to excellence.
            </BodyText>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
