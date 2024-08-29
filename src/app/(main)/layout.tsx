// app/layout.tsx
import React from "react";
import Header from "@/components/organisms/Header";
import { CssBaseline, Container } from "@mui/material";
import Footer from "@/components/organisms/Footer";
import { ToastProvider } from "@/hooks/useToast";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Market Floor</title>
      </head>
      <body>
        <CssBaseline />
        <Header />

        <ToastProvider> {children}</ToastProvider>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
