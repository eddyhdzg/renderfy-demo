import type { NextPage } from "next";
import { Box, Container, Grid } from "@mui/material";
import { NavigationBar, UploadPaper, HeroTexts } from "atomic";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="gradient" />
      <NavigationBar />
      <Container
        maxWidth="lg"
        sx={{
          py: 10,
        }}
      >
        <Box>
          <Grid
            container
            spacing={6}
            sx={{
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={6} lg={5}>
              <UploadPaper />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <HeroTexts />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
