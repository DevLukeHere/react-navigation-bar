import React from "react";
import { Typography, Grid, Container } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles/";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { title: "header" },
          style: {
            fontWeight: "bold",
            textAlign: "center",
            margin: "1rem 0",
          },
        },
        {
          props: { type: "bottom" },
          style: {
            marginBottom: "1rem",
          },
        },
      ],
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid>
          <Typography variant="h6" title="header">
            Pseudo code for range slider
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="subtitle1" type="bottom">
            Create a variable called "slider" and get the element ID of the
            slider input
          </Typography>
          <Typography variant="subtitle1" type="bottom">
            Create a variable called "output" and get the element ID of the
            displayed value of the slider (i.e. the investment value of the
            user)
          </Typography>
          <Typography variant="subtitle1" type="bottom">
            Set the minimum input of the slider to be at $0 and maximum to be at
            $50,000.
          </Typography>
          <Typography variant="subtitle1" type="bottom">
            Create a function to get the current value of the slider as the user
            scrubs the slider
          </Typography>
          <Typography variant="subtitle1" type="bottom">
            If the value of the slider is between $15,0000 and $0, display the
            "Our clients find the most success with monthly investments above
            $15,000". If it is above $15,000, hide the text.
          </Typography>
          <Typography variant="subtitle1" type="bottom">
            If the value of the slider is between $15,0000 and $0, the colour of
            the value should be grey. If it is above $15,000, it should be
            black.
          </Typography>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
