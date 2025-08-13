// useUserStore.ts
import type { Database } from "@/types/database.types";
import { create } from "zustand";

type UsersType = Database["public"]["Tables"]["users"]["Row"];

type StateType = {
  user: UsersType;
  setUser: (payload: UsersType) => void;
  resetUser: () => void;
};

const useUserStore = create<StateType>((set) => ({
  user: {
    id: "",
    email: "",
    name: "",
    image_path: "",
    created_at: "",
    updated_at: "",
  },
  setUser: (payload) => set({ user: payload }),
  resetUser: () =>
    set({
      user: {
        id: "",
        email: "",
        name: "",
        image_path: "",
        created_at: "",
        updated_at: "",
      },
    }),
}));

export default useUserStore;
