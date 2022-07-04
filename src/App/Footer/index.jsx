import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import locationImage from '../../images/location.png'
import timeImage from '../../images/time.png'
import emailImage from '../../images/email.png'
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.menuFooter}>
                    <div className={styles.blockMenu}>
                        <Link className={styles.menuItem} to='/'>
                            Главная
                        </Link>
                        <Link className={styles.menuItem} to='/specialists'>
                            Специалисты
                        </Link>
                        <Link className={styles.menuItem} to='/services'>
                            Услуги
                        </Link>
                    </div>
                    <div className={styles.blockMenu}>
                        <Link className={styles.menuItem} to='/previews'>
                            Профосмотры
                        </Link>
                        <Link className={styles.menuItem} to='/contacts'>
                            Контакты
                        </Link>
                    </div>
                </div>
                <div className={styles.blockInfo}>
                    <div className={styles.infoField}>
                        <img className={styles.imageInfoContacts} src={locationImage} />
                        Чапаевск,Безенчук
                    </div>
                    <div className={styles.infoField}>
                        <img className={styles.imageInfoContacts} src={timeImage} />
                        Режим работы: пн-пт с 8:00 до 19:00, сб с 8-00 до 17-00
                    </div>
                    <div className={styles.infoField}>
                        <img className={styles.imageInfoContacts} src={emailImage} />
                        kd_p09@mail.ru
                    </div>
                </div>
            </div>
            <div className={styles.downBlockFooter}>
                <Link className={styles.downText} to='/'>
                    © ООО «Консультативно-диагностическая поликлиника»
                </Link>
            </div>
        </>
    )
}

export default Footer
