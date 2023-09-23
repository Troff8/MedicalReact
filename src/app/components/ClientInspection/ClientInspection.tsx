import React from 'react';
import styles from './ClientInspection.module.css';

interface ClientInspectionProps {
    title: string;
}
const ClientInspection: React.FC<ClientInspectionProps> = ({ title }) => {
    return (
        <div className={styles.cardClientInspection}>
            <div className={styles.title}>{title}</div>
        </div>
    );
};

export default ClientInspection;
