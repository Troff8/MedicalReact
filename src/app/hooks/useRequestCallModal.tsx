import { create } from 'zustand';

interface RequestCallModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRequestCallModal = create<RequestCallModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRequestCallModal;
