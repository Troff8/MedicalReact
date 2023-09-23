import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import styles from './page.module.css';
import { url } from '../utils/const/url';
import AuthForm from '../components/AuthForm/AuthForm';

export default function Page() {
    return (
        <main>
            <Menu items={url} />
            <HeaderPage text={'Авторизация'} />
            <section className={styles.container}>
                <h2>Авторизация КДП</h2>
                <AuthForm />
            </section>
        </main>
    );
}
