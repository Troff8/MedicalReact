import React from 'react';
import styles from './CardSpecialist.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface CardSpecialistProps {
    title: string;
    direction: string;
}
const CardSpecialist: React.FC<CardSpecialistProps> = ({ title, direction }) => {
    return (
        <div className={styles.cardSpecialist}>
            <div className={styles.cardSpecialistImage}>
                <Image
                    src="/anon.png"
                    objectFit="cover"
                    width={160}
                    height={160}
                    placeholder="blur"
                    blurDataURL={'/anon.png'}
                    alt={'User'}
                />
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.direction}>{direction}</p>
        </div>
    );
};

export default CardSpecialist;
