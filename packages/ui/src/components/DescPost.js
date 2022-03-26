import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import PostModal from "./PostModal";
function Post(props) {
  const [connected, setConnected] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* Description about the platform */}

          <Typography>☠️☠️☠️☠️</Typography>
          <Typography sx={{ marginTop: "1em" }}>
            You can only if your own an NFT .Dont't worry you can view and reply
            to posts without owning an NFT!
          </Typography>

          {/* Toggle Connect wallet and Add Post Button */}

          {connected ? (
            <>
              <Button
                sx={{
                  background: `linear-gradient(-45deg, #2dffff, #afff1a) !important`,
                  color: "black",
                  borderRadius: "20px",
                  padding: "15px",
                  width: "11em",
                  marginTop: "1em"
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
                sx={{
                  background: `linear-gradient(-45deg, #2dffff, #afff1a) !important`,
                  color: "black",
                  borderRadius: "20px",
                  padding: "15px",
                  width: "11em",
                  marginTop: "1em"
                }}
              >
                <Typography sx={{ fontSize: "0.8em !important" }}>
                  Connect to wallet
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
