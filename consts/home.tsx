import { Icon } from "@chakra-ui/react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Image from "next/image";

export const uploadOptions = [
  {
    text: "Google Drive",
    Icon: (
      <Image
        src="/images/google-drive-brands.svg"
        height={24}
        width={24}
        alt="drive"
      />
    ),
  },
  {
    text: "Dropbox",
    Icon: (
      <Image
        src="/images/dropbox-brands.svg"
        height={24}
        width={24}
        alt="dropbox"
      />
    ),
  },
  {
    text: "Local",
    Icon: <Icon as={CloudUploadOutlinedIcon} w={32} h={32} />,
  },
];
