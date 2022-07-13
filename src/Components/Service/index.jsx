import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Service = ({ img, title, objText, arrList }) => {
    const renderList = () => {
        return arrList.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    }
    return (
        <div className={styles.cardService}>
            <div className={styles.titleService}>{title}</div>
            <div className={styles.blockImage}>
                <img className={styles.imageService} src={img} />
            </div>
            <div className={styles.discriptionService}>{objText.text_one !== undefined ? objText.text_one : ''}</div>
            <div className={styles.discriptionService}>{objText.text_two !== undefined ? objText.text_two : ''}</div>
            <ul>{renderList()}</ul>
            <div className={styles.discriptionService}>{objText.text_three !== undefined ? objText.text_three : ''}</div>
            <div className={styles.discriptionService}>{objText.text_four !== undefined ? objText.text_four : ''}</div>
            <div className={styles.discriptionService}>{objText.text_five !== undefined ? objText.text_five : ''}</div>
            <div className={styles.discriptionService}>{objText.text_six !== undefined ? objText.text_six : ''}</div>
        </div>
    )
}
Service.propTypes = {
    img: PropTypes.any,
    title: PropTypes.string,
    objText: PropTypes.object,
    arrList: PropTypes.array
}

export default Service
