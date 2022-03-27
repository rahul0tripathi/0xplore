import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  label: {
    color: "white"
  }
});

function PostModal({ open, handleClose }) {
  const classes = useStyles();
  const [postImage, setPostImage] = useState(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          background: "#292929",
          borderRadius: "20px",
          boxShadow: 24,
          p: 4,
          height: "300px"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <label htmlFor="upload-photo" style={{}}>
              <TextField
                id="upload-photo"
                type="file"
                name="PostImg"
                onChange={event => {
                  console.log(event.target.file[0]);
                  setPostImage(event.target.file[0]);
                }}
                style={{ display: "none" }}
              />
              <Button
                color="secondary"
                variant="contained"
                component="span"
                sx={{ background: "linear-gradient(45deg,#9257ff,#ff5da1)" }}
              >
                Upload Media
              </Button>
            </label>
            {/* To access the image URL.createObjectURL(postImage) */}
            <TextField
              label="Title"
              required
              variant="filled"
              value={title}
              onChange={event => setTitle(event.target.value)}
              sx={{ input: { color: "white" } }}
              InputLabelProps={{
                className: classes.label
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "5px",
              display: "flex"
            }}
          >
            <TextField
              label="Desc"
              id="filled-multiline-static"
              multiline
              variant="filled"
              rows={4}
              value={desc}
              onChange={event => setDesc(event.target.value)}
              sx={{
                marginTop: "30px",
                width: "100%",
                input: { color: "white" }
              }}
              InputLabelProps={{
                className: classes.label
              }}
              inputProps={{
                className: classes.label
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px"
            }}
          >
            <Button
              style={{
                width: "20%",
                color: "white",
                background: "linear-gradient(45deg,#9257ff,#ff5da1)",
                border: 0,
                borderRadius: "8px",
                padding: "10px"
              }}
            >
              <Typography sx={{ fontSize: "15px", letterSpacing: "2px" }}>
                Post
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default PostModal;
