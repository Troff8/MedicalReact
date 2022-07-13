import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { sendMessageAPI } from '../../core/api/apiDcp'
import Button from '../Button'
import styles from './styles.css'
const RequestSms = ({ setIsModalActive }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const validationValues = () => {
        let countStage = 0
        const errorValues = []
        if (name.length >= 2 && name.length < 15) {
            countStage++
        } else {
            errorValues.push('Ошибка ввода имени')
        }

        if (validatePhone(phoneNumber)) {
            countStage++
        } else {
            errorValues.push('Ошибка ввода телефона')
        }
        if (validateEmail(email)) {
            countStage++
        } else {
            errorValues.push('Ошибка ввода email')
        }
        if (message.length > 5 && message.length < 200) {
            countStage++
        } else {
            errorValues.push('Слишком длинное или маленькое сообщение ')
        }
        if (countStage === 4) {
            const date = new Date().toLocaleDateString('ru-RU') + ' ' + new Date().toLocaleTimeString()
            sendMessageAPI(name, phoneNumber, email, message, date)
            setIsModalActive(false)
        } else {
            setIsModalActive(false)
        }
    }
    const validateEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(email)
    }
    const validatePhone = (phone) => {
        const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        return regex.test(phone)
    }
    return (
        <div className={styles.requestContainer}>
            <div className={styles.orderItem}>
                <div className={styles.blockHeaderText}>Написать нам</div>
                <div className={styles.fieldFlex}>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder='Имя*'
                            onBlur={(e) => {
                                setName(e.target.value)
                            }}
                            className={styles.textInput}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder='Email*'
                            onBlur={(e) => {
                                setEmail(e.target.value)
                            }}
                            className={styles.textInput}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder='Телефон'
                            onBlur={(e) => {
                                setPhoneNumber(e.target.value)
                            }}
                            className={styles.textInput}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            placeholder='Сообщение*'
                            onBlur={(e) => {
                                setMessage(e.target.value)
                            }}
                            className={styles.textInput}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.requestButtonsContainer}>
                <Button textButton='Отправить' handler={() => validationValues()} />
                <Button textButton='Закрыть' handler={() => setIsModalActive()} />
            </div>
        </div>
    )
}
RequestSms.propTypes = {
    setIsModalActive: PropTypes.func
}
export default RequestSms
