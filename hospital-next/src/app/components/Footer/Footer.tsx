import styles from './Footer.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <div className={styles.footerLogoText}>
                        <Image src="/favicon.ico" width={25} height={25} alt="Logo" />
                        <p>© ООО «Консультативно-диагностическая поликлиника»</p>
                    </div>
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
                    </ul>
                </div>
                <nav className={styles.footerNav}>
                    <ul className={styles.columnFooter}>
                        <li className={styles.category}>
                            <p>Наши услуги</p>
                            <ul>
                                <li>
                                    <Link href={'/#'}>Доктора</Link>
                                </li>
                                <li>
                                    <Link href={'/#'}>Услуги</Link>
                                </li>
                                <li>
                                    <Link href={'/#'}>Медицинские обследования</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.category}>
                            <p>О нас</p>
                            <ul>
                                <li>
                                    <Link href={'/#'}>КДП</Link>
                                </li>
                                <li>
                                    <Link href={'/#'}>Политика конфиденциальности </Link>
                                </li>
                                <li>
                                    <Link href={'/#'}>Контакты</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.category}>
                            <p>Для пациентов</p>
                            <ul>
                                <li>
                                    <Link href={'/#'}>Часто задаваемые вопросы</Link>
                                </li>
                                <li>
                                    <Link href={'/#'}>COVID-19</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContent}>
                    <p>Консультативно-диагностическая поликлиника</p>
                    <Link href={'/#'}>Политика конфиденциальности </Link>
                </div>
            </div>
        </footer>
    );
}
