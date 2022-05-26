import type { NextPage } from "next";
import { Box, Container, Fab, Paper, Typography } from "@mui/material";
import { NavigationBar } from "atomic";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "100wh",
        minHeight: "100vh",
      }}
    >
      <div className="gradient" />
      <NavigationBar />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Paper>
            <Box
              sx={{
                py: 6,
                px: 5,
              }}
            >
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Sube un archivo zip con tu proyecto
              </Typography>

              <Typography
                color="textSecondary"
                variant="body2"
                sx={{
                  textAlign: "center",
                }}
              >
                Arrastre y suelte o seleccione un archivo zip de hasta 100 GB
                para cargar el archivo
              </Typography>

              <CloudUploadOutlinedIcon />

              <Typography
                color="textSecondary"
                variant="h5"
                sx={{
                  textAlign: "center",
                }}
              >
                Subir Archivos
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Fab color="primary" aria-label="drive">
                  <AddToDriveIcon />
                </Fab>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Subir Archivos
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
