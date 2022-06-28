import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Modal = ({ isActive, setActive, isClosable, children }) => {
    return (
        <div
            className={isActive ? `${styles.modal} ${styles.active}` : styles.modal}
            onClick={() => {
                isClosable && setActive(false)
            }}
        >
            <div
                className={isActive ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    isActive: PropTypes.bool,
    setActive: PropTypes.func,
    isClosable: PropTypes.bool,
    children: PropTypes.any
}

Modal.defaultProps = {
    isActive: false,
    isClosable: true
}

export default Modal
