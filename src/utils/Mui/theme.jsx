import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
      light: "#dedeff",
      dark: "#0a0a14",
    },
    secondary: {
      main: "#eee",
    },
    info: {
      main: "#111",
    },

    background: {
      default: "#fff",
      defaultChannels: "255 255 255",
    },
  },
});

export const CustomeThemeProvider = ({ chidren }) => (
  <ThemeProvider theme={theme}>{chidren}</ThemeProvider>
);
