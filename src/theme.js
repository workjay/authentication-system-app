import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ADB5",
    },
    background: "#f1f1f1",
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
  },
});

export default theme;
