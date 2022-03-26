import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import profile from '../assets/images/profile.webp'
function Post(props) {
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          minHeight: '175px',
          background: '#292929',
          borderRadius: '15px',
          border: '2px solid #414141',
          flexDirection: 'column',
          marginTop: '2rem !important',
          marginBottom: '2rem !important',
          color: 'white',
          padding: '1em',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={profile}
            alt='profile '
            style={{ height: '2em', width: '2em', borderRadius: '1em' }}
          />
          <Typography>Hello there</Typography>
        </Box>
      </Card>
    </>
  )
}

export default Post
