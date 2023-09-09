import React from 'react';
import styles from './HeaderPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

interface HeaderPageProps {
    items?: any[];
}
const HeaderPage: React.FC<HeaderPageProps> = ({ items }) => {
    return (
        <div className={styles.headerPage}>
            <div className={styles.headerPageSection}>
                <p>Главная</p>
                <ul>
                    <li>
                        <Link href={'/'}>Главная |</Link>
                    </li>
                    <li>
                        <Link href={'/'}>123</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.sectionButton}>
                <Button title="Написать отзыв" />
                <Button title="Оставить заявку" />
            </div>
        </div>
    );
};

export default HeaderPage;
