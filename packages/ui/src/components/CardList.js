import { Container } from '@mui/material'
import React from 'react'
import Post from './Post'
import DescPost from './DescPost'
import '../App.css'
function CardList() {
  return (
    <Container
      sx={{
        width: '100%',
        padding: '0 !important',
        margin: 0,
        maxHeight: '85vh',
        borderRadius: '10px',
        overflowY: 'scroll',
      }}
      className='scrollbar'
    >
      <DescPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  )
}

export default CardList
