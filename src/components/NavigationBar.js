import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  MenuItem,
  Grid,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "../assets/logo-192x192.png";
import MobileDrawer from "./MobileDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles/";
import DesktopDrawer from "./DesktopDrawer";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          padding: "0 1rem",
        },
      },
    },
    Typography: {
      styleOverrides: {
        root: {
          color: "#333333",
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
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = () => {
    setShowMobileDrawer(!showMobileDrawer);
  };

  const handleCloseNavMenu = () => {
    setShowMobileDrawer(false);
  };

  const handleOpenDesktopNavMenu = () => {
    setShowDesktopDrawer(!showDesktopDrawer);
  };

  const handleCloseDesktopNavMenu = () => {
    setShowMobileDrawer(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className="app-bar" position="static">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Okuro Logo" src={Logo} />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="navbar"
              color="primary"
              onClick={handleOpenDesktopNavMenu}
              sx={{ my: 2, display: "block" }}
              style={{ display: "flex" }}
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

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box style={{ backgroundColor: "#DFDFDE", width: "150%" }}>
              <Box>
                <Button variant="contained" color="primary">
                  Get Started
                </Button>
              </Box>
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
      </AppBar>
      <Grid style={{ position: "relative" }}>
        <Grid
          style={{
            height: "100vh",
            width: "100%",
            display: `${showMobileDrawer ? "block" : "none"}`,
            position: "absolute",
          }}
        >
          <MobileDrawer />
        </Grid>
        <Grid
          style={{
            height: "100vh",
            width: "100%",
            display: `${showDesktopDrawer ? "block" : "none"}`,
            position: "absolute",
          }}
        >
          <DesktopDrawer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default NavigationBar;
