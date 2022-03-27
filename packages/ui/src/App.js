import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardList from "./components/CardList";
import Profile from "./components/Profile";
import profilepic from "./assets/images/profile.webp";
import ProjectDesc from "./components/ProjectDesc";
import { ADAPTER_EVENTS, CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3Auth } from "@web3auth/web3auth";
import globalAccountState from "./states/account";
import { useState as hookUseState } from "@hookstate/core";
import fn from "./lens";
import { ethers } from "ethers";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Roboto Mono', monospace`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 900,
    },
  },
});
function App() {
  const [user, setUser] = useState(null);
  const [web3auth, setWeb3Auth] = useState(null);
  const [posts, setPosts] = useState(null);
  const loadPosts = async () => {
   let data =  await fn.getPosts();
   setPosts(data)
  };
  useEffect(() => {
    const subscribeAuthEvents = (web3auth) => {
      web3auth.on(ADAPTER_EVENTS.CONNECTED, async (data) => {
        console.log("Yeah!, you are successfully logged in", data);
        const provider = await web3auth.connect();
        const w3 = new ethers.providers.Web3Provider(provider);

        await fn.configureLens(w3, await w3.getSigner(0).getAddress());
        await loadPosts();
      });

      web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("connecting");
      });

      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
        setUser(null);
      });

      web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.log("some error or user have cancelled login request", error);
      });
    };
    const polygonMumbaiConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      rpcTarget: ["http://localhost:8545"],
      blockExplorer: "https://mumbai-explorer.matic.today",
      chainId: "0x539",
      displayName: "Polygon Mumbai Testnet",
      ticker: "matic",
      tickerName: "matic",
    };
    const web3auth = new Web3Auth({
      chainConfig: polygonMumbaiConfig,
      clientId:
        "BJLHCIB81RLxR8rW_7PXyontiC-sMTZ55oekAkJWci0yoTJelOD3h0jGaOESccwOfBCnxSgTdGBPwscuAun-wWk",
    });
    setWeb3Auth(web3auth);
    const initializeModal = async () => {
      console.log("initializeModal");
      subscribeAuthEvents(web3auth);
      await web3auth.initModal();
    };

    initializeModal();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar user={user} setUser={setUser} web3Auth={web3auth} />
        <Grid
          container
          sx={{
            color: "white",
            height: `100%`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* dumper */}
          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block",
              },
            }}
          />

          {/* Desc  grid */}
          <Grid
            item
            xl={2.5}
            lg={2.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "flex",
                lg: "flex",
              },
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <ProjectDesc />
          </Grid>

          {/* dumper */}
          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block",
              },
            }}
          />

          {/* posts grid */}
          <Grid
            item
            xl={5}
            lg={5}
            sm={10}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardList user={user} setUser={setUser} web3Auth={web3auth} posts={posts}/>
          </Grid>

          {/* dumper */}
          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block",
              },
            }}
          />

          {/* profile grid */}
          <Grid
            item
            xl={2.5}
            lg={2.5}
            sx={{
              justifyContent: "center",
              marginTop: "2rem",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "flex",
                lg: "flex",
              },
            }}
          >
            <Profile />
          </Grid>

          <Grid
            item
            xl={0.5}
            lg={0.5}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                xl: "block",
                lg: "block",
              },
            }}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
