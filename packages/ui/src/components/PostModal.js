import { Box, Modal, TextField } from "@mui/material";
import React, { useState } from "react";

function PostModal({ open, handleClose }) {
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
          backgroundColor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          height: "200px"
        }}
      >
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "50%", height: "100px" }}>
            <Box
              sx={{
                height: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <input
                id="upload-photo"
                type="file"
                name="PostImg"
                onChange={event => {
                  console.log(event.target.file[0]);
                  setPostImage(event.target.file[0]);
                }}
                style={{ width: "100%" }}
              />
              {/* To access the image URL.createObjectURL(postImage) */}
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              margin: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end"
            }}
          >
            <TextField
              label="Title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <TextField
              label="Desc"
              multiline
              maxRows={2}
              value={desc}
              onChange={event => setDesc(event.target.value)}
              sx={{ height: "50px !important", marginTop: "30px" }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default PostModal;
