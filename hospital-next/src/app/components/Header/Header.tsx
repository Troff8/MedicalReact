import styles from './Header.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <nav className={styles.navTop}>
                    <div className={styles.navTopLeftSide}>
                        <ul className={styles.phoneCall}>
                            <li>
                                <Image src="/phone.svg" width={10} height={14} alt="Phone" />
                                <a href="tel:+78463930092">Чапаевск +78463930092</a>
                                <span>Будни:8:00-19:00</span>
                            </li>
                            <li>
                                <Image src="/phone.svg" width={10} height={14} alt="Phone" />
                                <a href="tel:+78463930092">Безенчук +78463930092</a>
                                <span>Будни:8:00-19:00,Суббота 8:00-17:00</span>
                            </li>
                            <li>
                                <Image src="/mail.svg" width={10} height={14} alt="Mail" />
                                <a href="mailto:kd_p09@mail.ru">kd_p09@mail.ru</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navTopRightSide}>
                        <Link href={'/auth'}>
                            <Button title="Аккаунт" />
                        </Link>
                        <Button
                            title="Работникам"
                            icon={<Image src="/lock.png" width={20} height={15} alt="Phone" />}
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
}
