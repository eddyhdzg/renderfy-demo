import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  ButtonGroup,
  buttonClasses,
  Paper,
} from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import ExtensionIcon from "@mui/icons-material/Extension";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import BackupIcon from "@mui/icons-material/Backup";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FolderIcon from "@mui/icons-material/Folder";

const settings = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];

const NavigationBar = () => {
  const [_, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Image
            src="/images/renderfy-logo.svg"
            alt="renderfy-logo"
            width={200}
            height={14}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper elevation={1}>
              <ButtonGroup
                aria-label="large button group"
                color="inherit"
                sx={{
                  backgroundColor: "common.white",
                  [`& .${buttonClasses.outlined}`]: {
                    borderColor: grey[300],
                    borderColorTop: "none",
                    borderColorBottom: "none",
                    whiteSpace: "nowrap",
                  },
                }}
              >
                <Button
                  key="one"
                  startIcon={
                    <ExtensionIcon
                      sx={{
                        color: "text.secondary",
                      }}
                    />
                  }
                >
                  Integrar
                </Button>
                <Button
                  key="two"
                  startIcon={
                    <ViewInArIcon
                      sx={{
                        color: "text.secondary",
                      }}
                    />
                  }
                >
                  Renderizar
                </Button>
                <Button
                  key="three"
                  startIcon={
                    <BackupIcon
                      sx={{
                        color: "text.secondary",
                      }}
                    />
                  }
                >
                  Almacenamiento
                </Button>
                <Button
                  key="four"
                  startIcon={
                    <AttachMoneyIcon
                      sx={{
                        color: "text.secondary",
                      }}
                    />
                  }
                >
                  Precios
                </Button>
                <Button
                  key="five"
                  startIcon={
                    <FolderIcon
                      sx={{
                        color: "text.secondary",
                      }}
                    />
                  }
                >
                  Mis Proyectos
                </Button>
              </ButtonGroup>
            </Paper>
            <Box
              sx={{
                ml: 2,
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Avatar" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "44px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
