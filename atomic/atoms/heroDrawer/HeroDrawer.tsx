import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useClientStore } from "hooks";
import shallow from "zustand/shallow";

export default function HeroDrawer() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const variant = useBreakpointValue({ base: "bottom", md: "right" }) as
    | "right"
    | "bottom";

  const { modal, dispatch } = useClientStore(
    (state) => ({ modal: state.modal, dispatch: state.dispatch }),
    shallow
  );

  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleOpenModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  return (
    <Drawer
      isOpen={modal}
      placement={variant}
      onClose={handleCloseModal}
      finalFocusRef={btnRef}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent
        sx={{
          maxWidth: {
            md: "calc(100% - 120px)",
          },
          maxHeight: {
            base: "calc(100% - 80px)",
            md: "unset",
          },
        }}
      >
        <DrawerCloseButton />
        <DrawerHeader>Pricing</DrawerHeader>
        <DrawerBody>Body</DrawerBody>
        <DrawerFooter>Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
