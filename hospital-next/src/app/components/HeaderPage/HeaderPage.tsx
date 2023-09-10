import React from 'react';
import styles from './HeaderPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

interface HeaderPageProps {
    text: string;
}
const HeaderPage: React.FC<HeaderPageProps> = ({ text }) => {
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
                <Button title="Написать отзыв"  icon={<Image src="/favourite.png" width={20} height={20} alt="Review" />}/>
                <Button title="Оставить заявку" />
            </div>
        </div>
    );
};

export default HeaderPage;
