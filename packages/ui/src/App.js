import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardList from "./components/CardList";
import Profile from "./components/Profile";
import profilepic from "./assets/images/profile.webp";
import ProjectDesc from "./components/ProjectDesc";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Roboto Mono', monospace`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 900
    }
  }
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid
          container
          sx={{
            color: "white",
            height: `100%`,
            display: "flex",
            justifyContent: "center"
          }}
        >
          {/* dumper */}
          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block"
              }
            }}
          />

          {/* Desc  grid */}
          <Grid
            item
            xl={2.5}
            lg={2.5}
            sx={{
              padding: "5px !important",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "flex",
                lg: "none"
              },
              justifyContent: "center",
              marginTop: "2rem"
            }}
          >
            <ProjectDesc />
          </Grid>

          {/* dumper */}
          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block"
              }
            }}
          />

          {/* posts grid */}
          <Grid
            item
            xl={5}
            lg={5}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <CardList />
          </Grid>

          {/* dumper */}
          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block"
              }
            }}
          />

          {/* profile grid */}
          <Grid
            item
            xl={2.5}
            lg={2.5}
            sx={{
              justifyContent: "center",
              marginTop: "2rem",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "flex",
                lg: "none"
              }
            }}
          >
            <Profile
              address="0xAB7F2A5b0BA85bc882C7b7f651A106d7F80cb8c3"
              username="Dewansh Shukla"
            />
          </Grid>
          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block"
              }
            }}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
