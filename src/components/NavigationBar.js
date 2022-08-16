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
import Logo from "../assets/logo-192x192.png";
import ArrowDown from "../assets/ui-down-arrow.svg";
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
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
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
    MuiGrid: {
      variants: [
        {
          props: { position_relative: "true" },
          style: {
            position: "relative",
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
                display: "flex",
                borderBottom: `${
                  showDesktopDrawer ? "2px solid black" : "none"
                }`,
              }}
            >
              Why Okura?
              {showDesktopDrawer ? (
                <Avatar
                  sx={{
                    width: "0.75rem",
                    height: "0.75rem",
                    marginLeft: "0.5rem",
                    transform: "rotate(180deg)",
                  }}
                  src={ArrowDown}
                  alt="arrow down"
                />
              ) : (
                <Avatar
                  sx={{
                    width: "0.75rem",
                    height: "0.75rem",
                    marginLeft: "0.5rem",
                  }}
                  src={ArrowDown}
                  alt="arrow down"
                />
              )}
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ display: "flex" }}
            >
              Features
              <Avatar
                sx={{
                  width: "0.75rem",
                  height: "0.75rem",
                  marginLeft: "0.5rem",
                }}
                src={ArrowDown}
                alt="arrow down"
              />
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ display: "flex" }}
            >
              Resources
              <Avatar
                sx={{
                  width: "0.75rem",
                  height: "0.75rem",
                  marginLeft: "0.5rem",
                }}
                src={ArrowDown}
                alt="arrow down"
              />
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ display: "flex" }}
            >
              Enterprise
            </Button>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleCloseNavMenu}
              sx={{ display: "flex" }}
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
        <Grid sx={{ display: `${showMobileDrawer ? "block" : "none"}` }}>
          <MobileDrawer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default NavigationBar;
