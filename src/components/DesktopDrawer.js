import React, { useState } from "react";
import { Typography, Divider, Box, Grid } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles/";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

const DesktopDrawer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <Grid display="grid" gridTemplateColumns="repeat(3, 1fr)">
          <Grid>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              WHY OKURO
            </Typography>
            <Divider style={{ margin: "0.5rem 4rem 1rem 0" }} />

            <Box style={{ marginBottom: "1rem" }}>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Overview
              </Typography>
              <Typography variant="subtitle2">
                Everything you need to know about Okuro.
              </Typography>
            </Box>

            <Box style={{ marginBottom: "1rem" }}>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Watch Demo Videos
              </Typography>
              <Typography variant="subtitle2">
                Get a preview of the app in action.
              </Typography>
            </Box>

            <Box style={{ marginBottom: "1rem" }}>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                See How It Works
              </Typography>
              <Typography variant="subtitle2">
                Schedule a live demo now.
              </Typography>
            </Box>

            <Box style={{ marginBottom: "1.5rem" }}>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Visit Atlassian Marketplace
              </Typography>
              <Typography variant="subtitle2">
                Discover more reviews, pricing and more.
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              OKR EXAMPLES
            </Typography>
            <Divider style={{ margin: "0.5rem 4rem 1rem 0" }} />
            <Grid
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              style={{ rowGap: "1rem" }}
            >
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Company Level
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Engineering Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Product Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Marketing Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Design Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Sales Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Operations Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Customer Service Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                HR Teams
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  wrap: "nowrap",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                See all examples
                <ArrowRightAltIcon />
              </Typography>
            </Grid>
          </Grid>
          <Grid style={{ backgroundColor: "#DFDFDE", padding: "0 1rem" }}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              GUIDES
            </Typography>
            <Divider style={{ margin: "0.5rem 4rem 1rem 0" }} />
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "2.5rem",
              }}
            >
              Agile OKR Guide
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "2.5rem",
              }}
            >
              Implementing OKRs for Agile Teams in Jira
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Advanced JQL Magic Guide
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default DesktopDrawer;
