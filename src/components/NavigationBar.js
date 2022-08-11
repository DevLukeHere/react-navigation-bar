import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Grid,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/logo-192x192.png";
import MobileDrawer from "./MobileDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles/";

const pages = ["Why Okuro?", "Features", "Resources", "Enterprise", "Pricing"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
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
      ],
    },
  },
});

const NavigationBar = () => {
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = () => {
    setShowMobileDrawer(!showMobileDrawer);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setShowMobileDrawer(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className="app-bar" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Okuro Logo" src={Logo} />
                </IconButton>
              </Tooltip>
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
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Button variant="contained" color="primary">
                  Get Started
                </Button>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  {showMobileDrawer ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
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
      </Grid>
    </ThemeProvider>
  );
};

export default NavigationBar;
