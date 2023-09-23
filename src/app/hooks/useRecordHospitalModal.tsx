import { create } from 'zustand';

interface RecordHospitalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRecordHospitalModal = create<RecordHospitalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRecordHospitalModal;
