import { Box, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import profile from "../assets/images/profile.webp";
import { MdContentCopy } from "react-icons/md";
import { motion } from "framer-motion";
import "./Post.css";
function Post({ address, img, title, desc = "" }) {
  const [read, setRead] = useState(true);
  console.log(desc);
  return (
    <>
      <Card
        sx={{
          display: "flex",
          minHeight: "175px",
          maxHeight: "400px",
          background: "#292929",
          borderRadius: "15px",
          border: "2px solid #414141",
          flexDirection: "column",
          marginTop: "2rem !important",
          marginBottom: "2rem !important",
          color: "white",
          padding: "1em"
        }}
      >
        {/* Profile pic and address */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={profile}
            alt="profile "
            style={{
              height: "2em",
              width: "2em",
              borderRadius: "1em",
              marginRight: "6px"
            }}
          />

          <motion.button
            whileTap={{ opacity: 0.2 }}
            style={{
              background: "transparent",
              border: "0",
              display: "flex",
              color: "white",
              alignItems: "center"
            }}
            onClick={() => {
              console.log("clicked");
              navigator.clipboard.writeText(`${address}`);
            }}
          >
            <Typography noWrap sx={{ alignSelf: "center", width: "40%" }}>
              {address}
            </Typography>
            <MdContentCopy style={{ color: "white", marginTop: "5px" }} />
          </motion.button>
        </Box>
        {/* Image Title and Desc Container */}
        <Box sx={{ marginTop: "10px", display: "flex" }}>
          <img
            alt="post"
            src={img}
            style={{ width: "60%", height: "200px", borderRadius: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              marginRight: "10px"
            }}
          >
            <Typography sx={{ fontWeight: 900, fontSize: "15px" }}>
              {title}
            </Typography>
            <Box
              sx={{
                overflow: "auto",
                maxHeight: "30%",
                minHeight: "120px"
              }}
              className="xyz"
            >
              <Typography sx={{ fontSize: "12px" }}>
                {read ? desc.slice(0, 150) : desc}
              </Typography>
            </Box>
            <Typography
              sx={{ fontsize: "12px", alignSelf: "flex-end" }}
              onClick={() => {
                setRead(!read);
              }}
            >
              {read ? (
                <Typography sx={{ fontsize: "12px" }}>..more</Typography>
              ) : (
                <Typography sx={{ fontsize: "12px" }}>..less</Typography>
              )}
            </Typography>
          </Box>
        </Box>
        {/* actions */}
      </Card>
    </>
  );
}

export default Post;
