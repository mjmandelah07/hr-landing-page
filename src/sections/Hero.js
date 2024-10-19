import { Box, Typography } from "@mui/material";
import hero from "../images/PDV_2021_NewsroomLg_Human_Resources_Specialist.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative", // This makes the Box the reference point for the overlay
        height: "100vh",
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", 
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <Typography variant="h2" align="center">
          Welcome to Mjmandelah HR Solutions
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
