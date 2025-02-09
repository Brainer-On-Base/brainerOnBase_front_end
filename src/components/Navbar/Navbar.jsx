import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledNavbarContainer } from "../styled-components/container";
import { Stack } from "@mui/material";
import ConnectWallet from "../ConnectWallet";
import NavbarMobile from "./NavbarMobile";

function Navbar({ setItem, item }) {
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

    // {
    //   name: 'TOKENOMICS',
    //   navigate: '/home#tokenomics',
    // },
    // {
    //   name: 'SWAP',
    //   navigate: '/home#swap',
    // },
    // {
    //   name: 'MARKETPLACE',
    //   navigate: '/shop',
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
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Stack flexDirection={"row"} alignItems={"center"}>
              <img
                src="/commonBrainer.png"
                onClick={() => {
                  navigate("/home"), setItem("/home");
                }}
                style={{ cursor: "pointer" }}
              />
              <Typography
                onClick={() => {
                  navigate("/home#home"), setItem("/home");
                }}
                className="navbaritems"
                textAlign="center"
              >
                {isPlaying ? "GO BACK" : "BRAINER"}
              </Typography>
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
                      navigate(page.navigate),
                        setItem(
                          page.navigate !== "/home#tokenomics"
                            ? page.navigate
                            : item
                        );
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
          <NavbarMobile pages={pages} setItem={setItem} />
        </Toolbar>
      </Container>
    </StyledNavbarContainer>
  );
}

export default Navbar;
