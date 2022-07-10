import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './styles.css'
const RequestSms = ({ setIsModalActive }) => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [checkStatusText, setCheckStatusText] = useState({})
    const validationValues = () => {
        let countStage = 0
        const objInfoText = {}
        if (name.length >= 2 && name.length < 15) {
            countStage++
        } else {
            objInfoText.nameFalse = 'Ошибка ввода имени'
        }

        if (validatePhone(phoneNumber)) {
            countStage++
        } else {
            objInfoText.numberFalse = 'Ошибка ввода телефона'
        }
        if (countStage === 2) {
            const objInfoOrder = {
                name,
                phoneNumber,
                operatorCall: 'Запрос на звонок'
            }
            console.log('отправлено')
            setIsModalActive(false)
        }
        if (countStage !== 2) {
            setCheckStatusText(objInfoText)
            setIsModalActive(false)
            console.log('Ошибка')
        }
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
                            className={checkStatusText.nameFalse ? `${styles.textInput} ${styles.inputError}` : styles.textInput}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder='Email*'
                            onBlur={(e) => {
                                setName(e.target.value)
                            }}
                            className={checkStatusText.nameFalse ? `${styles.textInput} ${styles.inputError}` : styles.textInput}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            placeholder='Телефон'
                            onBlur={(e) => {
                                setPhoneNumber(e.target.value)
                            }}
                            className={checkStatusText.nameFalse ? `${styles.textInput} ${styles.inputError}` : styles.textInput}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            placeholder='Сообщение*'
                            onBlur={(e) => {
                                setPhoneNumber(e.target.value)
                            }}
                            className={
                                checkStatusText.nameFalse ? `${styles.textAreaInput} ${styles.inputError}` : styles.textAreaInput
                            }
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
