import { create } from "zustand";

const useRegisterModal2 = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useRegisterModal2;
