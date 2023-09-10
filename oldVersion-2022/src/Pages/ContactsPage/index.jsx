import React, { useState } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import RequestSms from '../../Components/RequestSms'
import Modal from '../../Components/Modal'
import Slider from '../../Components/Slider'
import Button from '../../Components/Button'
import slider1Image from '../../images/slider1.png'
import slider2Image from '../../images/slider2.png'
import slider3Image from '../../images/slider3.png'
import slider4Image from '../../images/slider4.png'
import styles from './styles.css'

const ContactsPage = () => {
    const [isModalRequestSmsActive, setIsModalRequestSmsActive] = useState(false)
    const [isModalValidationFalseActive, setIsModalValidationFalseActive] = useState(false)
    return (
        <div className={styles.mainPage}>
            <Slider menuItems={[slider1Image, slider2Image, slider3Image, slider4Image]} />
            <div className={styles.headerText} id='titleText'>
                Контакты
            </div>
            <div className={styles.contactsFields}>
                <div className={styles.textField}>
                    <div className={styles.smallHeaderText}>ООО «Консультативно-диагностическая поликлиника»</div>
                    <div className={styles.discriptionText}>ИНН: 6330028603</div>
                    <div className={styles.discriptionText}>
                        Адрес: 446100, Россия, Самарская область, г. Чапаевск, ул. Ватутина 11
                    </div>
                    <div className={styles.discriptionText}>Режим работы: пн-пт с 8:00 до 19:00</div>
                    <div className={styles.discriptionText}>Адрес: Самарская область, п.г.т. Безенчук, ул. Советская 56</div>
                    <div className={styles.discriptionText}>Режим работы: пн-пт с 8:00 до 19:00, сб с 8-00 до 17-00</div>
                    <div className={styles.discriptionText}>Контактный телефон:</div>
                    <div className={styles.discriptionText}>
                        Территориальный орган Федеральной службы по надзору в сфере здравоохранения и благополучия человека:
                    </div>
                    <div className={styles.discriptionText}>Самарская обл.г. Чапаевск,ул. Ленина 95,т.8-(846)-39-305-29</div>
                    <div className={styles.blockButton}>
                        <Button textButton={'Написать нам'} handler={() => setIsModalRequestSmsActive(true)} />
                    </div>
                </div>
                <div className={styles.mapField}>
                    <YMaps>
                        <Map state={{ center: [52.95253916660395, 49.69045349999999], zoom: 16 }} width={300} height={450}>
                            <Placemark geometry={[52.95253916660395, 49.69045349999999]} />
                            <div id='blockInMap'></div>
                        </Map>
                    </YMaps>
                </div>
            </div>
            <Modal isActive={isModalRequestSmsActive} setActive={setIsModalRequestSmsActive} isClosable={false}>
                <RequestSms
                    setIsModalActive={setIsModalRequestSmsActive}
                    setIsModalValidationFalseActive={setIsModalValidationFalseActive}
                />
            </Modal>
            <Modal isActive={isModalValidationFalseActive} setActive={setIsModalValidationFalseActive} isClosable={false}>
                <div className={styles.requestContainer}>
                    <div className={styles.orderItem}>
                        <div className={styles.blockHeaderText}>Ошибка</div>
                    </div>
                    <div className={styles.blockText}>Некорректный ввод данных</div>
                    <div className={styles.requestButtonsContainer}>
                        <Button textButton='Закрыть' handler={() => setIsModalValidationFalseActive(false)} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ContactsPage
