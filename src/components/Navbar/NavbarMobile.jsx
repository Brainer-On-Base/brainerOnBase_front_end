import { Menu, MenuItem, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function NavbarMobile({
  pages
}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={() => {
              navigate(page.navigate);
              handleCloseNavMenu(); // Cierra el menú después de la navegación
            }}>
              <Typography className="navbaritems" textAlign="center">{page.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
