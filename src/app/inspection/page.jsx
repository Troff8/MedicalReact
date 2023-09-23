import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import Subscription from '../components/Subscription/Subscription';
import ClientInspection from '../components/ClientInspection/ClientInspection';
import { url } from '../utils/const/url';
import styles from './page.module.css';

export default function Page() {
    return (
        <main>
            <Menu items={url} />
            <HeaderPage text={'Профосмотры'} />
            <section className={styles.container}>
                <h2 className={styles.titlePage}>Профосмотры от КДП</h2>
                <div className={styles.inspection}>
                    <div className={styles.aboutInspection}>
                        <h2>Профосмотры Чапаевск</h2>
                        <div className={styles.inspectionText}>
                            <span>
                                Специалистами клиники осуществляется проведение комплексных профилактических осмотров
                                частных лиц и сотрудников предприятий.Опыт и профессионализм наших специалистов, наличие
                                всей необходимой материально-технической базы и высокая мобильность позволяют нам
                                оказывать услуги в короткие сроки и на самом высоком уровне.
                            </span>
                        </div>
                    </div>
                    <div className={styles.aboutInspection}>
                        <h2>Наши клиенты</h2>
                        <ClientInspection title="Завод ООО «Фармопол-Волга»" />
                        <ClientInspection title="Страховая группа ЗАО «Уралсиб»" />
                        <ClientInspection title="Завод ОАО «Промсинтез»" />
                        <ClientInspection title="ФКП «Чапаевский механический завод»" />
                        <ClientInspection title="ФКП «Приволжский государственный боеприпасный испытательный полигон»" />
                        <ClientInspection title="ОАО «Теплоэнергокомпания»" />
                        <span>
                            Многие другие...
                        </span>
                    </div>
                </div>
            </section>
            <div className={styles.details}>
                <span>
                    Детали проведения профосмотров вы можете узнать, связавшись с нами по телефонам, указанным на
                    странице контактов, или оставив свое сообщение на сайте.
                </span>
            </div>
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
