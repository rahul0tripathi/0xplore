import { Container } from "@mui/material";
import React from "react";
import Post from "./Post";
import DescPost from "./DescPost";
import "../App.css";
import lana from "../assets/images/profile.webp";
function CardList() {
  return (
    <Container
      sx={{
        width: "100vw",
        padding: "5px",
        maxHeight: "85vh",
        borderRadius: "10px",
        overflowY: "scroll"
      }}
      className="scrollbar"
    >
      <DescPost />
      <Post
        address="0xAB7F2A5b0BA85bc882C7b7f651A106d7F80cb8c3"
        img={lana}
        title="This is the title of post"
        desc="this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post this is the description of the post"
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default CardList;
