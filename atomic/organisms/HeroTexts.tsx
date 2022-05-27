import { Box, Typography } from "@mui/material";

export default function HeroTexts() {
  return (
    <Box
      sx={{
        mt: {
          md: 8,
        },
      }}
    >
      <Typography variant="h2" gutterBottom>
        Renderiza 50 veces más rápido
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
        }}
      >
        Opera tu propia granja desde la interfaz de Renderfy y almacena hasta
        más de 500TB de datos en una nube privada, segura y escalable.
      </Typography>
    </Box>
  );
}
