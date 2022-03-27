import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";
import { ethers } from "ethers";
import fn from "../lens";
function Profile() {
  const [pic, setPic] = useState(null);
  const [address, setAddress] = useState(null);
  const [username, setUserName] = useState(null);
  useEffect(() => {
    console.log("profile init");
    const setUserCall = async () => {
      const profile = await fn.getProfile();
      console.log(profile);
      if (profile) {
        setPic(null);
        setUserName(profile?.handle);
        setAddress(profile?.address);
      }
    };
    setUserCall();
  });
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {pic ? (
          <img
            src={pic}
            alt="profile pic"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          />
        ) : (
          <Box
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "linear-gradient(45deg,#9257ff,#ff5da1)",
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
            marginTop: "10px",
          }}
          onClick={() => {
            console.log("clicked");
            navigator.clipboard.writeText(`${address}`);
            window.open(`https://mumbai.polygonscan.com/address/${address}`);
          }}
        >
          <Typography noWrap sx={{ alignSelf: "center", width: "170px" }}>
            {address?.toLowerCase().slice(0,18)}
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
            border: "2px solid #414141",
          }}
        ></Box>
      </Box>
    </>
  );
}

export default Profile;
