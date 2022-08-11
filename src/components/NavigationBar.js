import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Button, Grid } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "../assets/logo-192x192.png";
import MobileDrawer from "./MobileDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles/";
import DesktopDrawer from "./DesktopDrawer";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          paddingLeft: "2rem",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#000000",
            borderRadius: "0.75rem",
            textTransform: "none",
            fontWeight: "bold",
            padding: "0.5rem",
            ":hover": {
              backgroundColor: "#000000",
            },
          },
        },
        {
          props: { variant: "navbar", color: "primary" },
          style: {
            textTransform: "none",
            fontWeight: "bold",
            color: "#333333",
          },
        },
      ],
    },
  },
});

const NavigationBar = () => {
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  const [showDesktopDrawer, setShowDesktopDrawer] = useState(false);

  const handleOpenNavMenu = () => {
    setShowMobileDrawer(!showMobileDrawer);
  };

  const handleCloseNavMenu = () => {
    setShowMobileDrawer(false);
  };

  const handleOpenDesktopNavMenu = () => {
    setShowDesktopDrawer(!showDesktopDrawer);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className="app-bar" position="static">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 0 }}>
            <img
              src={Logo}
              alt="Okuro Logo"
              style={{ width: "2.5rem", height: "2.5rem" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleOpenDesktopNavMenu}
              sx={{ my: 2, display: "block" }}
              style={{
                display: "flex",
                borderBottom: `${
                  showDesktopDrawer ? "2px solid black" : "none"
                }`,
              }}
            >
              Why Okura?
              {showDesktopDrawer ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              style={{ display: "flex" }}
            >
              Features
              <KeyboardArrowDownIcon />
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              style={{ display: "flex" }}
            >
              Resources
              <KeyboardArrowDownIcon />
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              style={{ display: "flex" }}
            >
              Enterprise
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              style={{ display: "flex" }}
            >
              Pricing
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "2rem" }}>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="mobile drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                {showMobileDrawer ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
        {showDesktopDrawer ? (
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <DesktopDrawer />
          </Box>
        ) : null}
      </AppBar>

      <Grid
        style={{ position: "relative" }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Grid
          style={{
            width: "100%",
            display: `${showMobileDrawer ? "block" : "none"}`,
            position: "absolute",
          }}
        >
          <MobileDrawer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default NavigationBar;
