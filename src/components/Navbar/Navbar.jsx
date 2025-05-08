import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import NavbarMobile from "./NavbarMobile";
import BrainerOnBaseTitle from "../BrainerOnBaseTitle/BrainerOnBaseTitle";
import { StyledNavbarContainer } from "./navbar.styled";
import { HTitle } from "../../HocComponents";
import { transform } from "framer-motion";

function Navbar({}) {
  const location = useLocation();
  const isPlaying = location.pathname === "/game";

  const pages = [
    {
      name: "HISTORY",
      navigate: "/home#history",
    },
    // {
    //   name: 'ABOUT',
    //   navigate: '/home#about',
    // },
    {
      name: "Roadmap",
      navigate: "/home#roadmap",
    },

    {
      name: "NFT's",
      navigate: "/nft-list",
    },
    {
      name: "TOKEN",
      navigate: "/token-details",
    },
    {
      name: "SOCIETY",
      navigate: "/society",
    },
    // {
    //   name: 'TOKENOMICS',
    //   navigate: '/home#tokenomics',
    // },
    // {
    //   name: "MARKETPLACE",
    //   navigate: "/marketplace",
    // },
    // isConnected && {
    //   name: "HUB",
    //   navigate: "/playerHub",
    // },
    // {
    //   name: 'LAUNCH',
    //   navigate: '/game',
    // },
    {
      name: "Wallet",
      component: <ConnectWallet />,
    },
  ];

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledNavbarContainer position="fixed" scrolled={scrolled}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <Stack flexDirection={"column"} alignItems={"center"}>
              <BrainerOnBaseTitle text={isPlaying ? "GO BACK" : null} />
              <HTitle
                useTitleCase={false}
                fontSize={"14px"}
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "0%",
                }}
              >
                🧠 Test version – Base Sepolia (dev) 🧠
              </HTitle>
            </Stack>
          </Box>

          {/* Desktop */}
          {!isPlaying && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) =>
                page.name === "Wallet" ? (
                  <React.Fragment key={page.name}>
                    {page.component}
                  </React.Fragment>
                ) : (
                  <Button
                    className="navbaritems"
                    key={page.name}
                    onClick={() => {
                      navigate(page.navigate);
                    }}
                  >
                    {page.name}
                  </Button>
                )
              )}
            </Box>
          )}

          {isPlaying && (
            <React.Fragment key={"Wallet"}>
              {pages[pages.length - 1]?.component}
            </React.Fragment>
          )}

          {/* Mobile */}
          <NavbarMobile pages={pages} />
        </Toolbar>
      </Container>
    </StyledNavbarContainer>
  );
}

export default Navbar;
