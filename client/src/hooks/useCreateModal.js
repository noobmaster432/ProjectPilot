import { create } from "zustand";

const useCreateModal = create ((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useCreateModal;
