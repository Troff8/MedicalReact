import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Button = ({ textButton, handler }) => {
    return (
        <div className={styles.buttonContainer} onClick={handler}>
            <div className={styles.buttonText}>{textButton}</div>
        </div>
    )
}

Button.propTypes = {
    textButton: PropTypes.string,
    handler: PropTypes.func
}

export default Button
