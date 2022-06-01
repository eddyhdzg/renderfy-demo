import { ClientStoreActions } from "./ClientStore.actions";
import { ClientDispatch } from "./ClientStore.dispatch";
import { ClientState } from "./ClientStore.initialState";

const reducer = (
  draft: ClientState & ClientDispatch,
  action: ClientStoreActions
) => {
  switch (action.type) {
    case "OPEN_MODAL":
      draft.modal = true;
      break;
    case "CLOSE_MODAL":
      draft.modal = false;
      break;
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;
