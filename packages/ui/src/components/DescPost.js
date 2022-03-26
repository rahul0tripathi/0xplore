import { Box, Card, Typography } from '@mui/material'
import React from 'react'

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography>☠️☠️☠️☠️</Typography>
          <Typography sx={{ marginTop: '1em' }}>
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah
          </Typography>
        </Box>
      </Card>
    </>
  )
}

export default Post
