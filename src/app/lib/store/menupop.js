import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useMenuPop = create(
  persist(
    (set, get) => ({
      isOpen: false,
      setIsOpen: (payload) => set((state) => ({ isOpen: payload }))
    }),
    {
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
    }
  )
);

export default useMenuPop;