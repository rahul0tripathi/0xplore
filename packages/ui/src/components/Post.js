import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import profile from "../assets/images/profile.webp";
import { MdContentCopy } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import Action from "./Action";

function Post({ address, img, title, desc = "", profilePic = null }) {
  const [read, setRead] = useState(true);
  const [expanded, setExpanded] = useState(false);
  console.log(desc);
  
  return (
    <>
      <Card
        sx={{
          display: "flex",
          minHeight: "175px",
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
          {profilePic ? (
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
          ) : (
            <Box
              style={{
                height: "2em",
                width: "2em",
                borderRadius: "1em",
                marginRight: "6px",
                background: "linear-gradient(45deg,#9257ff,#ff5da1)"
              }}
            ></Box>
          )}

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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: `linear-gradient(45deg,#e523ff,#4548ff)`,
                padding: "5px",
                borderRadius: "10px"
              }}
            >
              <Typography
                noWrap
                sx={{
                  alignSelf: "center",
                  width: "200px",
                  fontSize: "18px"
                }}
              >
                {address?.toLowerCase()}
              </Typography>
              <MdContentCopy style={{ color: "white", marginTop: "5px" }} />
            </Box>
          </motion.button>
        </Box>
        {/* Image Title and Desc Container */}
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            width: "100%",
            height: "300px",
            textAlign: "center"
          }}
        >
          <img
            alt="post"
            src={img}
            style={{ width: "50%", borderRadius: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              marginRight: "10px",
              width: "50%"
            }}
          >
            <Typography sx={{ fontWeight: 900, fontSize: "15px" }}>
              {title}
            </Typography>
            <Box
              sx={{
                overflow: "auto",
                maxHeight: "200px",
                minHeight: "200px"
              }}
              className="xyz"
            >
              <Typography sx={{ fontSize: "15px" }}>
                {read ? desc.slice(0, 300) : desc}
              </Typography>
            </Box>
            {desc.length > 150 ? (
              <Typography
                sx={{ alignSelf: "flex-end" }}
                onClick={() => {
                  setRead(!read);
                }}
              >
                {read ? (
                  <Typography sx={{}}>..more</Typography>
                ) : (
                  <Typography sx={{}}>..less</Typography>
                )}
              </Typography>
            ) : (
              <></>
            )}
          </Box>
        </Box>

        {/* actions */}
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <motion.header
            initial={false}
            animate={{ backgroundColor: expanded ? "#292929" : "#292929" }}
            onClick={() => setExpanded(!expanded)}
            style={{ cursor: "pointer" }}
          >
            <Box
              sx={{ display: "flex", width: "100%", justifyContent: "center" }}
            >
              <Button
                sx={{
                  background: "linear-gradient(45deg,#9257ff,#ff5da1)",
                  borderRadius: "10px",
                  padding: "10px"
                }}
              >
                <Typography
                  sx={{
                    color: expanded ? "white" : "white",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  0xplore features 🔥
                </Typography>
              </Button>
            </Box>
          </motion.header>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <Action />
              </motion.section>
            )}
          </AnimatePresence>
        </Box>
      </Card>
    </>
  );
}

export default Post;
