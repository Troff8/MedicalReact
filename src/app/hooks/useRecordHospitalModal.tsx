import { create } from 'zustand';

interface RecordHospitalStore {
    city: string;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRecordHospitalModal = create<RecordHospitalStore>((set) => ({
    city: '',
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRecordHospitalModal;
