import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "125px !important"
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#141414 !important",
          height: "100%",
          borderTop: "0.2% solid gray"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid lightgray"
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              width: "65%",
              justifyContent: "space-evenly"
            }}
          >
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "2em",
                color: "lightgray",
                letterSpacing: "2px",
                marginLeft: "3%"
              }}
            >
              0xplore
            </Typography>

            <Button
              sx={{
                background: `linear-gradient(-45deg, #2dffff, #afff1a) !important`,
                color: "black",
                borderRadius: "20px",
                padding: "0.9em",
                margin: "10px"
              }}
            >
              <Typography sx={{ fontSize: "1em", fontWeight: 900 }}>
                Connect to wallet
              </Typography>
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
