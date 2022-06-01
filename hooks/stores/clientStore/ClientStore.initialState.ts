import { Locale } from "types";

export type ClientState = {
  modal: boolean;
  locale: Locale;
};

export const initialClientState: ClientState = {
  modal: false,
  locale: "en",
};
