import React from 'react'
import PropTypes from 'prop-types'
import locationImage from '../../images/location.png'
import timeImage from '../../images/time.png'
import callImage from '../../images/call.png'
import styles from './styles.css'

const CardHospital = ({ title, address, timeJobs, phoneNumber }) => {
    return (
        <div className={styles.cardHospital}>
            <div className={styles.headerText}>{title}</div>
            <div className={styles.blockDiscription}>
                <div className={styles.blockInfo}>
                    <img className={styles.imageInfoContacts} src={locationImage} />
                    Адрес: <span className={styles.infoText}>{address}</span>
                </div>
                <div className={styles.blockInfo}>
                    <img className={styles.imageInfoContacts} src={timeImage} />
                    Время работы: <span className={styles.infoText}>{timeJobs}</span>
                </div>
                <div className={styles.blockInfo}>
                    <img className={styles.imageInfoContacts} src={callImage} />
                    Телефон: <span className={styles.infoText}>{phoneNumber}</span>
                </div>
            </div>
        </div>
    )
}

CardHospital.propTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
    timeJobs: PropTypes.string,
    phoneNumber: PropTypes.string
}

export default CardHospital
