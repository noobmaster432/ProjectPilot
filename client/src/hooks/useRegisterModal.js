import { create } from "zustand";

const useRegisterModal = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    email: ''
}));

export default useRegisterModal;
