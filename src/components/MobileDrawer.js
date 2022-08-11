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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { createTheme, ThemeProvider } from "@mui/material/styles/";

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

const MobileDrawer = () => {
  const [backgroundColor, setBackgroundColor] = useState(false);

  const handleClick = () => {
    setBackgroundColor(!backgroundColor);
  };

  return (
    <ThemeProvider theme={theme}>
      <Accordion onClick={handleClick} disableGutters>
        <AccordionSummary
          style={{ backgroundColor: backgroundColor ? "#defffb" : "#ffffff" }}
          expandIcon={<ExpandMoreIcon />}
          id="accordion-row1"
          aria-controls="accordion-row1"
        >
          <Typography style={{ fontWeight: "bold" }}>Why Okuro?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "0.5rem 1rem 0 1rem" }}>
          <Typography variant="caption" style={{ fontWeight: "bold" }}>
            WHY OKURO
          </Typography>
          <Divider style={{ margin: "0.5rem 0 1rem 0" }} />
          <Box style={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Overview
            </Typography>
            <Typography variant="caption">
              Everything you need to know about Okuro.
            </Typography>
          </Box>

          <Box style={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Watch Demo Videos
            </Typography>
            <Typography variant="caption">
              Get a preview of the app in action.
            </Typography>
          </Box>

          <Box style={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              See How It Works
            </Typography>
            <Typography variant="caption">Schedule a live demo now.</Typography>
          </Box>

          <Box style={{ marginBottom: "1.5rem" }}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Visit Atlassian Marketplace
            </Typography>
            <Typography variant="caption">
              Discover more reviews, pricing and more.
            </Typography>
          </Box>

          <Typography variant="caption" style={{ fontWeight: "bold" }}>
            OKR EXAMPLES
          </Typography>
          <Divider style={{ margin: "0.5rem 0 1rem 0" }} />

          <Grid
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            style={{ rowGap: "1rem", marginBottom: "1.5rem" }}
          >
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Company Level
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Engineering Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Product Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Marketing Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Design Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Sales Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Operations Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                Customer Service Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                HR Teams
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                style={{ fontWeight: "bold", display: "flex", wrap: "nowrap" }}
              >
                See all examples
                <ArrowRightAltIcon />
              </Typography>
            </Box>
          </Grid>
        </AccordionDetails>
        <AccordionDetails style={{ padding: "0" }}>
          <Grid style={{ backgroundColor: "#DFDFDE", padding: "1.5rem 1rem" }}>
            <Typography variant="caption" style={{ fontWeight: "bold" }}>
              GUIDES
            </Typography>
            <Divider style={{ margin: "0.5rem 2.5rem 1rem 0" }} />
            <Typography
              variant="subtitle2"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Agile OKR Guide
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Implementing OKRs for Agile Teams in Jira
            </Typography>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Advanced JQL Magic Guide
            </Typography>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="accordion-row2"
          aria-controls="accordion-row2"
        >
          <Typography style={{ fontWeight: "bold" }}>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            optio laboriosam suscipit fuga natus illum facilis nobis blanditiis
            ipsum eaque ut quisquam doloremque consectetur sit. Voluptates
            pariatur magnam mollitia laborum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="accordion-row3"
          aria-controls="accordion-row3"
        >
          <Typography style={{ fontWeight: "bold" }}>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            optio laboriosam suscipit fuga natus illum facilis nobis blanditiis
            ipsum eaque ut quisquam doloremque consectetur sit. Voluptates
            pariatur magnam mollitia laborum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary id="accordion-row4" aria-controls="accordion-row4">
          <Typography style={{ fontWeight: "bold" }}>Enterprise</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary id="accordion-row5" aria-controls="accordion-row5">
          <Typography style={{ fontWeight: "bold" }}>Pricing</Typography>
        </AccordionSummary>
      </Accordion>
    </ThemeProvider>
  );
};

export default MobileDrawer;
