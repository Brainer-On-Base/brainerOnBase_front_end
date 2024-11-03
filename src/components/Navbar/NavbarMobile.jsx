import { Menu, MenuItem, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";



export default function NavbarMobile({
  pages
}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    if(anchorElNav !== null) {
      setAnchorElNav(null);
      return;
    }
    setAnchorElNav(event.currentTarget);
  };


  return (
    <>
      {/* Responsive */}
      <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
        <IconButton
          size="large"
          aria-label="Menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          style={{ zIndex: '99999999999999999999999' }}
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          sx={{
            display: { xs: "block", md: "none"},
             left: '-50px', top: '50px'
          }}
          
        >
          {pages.map((page) => (
            <MenuItem key={page.name} 
            onClick={() => {
              navigate(page.navigate);
              setAnchorElNav(null); // Cierra el menú después de la navegación
            }}>
              <Typography className="navbaritems" textAlign="center" >{page.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
