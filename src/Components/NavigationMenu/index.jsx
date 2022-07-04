import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles.css'

const NavigationMenu = ({ menuItems, isMobile }) => {
    const [renderMobileMenuList, setRenderMobileMenuList] = useState(false)
    const [statusMenu, setStatusMenu] = useState(false)
    const mapMenu = () => {
        return (
            menuItems &&
            menuItems.map((item, index) => {
                return (
                    <Link key={index} className={styles.navigationMenuItem} to={item.link}>
                        <span className={styles.navigationMenuItemText}>{item.name}</span>
                    </Link>
                )
            })
        )
    }

    if (!isMobile) {
        return (
            <div className={styles.navigationMenuContainer}>
                <ul className={styles.navigationMenuList}>{mapMenu()}</ul>
            </div>
        )
    }
    if (isMobile) {
        return (
            <div className={styles.navigationMenuContainer}>
                <div
                    className={styles.openMenu}
                    onClick={() => {
                        setRenderMobileMenuList(!renderMobileMenuList)
                        setStatusMenu(!statusMenu)
                    }}
                >
                    <div className={styles.btnMenu}>
                        <span> </span>
                    </div>
                    {statusMenu ? <div> Закрыть меню </div> : <div> Открыть меню </div>}
                </div>
                {renderMobileMenuList ? <ul className={styles.navigationMenuList}>{mapMenu()}</ul> : null}
            </div>
        )
    }
}

NavigationMenu.propTypes = {
    menuItems: PropTypes.array,
    isMobile: PropTypes.bool
}

export default NavigationMenu
