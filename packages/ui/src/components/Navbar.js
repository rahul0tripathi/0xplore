import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import fn from "../lens";
function Navbar({ user, setUser, web3Auth }) {
  const [disableLogin, setdisableLogin] = useState(false);
  const login = async () => {
    console.log(user);
    if (!web3Auth) return;
    const provider = await web3Auth.connect();
    if (!web3Auth) return;
    setdisableLogin(true);
    const w3 = new ethers.providers.Web3Provider(provider);
    setUser(await w3.getSigner(0).getAddress());
    console.log(await w3.getSigner(0).getAddress(), "here");
  };
  useEffect(() => {
    console.log(web3Auth, user);
    if (!web3Auth) return;
    console.log("web3authinit");
    const setUserCall = async () => {
      const provider = await web3Auth.connect();
      const w3 = new ethers.providers.Web3Provider(provider);
      setdisableLogin(true);
       fn.configureLens(w3,await w3.getSigner(0).getAddress())
    };
    setUserCall();
  }, [setUser, user, web3Auth]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "125px !important",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#141414 !important",
          height: "100%",
          borderTop: "0.2% solid gray",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid lightgray",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              width: "65%",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "2em",
                color: "white",
                letterSpacing: "2px",
                marginLeft: "3%",
              }}
            >
              0xplore
            </Typography>

            <Button
              onClick={login}
              disabled={disableLogin}
              sx={{
                background: `linear-gradient(-45deg, #2dffff, #afff1a) !important`,
                color: "black",
                borderRadius: "20px",
                padding: "0.9em",
                margin: "10px",
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: 900,
                }}
              >
                {user ? `Welcome ${user.slice(0,10)}..` : 'Connect to wallet'}
              </Typography>
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
