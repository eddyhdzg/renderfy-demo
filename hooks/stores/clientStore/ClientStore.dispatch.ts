import { ClientStoreActions } from "./ClientStore.actions";

export type ClientDispatch = {
  dispatch: (action: ClientStoreActions) => void;
};
