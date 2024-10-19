import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "0.3s",
        backgroundColor: scrolled ? "#1976d2" : "transparent",
        color: scrolled ? "#fff" : "#1976d2",
        boxShadow: scrolled ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo section */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              border: "2px solid #1976d2",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              textDecoration: "none",
              color: scrolled ? "#fff" : "#1976d2",
            }}
          >
            MJMandelah
          </Typography>

          {/* Center links for About and Services */}
          <Box
            sx={{
              position: "absolute", // Absolute position to center it
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "flex" }, // Hide on mobile, show on larger screens
              gap: 3,
            }}
          >
            <Link
              to="about"
              spy
              smooth
              offset={-70}
              duration={500}
              style={{
                textDecoration: "none",
                color: scrolled ? "#fff" : "#1976d2",
              }}
            >
              <Button color="inherit">About</Button>
            </Link>
            <Link
              to="services"
              spy
              smooth
              offset={-70}
              duration={500}
              style={{
                textDecoration: "none",
                color: scrolled ? "#fff" : "#1976d2",
              }}
            >
              <Button color="inherit">Services</Button>
            </Link>
          </Box>

          {/* Hamburger for mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" }, ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
