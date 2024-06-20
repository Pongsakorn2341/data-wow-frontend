import { create } from "zustand";

type useModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useBlogActionDialog = create<useModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
