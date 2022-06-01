import { ClientStoreActions } from "./clientStore/ClientStore.actions";
import { ClientDispatch } from "./clientStore/ClientStore.dispatch";
import {
  ClientState,
  initialClientState,
} from "./clientStore/ClientStore.initialState";
import reducer from "./clientStore/ClientStore.reducer";
import produce, { Draft } from "immer";
import create, { State, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    config((fn) => set(produce(fn) as (state: T) => T), get, api);

const useClientStore = create<ClientState & ClientDispatch>(
  persist(
    immer((set) => ({
      ...initialClientState,
      dispatch: (args: ClientStoreActions) =>
        set((state) => reducer(state, args)),
    })),
    {
      name: "clientStore",
    }
  )
);

export default useClientStore;
