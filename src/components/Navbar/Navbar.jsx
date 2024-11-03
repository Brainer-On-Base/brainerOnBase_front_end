import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledNavbarContainer } from '../styled-components/container';
import { Stack } from '@mui/material';
import ConnectWallet from '../ConnectWallet';
import NavbarMobile from './NavbarMobile';

function Navbar({
  setItem,
  item
}) {

  const pages = [
    {
      name: 'HISTORY',
      navigate: '/home#history',
    },
    // {
    //   name: 'ABOUT',
    //   navigate: '/home#about',
    // },
    {
      name: 'Roadmap',
      navigate: '/home#roadmap',
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
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Stack flexDirection={'row'} alignItems={'center'}>
              <img
                src="./brainerCoin.png"
                onClick={() => navigate('/home')}
                style={{ cursor: 'pointer' }}
              />
                <Typography onClick={() => {navigate('/home'), setItem('/home')}} className="navbaritems" textAlign="center">BRAINER</Typography>
            </Stack>
          </Box>

          {/* Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className='navbaritems'
                key={page.name}
                onClick={() => {navigate(page.navigate), setItem(page.navigate !== '/home#tokenomics' ? page.navigate : item)}}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile */}
          <NavbarMobile pages={pages}/>
        </Toolbar>
      </Container>
    </StyledNavbarContainer>
  );
}

export default Navbar;
