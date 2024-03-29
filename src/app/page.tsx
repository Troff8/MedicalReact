import styles from './page.module.css';
import Menu from './components/Menu/Menu';
import HeaderPage from './components/HeaderPage/HeaderPage';
import { url } from './utils/const/url';
import CardHospital from './components/CardHospital/CardHospital';
import CarouselCustom from './components/Carousel/Carousel';
import Button from './components/Button/Button';
import Subscription from './components/Subscription/Subscription';
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>
            <Menu items={url} />
            <HeaderPage text={'Главная'} />

            <section className={styles.containerAboutHospital}>
                <div className={styles.aboutHospital}>
                    <div className={styles.aboutHosputalTextInfo}>
                        <h2>Консультативно-диагностическая поликлиника</h2>
                        <h3>Чапаевск,Безенчук</h3>
                        <p>
                            ООО «Консультативно-диагностическая поликлиника» осуществляет медицинские услуги для
                            населения и организаций Самарской области с 2009 года. За это время мы сформировали дружный
                            коллектив профессионалов, способных оказать качественную, квалифицированную и оперативную
                            консультационную и лечебную помощь гражданам в самых разных ситуациях.
                        </p>
                        <p>
                            На базе клиники проводятся консультации, ведение пациентов, а также их лечение с помощью
                            новейших техник и методик, в том числе - без лекарств. Нашим пациентам предоставляется
                            гарантированное медицинское качество, а также индивидуальный подход и современное
                            медицинское обслуживание.
                        </p>
                    </div>
                    <div className={styles.aboutHospitalMediaInfo}>
                        <ul className={styles.direction}>
                            <p>Наши направления:</p>
                            <li>Невролог</li>
                            <li>Офтальмолог</li>
                            <li>Дерматовенеролог</li>
                            <li>Оториноларинголог</li>
                            <li>Уролог</li>
                            <li>Терапевт</li>
                            <li>Ревматолог</li>
                            <li>Хирург</li>
                            <li>Функциональная диагностика</li>
                            <li>Акушер-гинеколог</li>
                            <li>Ультразвуковая диагностика</li>
                            <li>Эндокринолог</li>
                            <li>Кардиолог</li>
                        </ul>
                        <ul className={styles.cards}>
                            <CardHospital
                                title="Чапаевск"
                                description="Мы находимся в городе Чапаевск"
                                number="+78463930092"
                                address="Чапаевск, ул.Ватутина 11"
                                mail="kd_p09@mail.ru"
                                schedule="Пн-Пт"
                            />
                            <CardHospital
                                title="Безенчук"
                                description="Мы находимся в городе Безенчук"
                                number="+79277505656" 
                                address="Безенчук, ул.Советская 56"
                                mail="kd_p09@mail.ru"
                                schedule="Пн-Сб"
                            />
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.containerSpecialists}>
                <div className={styles.container}>
                    <h2>Наши специалисты</h2>
                    <CarouselCustom />
                </div>
                <div className={styles.containerButton}>
                    <Link href={'specialists'}>
                        <Button title="Все специалисты" />
                    </Link>
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
