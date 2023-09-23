'use client';

import { useEffect, useState } from 'react';
import RecordHospitalModal from '../components/RecordHospitalModal/RecordHospitalModal';
import RequestCallModal from '../components/RequestCallModal/RequestCallModal';

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <>
            <RecordHospitalModal />
            <RequestCallModal />
        </>
    );
};
export default ModalProvider;
