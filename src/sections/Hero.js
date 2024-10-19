import { Box, Typography } from "@mui/material";
import hero from "../images/PDV_2021_NewsroomLg_Human_Resources_Specialist.jpg"

const Hero = () => {
  return (
    <Box
      sx={{
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
      <Typography variant="h2" align="center">
        Welcome to HR Solutions
      </Typography>
    </Box>
  );
};

export default Hero;
