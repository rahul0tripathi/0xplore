import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import logo from '../assets/images/logo.jpg'
function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100px !important',
      }}
    >
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#141414 !important',
          height: '100%',
          borderTop: '0.2% solid gray',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid lightgray',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              width: '60%',
              justifyContent: 'space-evenly',
              padding: '10px',
            }}
          >
            <Typography
              sx={{
                fontWeight: '900',
                fontSize: '40px',
                color: 'lightgray',
                letterSpacing: '2px',
              }}
            >
              0xplore
            </Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={logo}
                alt='logo'
                style={{
                  height: '40px',
                  width: '40px',
                  borderRadius: '50%',
                  marginRight: '5px',
                  opacity: '0.9',
                }}
              />
              <Button
                sx={{
                  background: `linear-gradient(-45deg, #2dffff, #afff1a) !important`,
                  color: 'black',
                  borderRadius: '20px',
                  padding: '20px',
                }}
              >
                <Typography sx={{ fontSize: '15px !important' }}>
                  Connect to wallet
                </Typography>
              </Button>
            </div>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Navbar
