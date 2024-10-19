import { Container, Box, Typography } from "@mui/material";
import about from "../images/Human-Resources.png"

const AboutUs = () => {
  return (
    <Container maxWidth="lg" id="about" sx={{ py: 8 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        {/* About Image */}
        <Box sx={{ flex: 1, pr: { md: 4 }, mb: { xs: 4, md: 0 } }}>
          <img src={about} alt="About us" style={{ width: "100%" }} />
        </Box>
        {/* About Content */}
        <Box sx={{ flex: 2 }} >
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            Our mission is to create a workplace where people thrive and grow.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Our Vision
          </Typography>
          <Typography paragraph>
            We envision a future where companies support their employees to
            achieve personal and professional goals.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
