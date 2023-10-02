import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import Select from '../components/Select/Select';
import { Input } from '../components/Input/Input';
import styles from './page.module.css';
import { url } from '../utils/const/url';
import ContainerSpecialists from '../components/ContainerSpecialists/ContainerSpecialists';

const options = [
    { value: 'Узи', label: 'Узи' },
    { value: 'Терапевт', label: 'Терапевт' },
    { value: 'Психолог', label: 'Психолог' },
    { value: 'Гинеколог', label: 'Гинеколог' },
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
                        <Select isMulti={true} options={options} />
                        <Input type="search" id={'id'} />
                    </div>
                </div>
                <ContainerSpecialists />
            </section>
        </main>
    );
}
