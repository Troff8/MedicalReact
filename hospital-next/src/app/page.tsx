import styles from './page.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import HeaderPage from './components/HeaderPage/HeaderPage';
import Footer from './components/Footer/Footer';

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Menu
                items={[
                    {
                        title: 'Главная',
                        url: '#',
                    },
                    {
                        title: 'Специалисты',
                        url: 'specialistsPage',
                    },
                    {
                        title: 'Услуги',
                        url: 'servicesPage',
                    },
                    {
                        title: 'Профосмотры',
                        url: 'inspectionPage',
                    },
                    {
                        title: 'Контакты',
                        url: 'inspectionPage',
                    },
                ]}
            />
            <HeaderPage />

            <section className={styles.containerAboutHospital}>
                <div className={styles.aboutHospital}>
                    <h2>Консультативно-диагностическая поликлиника</h2>
                    <h3>Чапаевск,Безенчук</h3>
                    <p>
                        ООО «Консультативно-диагностическая поликлиника» осуществляет медицинские услуги для населения и
                        организаций Самарской области с 2009 года. За это время мы сформировали дружный коллектив
                        профессионалов, способных оказать качественную, квалифицированную и оперативную консультационную
                        и лечебную помощь гражданам в самых разных ситуациях.
                    </p>
                    <p>
                        На базе клиники проводятся консультации, ведение пациентов, а также их лечение с помощью
                        новейших техник и методик, в том числе - без лекарств. Нашим пациентам предоставляется
                        гарантированное медицинское качество, а также индивидуальный подход и современное медицинское
                        обслуживание.
                    </p>
                    <p>Наши направления:</p>
                    <ul>
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
                </div>
            </section>
            <Footer />
        </main>
    );
}
