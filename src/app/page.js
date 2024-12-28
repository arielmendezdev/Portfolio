"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ariel from "@/assets/images/Foto.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    const filePath = "/CV.ArielMendez.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "CV.ArielMendez.pdf";
    link.click();
  };

  const handleContacto = () => {
    setContacto(true);
  };

  return (
    <div>
      <Box sx={{ margin: 10 }}>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src={ariel} alt="Ariel Mendez" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography sx={{ fontSize: 20 }}>
              ¡Bienvenido a mi portfolio! Soy un apasionado desarrollador Full
              Stack con experiencia en diseño UX/UI, dedicado a crear
              experiencias digitales atractivas y centradas en el usuario. Con
              una base sólida en el desarrollo Front End y Back End, mezclo mi
              experiencia técnica con una perspectiva fresca en el diseño UX/UI
              para ofrecer interfaces intuitivas y visualmente atractivas.
              Explora mis proyectos más recientes, mostrando mi experiencia en
              desarrollo web.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <Button onClick={handleDownload}>Resumen</Button>
              <Button onClick={handleClickOpen}>Contacto</Button>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Ariel Mendez"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Email: arielmendezdev@gmail.com
                </DialogContentText>
                <DialogContentText>
                  Teléfono: +54 9 2234 461219
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cerrar</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
