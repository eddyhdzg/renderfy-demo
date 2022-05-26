import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {},
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default responsiveFontSizes(theme, {
  disableAlign: true,
});
