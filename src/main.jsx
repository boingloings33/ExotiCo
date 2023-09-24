import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f7f7f7",
      main: "#64B998",
      dark: "#DBDBDB",
    },
    secondary: {
      main: "#3fa14a",
      dark: "#4A5F52",
    },
    info: {
      main: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "Koh Santepheap, serif",
    h1: {
      fontWeight: 700,
      fontSize: 98,
      color: "#1e1e1e",
    },
    h2: { fontFamily: "Roboto, sans-serif" },
    h3: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 28,
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
    },
    body2: { fontFamily: "Roboto, sans-serif", fontSize: 18 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.info.main,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: "#4A5F52",
            color: theme.palette.primary.light,
          },
          fontFamily: "Roboto, sans-serif",
          textTransform: "none",
          fontSize: 20,
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: { fontFamily: "Roboto, sans-serif" },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: `${theme.palette.info.main}!important`,
        }),
      },
    },
  },
});

export default { theme };

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
