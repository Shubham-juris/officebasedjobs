import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import officejob from "../../assets/Image/logo.png";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Job Seekers", path: "/job-seekers" },
  { name: "Employers", path: "/employers" },
  { name: "Resources", path: "/resource" },
  { name: "Contact", path: "/contact-us" },
  // { name: "Location", path: "/location" },
  { name: "Careers", path: "/careers" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 9 }}>
      <AppBar
        position="absolute"
        sx={{
          padding: { xs: 0.5, sm: 1 },
          boxShadow: "none",
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              <img
                src={officejob}
                alt="Logo"
                style={{
                  height: 30,
                  marginRight: "1rem",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <IconButton onClick={handleOpenNavMenu} sx={{ color: "black" }}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map(({ name, path }) => (
                  <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <Link
                      to={path}
                      style={{
                        textDecoration: "none",
                        color: location.pathname === path ? "blue" : "black",
                        fontWeight:
                          location.pathname === path ? "bold" : "normal",
                      }}
                    >
                      {name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: 2, lg: 3 },
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              {pages.map(({ name, path }) => (
                <Button
                  key={name}
                  component={Link}
                  to={path}
                  sx={{
                    color: location.pathname === path ? "blue" : "black",
                    fontWeight: location.pathname === path ? "bold" : "normal",
                    fontSize: { md: "0.9rem", lg: "1rem" },
                    textTransform: "none",
                    position: "relative",
                    "&:hover": {
                      color: "blue",
                      backgroundColor: "transparent",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: location.pathname === path ? "70%" : "0%",
                      height: "2.7px",
                      bottom: "4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "blue",
                      transition: "width 0.4s ease-in-out",
                    },
                    "&:hover::after": { width: "70%" },
                  }}
                >
                  {name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
