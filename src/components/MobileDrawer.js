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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333333",
          fontFamily: `'Source Sans Pro', sans-serif`,
        },
      },
      variants: [
        {
          props: { title_text: "bold" },
          style: {
            fontWeight: "700",
          },
        },
        {
          props: { content_text: "end" },
          style: {
            marginBottom: "1rem",
          },
        },
        {
          props: { text_type: "examples" },
          style: {
            fontWeight: "700",
            display: "flex",
            wrap: "nowrap",
          },
        },
      ],
    },
    AccordionDetails: {
      variants: [
        {
          props: { padding_primary: "true" },
          style: {
            padding: "0.5rem 1rem 0 1rem",
          },
        },
      ],
    },
    MuiDivider: {
      variants: [
        {
          props: { divider: "primary" },
          style: {
            margin: "0.5rem 0 1rem 0",
          },
        },
        {
          props: { divider: "secondary" },
          style: {
            margin: "0.5rem 2.5rem 1rem 0",
          },
        },
      ],
    },
    MuiGrid: {
      variants: [
        {
          props: { grid: "primary" },
          style: {
            rowGap: "1rem",
            marginBottom: "1.5rem",
          },
        },
        {
          props: { grid: "secondary" },
          style: {
            backgroundColor: "#DFDFDE",
            padding: "1.5rem 1rem",
          },
        },
      ],
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
          <Typography title_text="bold">Why Okuro?</Typography>
        </AccordionSummary>
        <AccordionDetails padding_primary="true">
          <Typography variant="caption" title_text="bold">
            WHY OKURO
          </Typography>
          <Divider divider="primary" />
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" title_text="bold">
              Overview
            </Typography>
            <Typography variant="caption">
              Everything you need to know about Okuro.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" title_text="bold">
              Watch Demo Videos
            </Typography>
            <Typography variant="caption">
              Get a preview of the app in action.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" title_text="bold">
              See How It Works
            </Typography>
            <Typography variant="caption">Schedule a live demo now.</Typography>
          </Box>

          <Box sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="subtitle2" title_text="bold">
              Visit Atlassian Marketplace
            </Typography>
            <Typography variant="caption">
              Discover more reviews, pricing and more.
            </Typography>
          </Box>

          <Typography variant="caption" title_text="bold">
            OKR EXAMPLES
          </Typography>
          <Divider divider="primary" />

          <Grid
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            grid="primary"
          >
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Company Level
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Engineering Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Product Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Marketing Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Design Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Sales Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Operations Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                Customer Service Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" title_text="bold">
                HR Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" text_type="examples">
                See all examples
                <ArrowRightAltIcon />
              </Typography>
            </Box>
          </Grid>
        </AccordionDetails>
        <AccordionDetails style={{ padding: "0" }}>
          <Grid grid="secondary">
            <Typography variant="caption" title_text="bold">
              GUIDES
            </Typography>
            <Divider divider="secondary" />
            <Typography
              variant="subtitle2"
              content_text="end"
              title_text="bold"
            >
              Agile OKR Guide
            </Typography>
            <Typography
              variant="subtitle2"
              content_text="end"
              title_text="bold"
            >
              Implementing OKRs for Agile Teams in Jira
            </Typography>
            <Typography variant="subtitle2" title_text="bold">
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
          <Typography title_text="bold">Features</Typography>
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
          <Typography title_text="bold">Resources</Typography>
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
          <Typography title_text="bold">Enterprise</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary id="accordion-row5" aria-controls="accordion-row5">
          <Typography title_text="bold">Pricing</Typography>
        </AccordionSummary>
      </Accordion>
    </ThemeProvider>
  );
};

export default MobileDrawer;
