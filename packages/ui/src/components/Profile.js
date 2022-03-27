import { Box, Typography } from "@mui/material";
import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";
function Profile({ pic = null, address, username }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {pic ? (
          <img
            src={pic}
            alt="profile pic"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%"
            }}
          />
        ) : (
          <Box
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "linear-gradient(45deg,#9257ff,#ff5da1)"
            }}
          ></Box>
        )}
        <Typography sx={{ marginTop: "10px", fontSize: "25px" }}>
          @{username}
        </Typography>
        <motion.button
          whileTap={{ opacity: 0.2 }}
          style={{
            background: "transparent",
            border: "0",
            display: "flex",
            color: "white",
            alignItems: "center",
            marginTop: "10px"
          }}
          onClick={() => {
            console.log("clicked");
            navigator.clipboard.writeText(`${address}`);
            window.open(`https://mumbai.polygonscan.com/address/${address}`);
          }}
        >
          <Typography noWrap sx={{ alignSelf: "center", width: "170px" }}>
            {address?.toLowerCase()}
          </Typography>
          <GoLinkExternal style={{ color: "white", marginTop: "5px" }} />
        </motion.button>
        <Box
          sx={{
            background: "#292929",
            height: "400px",
            width: "400px",
            position: "absolute",
            zIndex: "-10",
            top: "25%",
            borderRadius: "15px",
            border: "2px solid #414141"
          }}
        ></Box>
      </Box>
    </>
  );
}

export default Profile;
