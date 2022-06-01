import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Navigation from "chakra/Navigation";

const Home: NextPage = () => {
  return (
    <Box
      position="relative"
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="gradient" />
      <Navigation />
    </Box>
  );
};

export default Home;
