import { create } from "zustand";

const useEdtModalP = create ((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useEdtModalP;
