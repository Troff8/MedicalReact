import React from 'react';
import styles from './CardHospital.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

interface CardHospitalProps {
    title: string;
    description: string;
    number: string;
    address: string;
    mail: string;
    schedule: string;
}
const CardHospital: React.FC<CardHospitalProps> = ({ title,description,number,address,mail,schedule }) => {
    return (
        <div className={styles.plan}>
            <div className={styles.inner}>
                <span className={styles.pricing}>
                    <span>{schedule}</span>
                </span>
                <p className={styles.title}>{title}</p>
                <p className={styles.info}>
                    {description}
                </p>
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
                    <Button title="Записаться онлайн" />
                </div>
            </div>
        </div>
    );
};

export default CardHospital;
