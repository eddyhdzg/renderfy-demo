import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {},
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    h1: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    h2: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    h3: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    h4: {
      fontWeight: 600,
      lineHeight: "135%",
    },
    h5: {
      fontWeight: 600,
      lineHeight: "135%",
    },
    h6: {
      fontWeight: 700,
      lineHeight: "135%",
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: "150%",
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: "150%",
    },
    body1: {
      lineHeight: "150%",
    },
    body2: {
      lineHeight: "150%",
    },
    button: {
      fontWeight: 700,
      lineHeight: "150%",
      textTransform: "none",
    },
  },
});

export default responsiveFontSizes(theme, {
  disableAlign: true,
});
