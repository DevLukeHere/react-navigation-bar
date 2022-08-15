import React from "react";
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
    MuiDivider: {
      styleOverrides: {
        root: {
          color: "#f0f0f0",
          margin: "0.5rem 4rem 1rem 0",
        },
      },
    },
    MuiGrid: {
      variants: [
        {
          props: { grid_type: "main" },
          style: {
            width: "100%",
            backgroundColor: "#ffffff",
            color: "#000000",
            paddingTop: "2rem",
          },
        },
        {
          props: { grid_type: "tertiary" },
          style: {
            backgroundColor: "#DFDFDE",
            width: "100%",
            height: "40%",
            position: "absolute",
            top: "-40%",
            left: "0",
            zIndex: "0",
          },
        },
        {
          props: { grid_type: "secondary" },
          style: {
            backgroundColor: "#DFDFDE",
            padding: "0 2rem",
            position: "relative",
          },
        },
        {
          props: { grid_type: "examples" },
          style: {
            rowGap: "1rem",
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `'Source Sans Pro', sans-serif`,
          color: "#333333",
        },
      },
      variants: [
        {
          props: {
            hover: "maroon",
          },
          style: {
            fontWeight: "700",
            cursor: "pointer",
            ":hover": {
              color: "#d0004f",
            },
          },
        },
        {
          props: {
            hover: "maroon",
            arrow: "true",
          },
          style: {
            display: "flex",
            wrap: "nowrap",
            alignItems: "center",
            cursor: "pointer",
            fontWeight: "700",
          },
        },
        {
          props: {
            hover: "teal",
          },
          style: {
            fontWeight: "700",
            cursor: "pointer",
            ":hover": {
              color: "#00a0aa",
            },
          },
        },
        {
          props: {
            hover: "yellow",
          },
          style: {
            fontWeight: "700",
            cursor: "pointer",
            ":hover": {
              color: "#fabe2c",
            },
          },
        },
        {
          props: {
            title: "bold",
          },
          style: {
            fontWeight: "700",
          },
        },
        {
          props: {
            cursor: "true",
          },
          style: {
            fontWeight: "700",
            cursor: "pointer",
            marginBottom: "2.5rem",
          },
        },
      ],
    },
  },
});

const DesktopDrawer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid grid_type="main">
        <Grid display="grid" gridTemplateColumns="repeat(3, 1fr)">
          <Grid>
            <Typography variant="subtitle2" title="bold">
              WHY OKURO
            </Typography>
            <Divider />

            <Box sx={{ marginBottom: "1rem" }}>
              <Typography variant="subtitle1" hover="teal">
                Overview
              </Typography>
              <Typography variant="subtitle2">
                Everything you need to know about Okuro.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "1rem" }}>
              <Typography variant="subtitle1" hover="teal">
                Watch Demo Videos
              </Typography>
              <Typography variant="subtitle2">
                Get a preview of the app in action.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "1rem" }}>
              <Typography variant="subtitle1" hover="teal">
                See How It Works
              </Typography>
              <Typography variant="subtitle2">
                Schedule a live demo now.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "1.5rem" }}>
              <Typography variant="subtitle1" hover="teal">
                Visit Atlassian Marketplace
              </Typography>
              <Typography variant="subtitle2">
                Discover more reviews, pricing and more.
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Typography variant="subtitle2" title="bold">
              OKR EXAMPLES
            </Typography>
            <Divider />
            <Grid
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              grid_type="examples"
            >
              <Typography variant="subtitle1" hover="maroon">
                Company Level
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                Engineering Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                Product Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                Marketing Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                Design Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                Sales Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                Operations Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                Customer Service Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon">
                HR Teams
              </Typography>
              <Typography variant="subtitle1" hover="maroon" arrow="true">
                See all examples
                <ArrowRightAltIcon />
              </Typography>
            </Grid>
          </Grid>
          <Grid grid_type="secondary">
            <Grid grid_type="tertiary"></Grid>
            <Typography variant="subtitle2" title="bold">
              GUIDES
            </Typography>
            <Divider />
            <Typography variant="subtitle1" hover="yellow" cursor="true">
              Agile OKR Guide
            </Typography>
            <Typography variant="subtitle1" hover="yellow" cursor="true">
              Implementing OKRs for Agile Teams in Jira
            </Typography>
            <Typography variant="subtitle1" hover="yellow">
              Advanced JQL Magic Guide
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default DesktopDrawer;
