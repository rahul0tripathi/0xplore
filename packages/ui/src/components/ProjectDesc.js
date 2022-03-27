import { Box, Typography } from "@mui/material";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import lens from "../assets/images/lens.svg";
import "./style.css";
function ProjectDesc() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#292929",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #414141"
      }}
    >
      <Typography sx={{ fontSize: "1em", marginTop: "20px", fontWeight: 900 }}>
        What is 0xplore???
      </Typography>

      <Typography
        sx={{
          width: "80%",
          marginTop: "40%",
          textAlign: "center",
          fontSize: "18px"
        }}
      >
        Build on top of lens protocol 0xplore helps in creating extended
        features such as air drops, token sales, NFT minting and many other cool
        features all as a part of the post .
      </Typography>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10px"
        }}
      >
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://github.com/rahul0tripathi/0xplore"
        >
          <AiFillGithub
            style={{ fontSize: "30px", marginRight: "5px", marginLeft: "5px" }}
          />
          <SiDiscord
            style={{ fontSize: "30px", marginRight: "5px", marginLeft: "5px" }}
          />
        </a>
      </Box>
      <Typography
        sx={{
          width: "80%",
          fontSize: "15px",
          textAlign: "center",
          float: "bottom",
          marginTop: "45%"
        }}
      >
        (Made with <a>Lens Protocol</a>&nbsp;&&&nbsp;
        <a>Polygon</a> && ❤️)
      </Typography>
    </Box>
  );
}

export default ProjectDesc;
