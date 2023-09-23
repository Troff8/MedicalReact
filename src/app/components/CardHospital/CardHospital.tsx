'use client';
import React from 'react';
import styles from './CardHospital.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import useRecordHospitalModal from '../../hooks/useRecordHospitalModal';

interface CardHospitalProps {
    title: string;
    description: string;
    number: string;
    address: string;
    mail: string;
    schedule: string;
}
const CardHospital: React.FC<CardHospitalProps> = ({ title, description, number, address, mail, schedule }) => {
    const recordHospitalModal = useRecordHospitalModal();

    const click = () => {
        recordHospitalModal.onOpen();
    };
    return (
        <div className={styles.plan}>
            <div className={styles.inner}>
                <span className={styles.pricing}>
                    <span>{schedule}</span>
                </span>
                <p className={styles.title}>{title}</p>
                <p className={styles.info}>{description}</p>
                <ul className={styles.features}>
                    <li>
                        <span className={styles.icon}>
                            <Image src="/phone.svg" width={10} height={14} alt="Phone" />
                        </span>
                        <span>
                            <strong>Тел</strong> {number}
                        </span>
                    </li>
                    <li>
                        <span className={styles.icon}>
                            <Image src="/address.png" width={10} height={14} alt="Mail" />
                        </span>
                        <span>{address}</span>
                    </li>
                    <li>
                        <span className={styles.icon}>
                            <Image src="/mail.svg" width={10} height={14} alt="Mail" />
                        </span>
                        <span>{mail}</span>
                    </li>
                </ul>
                <div className={styles.action}>
                    <Button title="Записаться онлайн" onClick={click} />
                </div>
            </div>
        </div>
    );
};

export default CardHospital;
