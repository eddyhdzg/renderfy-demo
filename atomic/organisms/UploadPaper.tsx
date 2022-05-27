import { Box, Paper, Typography, alpha } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { UploadButton } from "atomic";
import { uploadOptions } from "consts";

const UploadPaper = () => {
  return (
    <Paper
      sx={(theme) => ({
        color: alpha(theme.palette.common.white, 0.9),
        maxWidth: "520px",
        margin: "auto",
      })}
    >
      <Box
        sx={{
          py: 6,
          px: 5,
        }}
      >
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{
            fontWeight: 600,
            textAlign: "center",
          }}
          gutterBottom
        >
          Sube un archivo zip con tu proyecto
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          Arrastre y suelte o seleccione un archivo zip de hasta 100 GB para
          cargar el archivo
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CloudUploadOutlinedIcon
            color="primary"
            sx={{
              fontSize: "48px",
              color: "text.disabled",
              mb: 2,
            }}
          />
        </Box>
        <Typography
          color="textSecondary"
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          Subir Archivos
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            "& > button:not(:last-child)": {
              mr: 4,
            },
          }}
        >
          {uploadOptions.map((option) => {
            return (
              <UploadButton
                key={option.text}
                text={option.text}
                Icon={option.Icon}
              />
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
};

export default UploadPaper;
