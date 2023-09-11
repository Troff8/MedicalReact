import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import Select from '../components/Select/Select';
import Input from '../components/Input/Input';
import styles from './page.module.css';
import { url } from '../utils/const/url';
import CardSpecialist from '../components/CardSpecialist/CardSpecialist';
const specialists = [
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
];

export default function Page() {
    return (
        <main>
            <Menu items={url} />
            <HeaderPage text={'Специалисты'} />
            <section className={styles.container}>
                <div className={styles.filter}>
                    <div className={styles.col1}>
                        <h2>Все Специалисты</h2>
                        <div className={styles.counter}>
                            <span>+50</span>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <Select />
                        <Input type="search" />
                    </div>
                </div>
                <div className={styles.containerSpecialists}>
                {specialists.map((specialist) => (
                    <CardSpecialist title={specialist.title} direction={specialist.direction} key={specialist.title}/>
                ))}
                </div>
            </section>
        </main>
    );
}
