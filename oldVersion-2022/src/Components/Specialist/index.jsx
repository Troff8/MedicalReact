import React from 'react'
import PropTypes from 'prop-types'
import callImage from '../../images/call.png'
import locationImage from '../../images/location.png'
import styles from './styles.css'

const Specialist = ({ name, surname, patronymic, direction, experience, city, number }) => {
    return (
        <div className={styles.blockSpecialist}>
            <div className={styles.infoSpecialist}>
                <div className={styles.fio}>
                    {surname} {name} {patronymic}
                </div>
            </div>
            <div className={styles.infoSpecialist}>Направление: {direction}</div>
            <div className={styles.infoSpecialist}>Стаж: {experience}+</div>
            <div className={styles.allInfo}>
                <img className={styles.imageInfoContacts} src={locationImage} />
                {city}
            </div>
            <div className={styles.allInfo}>
                <img className={styles.imageInfoContacts} src={callImage} />
                <a href={`tel:${number}`}>{number}</a>
            </div>
        </div>
    )
}

Specialist.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    patronymic: PropTypes.string,
    direction: PropTypes.string,
    experience: PropTypes.number,
    city: PropTypes.string,
    number: PropTypes.string
}

export default Specialist
