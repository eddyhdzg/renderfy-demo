import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ColorCircle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: theme.spacing(7),
  height: theme.spacing(7),
  marginBottom: theme.spacing(1.5),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default ColorCircle;
