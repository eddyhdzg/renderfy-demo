import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ColorCircle, UploadButtonBase } from "atomic";

interface UploadButtonProps {
  text?: string;
  Icon?: JSX.Element;
}

export default function UploadButton({ text, Icon }: UploadButtonProps) {
  return (
    <UploadButtonBase focusRipple>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ColorCircle>{Icon}</ColorCircle>
        <Typography
          color="textSecondary"
          variant="body2"
          sx={{
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      </Box>
    </UploadButtonBase>
  );
}
