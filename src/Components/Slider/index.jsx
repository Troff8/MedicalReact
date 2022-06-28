import React, { useState } from 'react'
import PropTypes from 'prop-types'
import leftImage from '../../images/left.png'
import rightImage from '../../images/right.png'
import styles from './styles.css'

const Slider = ({ menuItems }) => {
    const [pageNumber, setPageNumber] = useState(0)
    const mapMenu = (pageNumber) => {
        const currentItem = menuItems[pageNumber]
        return <img src={currentItem} className={styles.sliderImage} />
    }

    const nextHandler = () => {
        if (pageNumber < menuItems.length - 1) setPageNumber(pageNumber + 1)
    }

    const prevHandler = () => {
        if (pageNumber > 0) setPageNumber(pageNumber - 1)
    }
    return (
        <div className={styles.containerSlider}>
            <div className={styles.slider}>
                <div className={styles.sliderItem}>
                    <div className={styles.buttonNavigation} onClick={prevHandler}>
                        <img src={leftImage} />
                    </div>
                    {mapMenu(pageNumber)}
                    <div className={styles.buttonNavigation} onClick={nextHandler}>
                        <img src={rightImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}
Slider.propTypes = {
    menuItems: PropTypes.array
}
export default Slider
