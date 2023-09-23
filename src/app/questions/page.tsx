import Menu from '../components/Menu/Menu';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import { url } from '../utils/const/url';
import styles from './page.module.css';

export default function Page() {
    return (
        <main>
            <Menu items={url} />
            <HeaderPage text={'Часто задаваемые вопросы'} />
            <section className={styles.container}>
                <h2>
                    Здесь приведены наиболее часто задаваемые вопросы наших пациентов. Если у вас возникли
                    дополнительные вопросы и наши ответы вам не помогли, пожалуйста, обращайтесь в КДП (раздел
                    Контакты)!
                </h2>
                <h3>Как записаться на прием к врачу / лечение в КДП?</h3>
                <p>
                    Просьба направлять запрос на лечение с описанием проблемы и вашими пожеланиями в
                    форме отправления заявки
                </p>
                <p>Мы принимаем заявки в письменном виде и по телефону.</p>
                <p>Обратите внимание, что запись на прием по телефону возможна.</p>
            </section>
        </main>
    );
}
