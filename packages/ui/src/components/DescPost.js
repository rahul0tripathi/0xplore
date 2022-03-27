import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import PostModal from "./PostModal";
import fn from "../lens";
function Post({ user, setUser, web3Auth }) {
  const [connected, setConnected] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const login = async () => {
    console.log(user);
    if (!web3Auth) return;
    const provider = await web3Auth.connect();
    if (!web3Auth) return;
    setConnected(true);
    const w3 = new ethers.providers.Web3Provider(provider);
    setUser(await w3.getSigner(0).getAddress());
    console.log(await w3.getSigner(0).getAddress(), "here");
    await fn.getProfile(w3,user)
  };
  useEffect(() => {
    console.log(web3Auth, user);
    if (!web3Auth) return;
    console.log("web3authinit");
    const setUserCall = async () => {
      const provider = await web3Auth.connect();
      const w3 = new ethers.providers.Web3Provider(provider);
      console.log(await w3.getSigner(0).getAddress(), "here");
      setUser(await w3.getSigner(0).getAddress());
      setConnected(true);
      console.log(await w3.getSigner(0).getAddress(), "here");
    };
    setUserCall();
  }, [setUser, user, web3Auth]);
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
          padding: "1em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Description about the platform */}

          <Typography>🔥😎🔥😎🔥</Typography>
          <Typography sx={{ marginTop: "1em" }}>
            Connect your wallet to get started and to create a new post. Happy
            0xploring!!
          </Typography>

          {/* Toggle Connect wallet and Add Post Button */}

          {connected ? (
            <>
              <Button
                sx={{
                  background: `linear-gradient(45deg,#ff7a2d,#d445ff)`,
                  color: "white",
                  borderRadius: "15px",
                  padding: "10px",
                  width: "11em",
                  marginTop: "1em",
                }}
                onClick={handleOpen}
              >
                Add Post
              </Button>
              <PostModal
                open={open}
                hadleOpen={handleOpen}
                handleClose={handleClose}
              />
            </>
          ) : (
            <>
              <Button
                onClick={login}
                sx={{
                  background: `linear-gradient(-45deg, #2dffff, #afff1a) !important`,
                  color: "black",
                  borderRadius: "20px",
                  padding: "15px",
                  width: "11em",
                  marginTop: "1em",
                }}
              >
                <Typography
                  sx={{ fontSize: "0.8em !important", fontWeight: "bold" }}
                >
                  {user
                    ? `Welcome ${user.slice(0, 10)}..`
                    : "Connect to wallet"}
                </Typography>
              </Button>
            </>
          )}
        </Box>
      </Card>
    </>
  );
}

export default Post;
