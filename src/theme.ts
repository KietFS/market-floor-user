"use client";
import { Lexend } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const lexend = Lexend({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f0f0f0",
    },
    text: {
      primary: "#000000",
      secondary: "#888888",
    },
  },
  typography: {
    fontFamily: lexend.style.fontFamily,
    body1: {
      color: "#000000",
    },
    h1: {
      color: "#000000",
    },
    h2: {
      color: "#000000",
    },
    h3: {
      color: "#000000",
    },
    button: {
      color: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Common styles for all buttons
          textTransform: "none",
          fontWeight: 500,
        },
        contained: {
          // Styles for the contained (default) button
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#333333",
          },
        },
        outlined: {
          // Styles for the outlined button
          borderColor: "#333333",
          color: "#333333",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        text: {
          // Styles for the text button
          color: "#000000",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#000000",
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
          "&.Mui-focused": {
            borderColor: "#000000",
          },
        },
      },
    },
  },
});

export default theme;
