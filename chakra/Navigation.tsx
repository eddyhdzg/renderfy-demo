import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Icon,
  IconButton,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import ExtensionIcon from "@mui/icons-material/Extension";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import BackupIcon from "@mui/icons-material/Backup";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FolderIcon from "@mui/icons-material/Folder";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HeroDrawer } from "atomic";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={{ base: 4, lg: 6 }}>
      <Flex alignItems="center" justifyContent="space-between" h={16}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Image
          src="/images/renderfy-logo.svg"
          alt="renderfy-logo"
          width={200}
          height={14}
        />
        <Flex alignItems="center" justifyContent="space-between">
          <ButtonGroup
            size="sm"
            isAttached
            variant="solid"
            mr="4"
            display={{ base: "none", lg: "flex" }}
            sx={{
              [`& button:not(:last-child)`]: {
                borderRightWidth: "1px",
                borderRightStyle: "solid",
                borderRightColor: "gray.300",
              },
            }}
          >
            <Button leftIcon={<Icon as={ExtensionIcon} w={4} h={4} />}>
              Integrar
            </Button>
            <Button leftIcon={<Icon as={ViewInArIcon} w={4} h={4} />}>
              Renderizar
            </Button>
            <Button leftIcon={<Icon as={BackupIcon} w={4} h={4} />}>
              Almacenamiento
            </Button>
            <Button leftIcon={<Icon as={AttachMoneyIcon} w={4} h={4} />}>
              Precios
            </Button>
            <Button leftIcon={<Icon as={FolderIcon} w={4} h={4} />}>
              Mis Proyectos
            </Button>
          </ButtonGroup>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://scontent.fntr6-1.fna.fbcdn.net/v/t1.18169-9/314909_10152070529250150_1549371246_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=W_qOcr0Y78EAX_YKZ62&_nc_ht=scontent.fntr6-1.fna&oh=00_AT_7vY4ySFsSlZG9Tk9WDv4yhTxCgGe8lQNzJXR2XkV4tQ&oe=62B81A4D"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
      <HeroDrawer />
    </Box>
  );
}
