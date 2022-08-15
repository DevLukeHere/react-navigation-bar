import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Grid,
  Avatar,
} from "@mui/material/";
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
            fontFamily: `'Source Sans Pro', sans-serif`,
            backgroundColor: "#000000",
            borderRadius: "0.75rem",
            textTransform: "none",
            fontWeight: "bold",
            padding: "0.5rem",
            zIndex: "1",
            minWidth: "150px",
            ":hover": {
              backgroundColor: "#defffb",
              color: "#000000",
            },
          },
        },
        {
          props: { variant: "navbar", color: "primary" },
          style: {
            fontFamily: `'Source Sans Pro', sans-serif`,
            textTransform: "none",
            fontWeight: "bold",
            color: "#333333",
            borderRadius: "0",
          },
        },
      ],
    },
    MuiButtonBase: {
      variants: [
        {
          props: { button_display: "flex" },
          style: {
            display: "flex",
          },
        },
      ],
    },
    MuiGrid: {
      variants: [
        {
          props: { position_relative: "true" },
          style: {
            position: "relative",
          },
        },
        {
          props: { mobile_drawer: "true" },
          style: {
            width: "100%",
            // display: showMobileDrawer ? "block" : "none",
            position: "absolute",
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
            <Avatar variant="square" src={Logo} alt="Okuro Logo"></Avatar>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "1rem",
            }}
          >
            <Button
              variant="navbar"
              color="primary"
              onClick={handleOpenDesktopNavMenu}
              sx={{
                my: 2,
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
              button_display="flex"
            >
              Features
              <KeyboardArrowDownIcon />
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              button_display="flex"
            >
              Resources
              <KeyboardArrowDownIcon />
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              button_display="flex"
            >
              Enterprise
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              button_display="flex"
            >
              Pricing
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingRight: "2rem",
            }}
          >
            <Box>
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
        position_relative="true"
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Grid mobile_drawer="true">
          <MobileDrawer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default NavigationBar;
