import { styled, alpha } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

const UploadButtonBase = styled(ButtonBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  minWidth: theme.spacing(12),
  transition: theme.transitions.create(["background-color"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
}));

export default UploadButtonBase;
