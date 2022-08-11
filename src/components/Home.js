import React, { useState } from "react";
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Box,
  Grid,
} from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles/";
import { Container } from "@mui/system";

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
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Container style={{ backgroundColor: "#EEEEEE", height: "100vh" }}>
        <Typography>Homepage</Typography>
      </Container> */}
    </ThemeProvider>
  );
};

export default Home;
