import { IBlog } from "@/lib/types/blog";
import { create } from "zustand";

type useModalStore = {
  isOpen: boolean;
  blogData?: IBlog;
  onOpen: (blogData?: IBlog) => void;
  onClose: () => void;
};

export const useBlogActionDialog = create<useModalStore>((set) => ({
  isOpen: false,
  blogData: undefined,
  onOpen: (blogData?: IBlog) => {
    set({ isOpen: true, blogData: blogData ? blogData : undefined });
  },
  onClose: () => set({ isOpen: false }),
}));
