import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardList from "./components/CardList";
import Profile from "./components/Profile";
import profilepic from "./assets/images/profile.webp";
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
            marginTop: "10px",
            height: `100%`
          }}
        >
          {/* dumper */}
          <Grid item xl={0.5} sm={0} />

          {/* followers grid */}
          <Grid
            item
            xl={2.5}
            sm={0}
            sx={{ border: "1px solid white", borderRadius: "20px" }}
          >
            <Box>
              <Typography>x</Typography>
            </Box>
          </Grid>

          {/* dumper */}
          <Grid item xl={0.5} sm={0} />

          {/* posts grid */}
          <Grid
            item
            xl={5}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <CardList />
          </Grid>

          {/* dumper */}
          <Grid item xl={0.5} sm={0} />

          {/* profile grid */}
          <Grid
            item
            xl={2.5}
            sm={0}
            sx={{
              border: "1px solid gray",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              marginTop: "2rem"
            }}
          >
            <Profile
              pic={profilepic}
              address="0xAB7F2A5b0BA85bc882C7b7f651A106d7F80cb8c3"
            />
          </Grid>
          <Grid item xl={0.5} sm={0} />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
