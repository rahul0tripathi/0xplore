import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CardList from './components/CardList'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Roboto Mono', monospace`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 900,
    },
  },
})
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Grid
          container
          sx={{
            color: 'white',
            marginTop: '10px',
            height: `100%`,
          }}
        >
          <Grid item xl={0.5} />
          <Grid
            item
            xl={2.5}
            sx={{ border: '1px solid white', borderRadius: '20px' }}
          >
            <Box>
              <Typography>x</Typography>
            </Box>
          </Grid>
          <Grid item xl={0.5} />
          <Grid
            item
            xl={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CardList />
          </Grid>
          <Grid item xl={0.5} />
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default App
