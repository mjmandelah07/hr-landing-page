import {
  Box,
  Typography,
  IconButton,
  Grid,
  TextField,
  Button,
  Container
} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "white" }}>
      <Container maxWidth="lg" id="services" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Social Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: "start" }}>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              Follow Us
            </Typography>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: "start" }}>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              Quick Links
            </Typography>
            <Box>
              <Link
                to="about"
                spy
                smooth
                offset={-70}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                  margin: "0.5rem 0",
                }}
              >
                About
              </Link>
              <Link
                to="services"
                spy
                smooth
                offset={-70}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                  margin: "0.5rem 0",
                }}
              >
                Services
              </Link>
            </Box>
          </Grid>

          {/* Newsletter Signup */}
          <Grid item xs={12} md={4} sx={{ textAlign: "start" }}>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
              Sign up to stay updated
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ display: "flex", justifyContent: "start", marginTop: "1.5rem"}}
            >
              <TextField
                variant="outlined"
                size="small"
                placeholder="Your email"
                sx={{ backgroundColor: "white", borderRadius: "4px" }}
              />
              <Button
                variant="contained"
                sx={{
                  marginLeft: "0.5rem",
                  backgroundColor: "white",
                  color: "#1976d2",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
          <Typography variant="body2">
            &copy; 2024 HR Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
