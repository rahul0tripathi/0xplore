import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { RiDragDropFill } from "react-icons/ri";
import { BiDonateBlood } from "react-icons/bi";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  label: {
    color: "white"
  }
});

function Action() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "10px"
      }}
    >
      {/* air drop */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <RiDragDropFill style={{ fontSize: "30px" }} />
        <Typography>Claim your drop</Typography>
        <Button
          sx={{
            background: "linear-gradient(45deg,#9257ff,#ff5da1)",
            width: "20%",
            color: "white",
            border: 0,
            borderRadius: "8px",
            padding: "10px"
          }}
        >
          Claim
        </Button>
      </Box>
      {/* donate */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <BiDonateBlood style={{ fontSize: "30px" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "30%"
          }}
        >
          <Typography>Donate</Typography>
          <TextField
            label="$"
            variant="filled"
            type="number"
            inputProps={{ className: classes.label }}
            InputLabelProps={{ className: classes.label }}
            sx={{ color: "white", width: "40%" }}
          ></TextField>
          <Typography>USDC</Typography>
        </Box>
        <Button
          sx={{
            background: "linear-gradient(45deg,#9257ff,#ff5da1)",
            width: "20%",
            color: "white",
            border: 0,
            borderRadius: "8px",
            padding: "10px"
          }}
        >
          Donate
        </Button>
      </Box>
      {/* mint */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <RiDragDropFill style={{ fontSize: "30px" }} />
        <Typography>Mint your nft</Typography>
        <Button
          sx={{
            background: "linear-gradient(45deg,#9257ff,#ff5da1)",
            width: "20%",
            color: "white",
            border: 0,
            borderRadius: "8px",
            padding: "10px"
          }}
        >
          Mint
        </Button>
      </Box>
    </Box>
  );
}

export default Action;
