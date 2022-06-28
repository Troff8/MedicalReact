import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const TypeDoctor = ({ title, handler }) => {
    return (
        <div className={styles.blockTypeDoctor}>
            <div className={styles.blockTitle}>{title}</div>
        </div>
    )
}
TypeDoctor.propTypes = {
    title: PropTypes.string,
    handler: PropTypes.func
}

export default TypeDoctor
