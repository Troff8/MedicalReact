'use client'
import React from 'react';
import styles from './HeaderPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import useRequestCallModal from '../../hooks/useRequestCallModal';

interface HeaderPageProps {
    text: string;
}
const HeaderPage: React.FC<HeaderPageProps> = ({ text }) => {
    const requestModal = useRequestCallModal();
    return (
        <div className={styles.headerPage}>
            <div className={styles.headerPageSection}>
                <p>{text}</p>
                {text !== 'Главная' && (
                    <ul>
                        <li>
                            <Link href={'/'}>Главная |</Link>
                        </li>
                        <li>{text}</li>
                    </ul>
                )}
            </div>
            <div className={styles.sectionButton}>
                <Link href={'/contacts'}>
                    <Button
                        title="Написать отзыв"
                        icon={<Image src="/favourite.png" width={18} height={18} alt="Review" />}
                    />
                </Link>

                <Button
                    title="Оставить заявку"
                    icon={<Image src="/phone.svg" width={18} height={18} alt="Review" />}
                    onClick={requestModal.onOpen}
                />
            </div>
        </div>
    );
};

export default HeaderPage;
