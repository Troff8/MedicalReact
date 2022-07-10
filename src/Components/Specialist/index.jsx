import React from 'react'
import PropTypes from 'prop-types'
import callImage from '../../images/call.png'
import styles from './styles.css'

const Specialist = ({ name, surname, patronymic, direction, experience, number }) => {
    return (
        <div className={styles.blockSpecialist}>
            <div className={styles.infoSpecialist}>
                <div className={styles.fio}>
                    {surname} {name} {patronymic}
                </div>
            </div>
            <div className={styles.infoSpecialist}>Направление: {direction}</div>
            <div className={styles.infoSpecialist}>Стаж: {experience}+</div>
            <div className={styles.numberInfo}>
                <img className={styles.imageInfoContacts} src={callImage} />
                {number}
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
    number: PropTypes.string
}

export default Specialist
