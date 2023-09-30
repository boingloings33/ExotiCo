import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    primary: {
      light: "#f5f5f5",
      main: "#64B998",
      dark: "#DBDBDB",
    },
    secondary: {
      light: "#fff",
      main: "#3fa14a",
      dark: "#4A5F52",
    },
    info: {
      light: "#18191a",
      main: "#000",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: 40,
      color: "#000",
    },
    h2: { fontFamily: "Poppins, sans-serif" },
    h3: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 28,
    },
    h4: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.93,
    },
    body1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 16,
      lineHeight: 1.93,
    },
    body2: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 18,
      lineHeight: 2.13,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.light,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: "#4A5F52",
          },
          fontFamily: "Poppins, sans-serif",
          textTransform: "none",
          fontSize: 20,
          fontWeight: 700,
          boxShadow: "none",
        }),
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:focused": { backgroundColor: "red" },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "rgba(255, 255, 255, 0.7)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "white",
          },
          borderRadius: 14,
          color: "white",
          background: "#73C0A2",
          fieldset: {
            borderColor: "white",
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: { fontFamily: "Poppins, sans-serif" },
      },
    },
  },
};

export default createTheme(theme);
