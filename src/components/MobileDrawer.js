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
        {
          props: { font_weight: "regular" },
          style: {
            fontWeight: "400",
          },
        },
        {
          props: { font_weight: "semiBold" },
          style: {
            fontWeight: "600",
          },
        },
        {
          props: {
            font_weight: "bold",
          },
          style: {
            fontWeight: "700",
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
          sx={{ backgroundColor: backgroundColor ? "#defffb" : "#ffffff" }}
          expandIcon={<ExpandMoreIcon />}
          id="accordion-row1"
          aria-controls="accordion-row1"
        >
          <Typography font_weight="bold">Why Okuro?</Typography>
        </AccordionSummary>
        <AccordionDetails padding_primary="true">
          <Typography variant="caption" font_weight="semiBold">
            WHY OKURO
          </Typography>
          <Divider divider="primary" />
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" font_weight="bold">
              Overview
            </Typography>
            <Typography variant="caption" font_weight="regular">
              Everything you need to know about Okuro.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" font_weight="bold">
              Watch Demo Videos
            </Typography>
            <Typography variant="caption" font_weight="regular">
              Get a preview of the app in action.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle2" font_weight="bold">
              See How It Works
            </Typography>
            <Typography variant="caption" font_weight="regular">
              Schedule a live demo now.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="subtitle2" font_weight="bold">
              Visit Atlassian Marketplace
            </Typography>
            <Typography variant="caption" font_weight="regular">
              Discover more reviews, pricing and more.
            </Typography>
          </Box>

          <Typography variant="caption" font_weight="semiBold">
            OKR EXAMPLES
          </Typography>
          <Divider divider="primary" />

          <Grid
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            grid="primary"
          >
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Company Level
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Engineering Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Product Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Marketing Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Design Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Sales Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Operations Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
                Customer Service Teams
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" font_weight="bold">
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
        <AccordionDetails sx={{ padding: "0" }}>
          <Grid grid="secondary">
            <Typography variant="caption" font_weight="semiBold">
              GUIDES
            </Typography>
            <Divider divider="secondary" />
            <Typography
              variant="subtitle2"
              content_text="end"
              font_weight="bold"
            >
              Agile OKR Guide
            </Typography>
            <Typography
              variant="subtitle2"
              content_text="end"
              font_weight="bold"
            >
              Implementing OKRs for Agile Teams in Jira
            </Typography>
            <Typography variant="subtitle2" font_weight="bold">
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
          <Typography font_weight="bold">Features</Typography>
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
          <Typography font_weight="bold">Resources</Typography>
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
          <Typography font_weight="bold">Enterprise</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary id="accordion-row5" aria-controls="accordion-row5">
          <Typography font_weight="bold">Pricing</Typography>
        </AccordionSummary>
      </Accordion>
    </ThemeProvider>
  );
};

export default MobileDrawer;
