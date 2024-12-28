'use client'

import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";
import "./globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme; // Actualiza la clase en el cuerpo del documento
  };

  return (
    <html lang="en">
      <body>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
