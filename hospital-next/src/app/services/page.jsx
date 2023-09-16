import Image from 'next/image';
import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import RecommendationCard from '../components/RecommendationCard/RecommendationCard';
import CardHospital from '../components/CardHospital/CardHospital';
import Subscription from '../components/Subscription/Subscription';
import styles from './page.module.css';
import { url } from '../utils/const/url';

export default function Page() {
    return (
        <main>
            <Menu items={url} />
            <HeaderPage text={'Услуги'} />
            <section className={styles.container}>
                <h2 className={styles.titlePage}>Почему пациенты выбирают КДП для лечения?</h2>
                <div className={styles.whyCDP}>
                    <RecommendationCard
                        title="Индивидуальные программы"
                        description="Программы могут быть расширены и дополнены в соответствии с индивидуальными пожеланиями и потребностями наших пациентов"
                        icon={<Image src="/recommendationPrograms.svg" width={70} height={45} alt="recommendation" />}
                    />
                    <RecommendationCard
                        title="Запись в любой клинике КДП"
                        description="Запись в режиме реального времени — можно забронировать онлайн или по телефону через через нашу службу поддержки и партнеров"
                        icon={<Image src="/recommendationDoctor.svg" width={70} height={45} alt="recommendation" />}
                    />
                    <RecommendationCard
                        title="Центры КДП"
                        description="Сочетание диагностики и современной медицинской техники позволяет нам предоставлять  консультации по актуальным жалобам"
                        icon={<Image src="/recommendationCentrs.svg" width={70} height={45} alt="recommendation" />}
                    />
                </div>
            </section>
            <section>
                <div className={styles.programs}>
                    <div className={styles.aboutPrograms}>
                        <h2>Наши программы обследований</h2>
                        <div className={styles.programsText}>
                            <span>
                                Обследование в центрах КДП даст точную картину состояния вашего здоровья. Во время
                                комплексного обследования наши специалисты проверяют важные параметры здоровья и функции
                                организма. В случае возникновения факторов риска определяются меры профилактики и, при
                                необходимости, назначается дополнительная диагностика
                            </span>
                        </div>
                    </div>
                    <div className={styles.hospitals}>
                        <CardHospital
                            title="Чапаевск"
                            description="Мы находимся в городе Чапаевск"
                            number="+78463930092"
                            address="Чапаевск, ул.Ватутина 11"
                            mail="kd_p09@mail.ru"
                            schedule="Пн-Сб"
                        />
                        <CardHospital
                            title="Безенчук"
                            description="Мы находимся в городе Безенчук"
                            number="+78463930092"
                            address="Безенчук, ул.Советская 56"
                            mail="kd_p09@mail.ru"
                            schedule="Пн-Пт"
                        />
                    </div>
                </div>
            </section>
            <div className={styles.subscriptionContainer}>
                <div>
                    <h2>Подпишитесь на новости</h2>
                    <span>Мы сообщим о начале акциях и новых скидках</span>
                </div>
                <Subscription />
            </div>
        </main>
    );
}
