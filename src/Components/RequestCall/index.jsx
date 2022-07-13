import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './styles.css'
const RequestCall = ({ setIsModalActive }) => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
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
        if (countStage === 2) {
            const date = new Date().toLocaleDateString('ru-RU') + ' ' + new Date().toLocaleTimeString()
            const objRequestCall = {
                name,
                phoneNumber,
                date
            }
            setIsModalActive(false)
        }
        if (countStage !== 2) {
            setIsModalActive(false)
        }
    }
    const validatePhone = (phone) => {
        const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        return regex.test(phone)
    }
    return (
        <div className={styles.requestContainer}>
            <div className={styles.orderItem}>
                <div className={styles.blockHeaderText}>Мы Вам перезвоним</div>
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
                            placeholder='Телефон*'
                            onBlur={(e) => {
                                setPhoneNumber(e.target.value)
                            }}
                            className={styles.textInput}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.blockText}>Оставьте заявку на звонок и мы вам перезвоним!</div>
            <div className={styles.requestButtonsContainer}>
                <Button textButton='Отправить заявку' handler={() => validationValues()} />
                <Button textButton='Закрыть' handler={() => setIsModalActive()} />
            </div>
        </div>
    )
}
RequestCall.propTypes = {
    setIsModalActive: PropTypes.func
}
export default RequestCall
