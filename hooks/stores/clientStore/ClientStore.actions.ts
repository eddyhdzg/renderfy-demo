export interface OpenModal {
  type: "OPEN_MODAL";
}

export interface CloseModal {
  type: "CLOSE_MODAL";
}

export type ClientStoreActions = OpenModal | CloseModal;
