import { Box, Typography } from "@mui/material";
import React from "react";
import { MdContentCopy } from "react-icons/md";
import { motion } from "framer-motion";
function Profile({ pic, address }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src={pic}
          alt="profile pic"
          style={{
            width: "150px",
            height: "150px"
          }}
        />
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
          }}
        >
          <Typography noWrap sx={{ alignSelf: "center", width: "170px" }}>
            {address}
          </Typography>
          <MdContentCopy style={{ color: "white", marginTop: "5px" }} />
        </motion.button>
      </Box>
    </>
  );
}

export default Profile;
