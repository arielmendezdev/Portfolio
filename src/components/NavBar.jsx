"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "@/assets/images/AM.png";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import "../app/globals.css";

export default function NavBar({ theme, toggleTheme }) {
  const [themeDark, setThemeDark] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar
          className="navbar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  textAlign: "start",
                  padding: "10px",
                }}
              >
                <Link href="/">
                  <Button sx={{ color: "black" }} onClick={handleClose}>
                    Inicio
                  </Button>
                </Link>
                <Link href="/acerca">
                  <Button sx={{ color: "black" }} onClick={handleClose}>
                    Acerca
                  </Button>
                </Link>
                <Link href="/proyectos">
                  <Button sx={{ color: "black" }} onClick={handleClose}>
                    Proyectos
                  </Button>
                </Link>
              </Box>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Link className="custom-link" href="/">
                Inicio
              </Link>
              <Link className="custom-link" href="/acerca">
                Acerca
              </Link>

              <Link className="custom-link" href="/proyectos">
                Proyectos
              </Link>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Image src={logo} alt="Ariel Mendez" width={50} />
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Link href="https://github.com/arielmendezdev">
              <IconButton>
                <GitHubIcon className="custom-link" />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/arimendez/">
              <IconButton>
                <LinkedInIcon className="custom-link" />
              </IconButton>
            </Link>
            <IconButton className="custom-link" onClick={toggleTheme}>
              {theme == "dark" ? <WbSunnyIcon /> : <NightsStayIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
