import Image from 'next/image';
import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import { url } from '../utils/const/url';
import styles from './page.module.css';
import Feedback from '../components/Feedback/Feedback';
import Subscription from '../components/Subscription/Subscription';

export default function Page() {
    return (
        <main>
            <Menu items={url} />
            <HeaderPage text={'Контакты'} />
            <section className={styles.container}>
                <div className={styles.sections}>
                    <div className={styles.section}>
                        <h2 className={styles.title}>Обратная связь</h2>
                        <p>
                            У вас есть вопросы? Мы с удовольствием на них ответим! <br />
                            Пожалуйста, отправьте свое сообщение через онлайн-форму справа,
                            <br /> или же свяжитесь с нами телефону. <br />
                            Мы всегда рады помочь!
                        </p>
                        <h3 className={styles.titleTeam}>Наша команда</h3>
                        <ul>
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
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <Feedback />
                    </div>
                </div>
            </section>
            <div className={styles.subscriptionContainer}>
                <div className={styles.subscriptionContainerText}>
                    <h2>Подпишитесь на новости</h2>
                    <span>Мы сообщим о начале акциях и новых скидках</span>
                </div>
                <Subscription />
            </div>
        </main>
    );
}
