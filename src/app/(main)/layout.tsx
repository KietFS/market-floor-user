// app/layout.tsx
import React from "react";
import Header from "@/components/organisms/Header";
import { CssBaseline, Container } from "@mui/material";
import Footer from "@/components/organisms/Footer";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Market Floor</title>
      </head>
      <body>
        <CssBaseline />
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
