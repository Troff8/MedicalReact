import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NavigationMenu from '../../Components/NavigationMenu'
import Button from '../../Components/Button'
import Modal from '../../Components/Modal'
import RequestCall from '../../Components/RequestCall'
import RequestSms from '../../Components/RequestSms'
import styles from './styles.css'
import logoImage from '../../images/logo.png'
import callImage from '../../images/call.png'
const Header = ({ isMobile }) => {
    const [isModalRequestCallActive, setIsModalRequestCallActive] = useState(false)
    const [isModalRequestSmsActive, setIsModalRequestSmsActive] = useState(false)
    return (
        <>
            <div className={styles.header}>
                <div className={styles.blockLogo}>
                    <Link to={'/'}>
                        <img className={styles.imageLogo} src={logoImage} />
                    </Link>
                    <div className={styles.textBlock}>
                        <div className={styles.textLogoUp}>Консультативно-диагностическая</div>
                        <div className={styles.textLogoDown}>Поликлиника</div>
                    </div>
                </div>

                <div className={styles.blockInfoContacts}>
                    <div className={styles.infoNumber}>
                        <div className={styles.blockNumber}>
                            <img className={styles.imageInfoContacts} src={callImage} />
                            <div className={styles.textTelephone}>
                                <span className={styles.City}>Чапаевск </span>
                                <a href='tel:+78463930092'>
                                    +7(84639)
                                    <span className={styles.numberPhone}> 3-00-92 </span>
                                </a>
                            </div>
                        </div>
                        <div className={styles.blockNumber}>
                            <img className={styles.imageInfoContacts} src={callImage} />
                            <div className={styles.textTelephone}>
                                <span className={styles.City}>Безенчук</span>
                                <span className={styles.numberPhone}>
                                    <a href='tel:+78463930092'> +7 (927) 750-56-56 </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonsBlock}>
                        <Button textButton={'Написать нам'} handler={() => setIsModalRequestSmsActive(true)} />
                        <Button textButton={'Оставить заявку на звонок'} handler={() => setIsModalRequestCallActive(true)} />
                    </div>
                </div>
                <Modal isActive={isModalRequestCallActive} setActive={setIsModalRequestCallActive} isClosable={false}>
                    <RequestCall setIsModalActive={setIsModalRequestCallActive} />
                </Modal>
                <Modal isActive={isModalRequestSmsActive} setActive={setIsModalRequestSmsActive} isClosable={false}>
                    <RequestSms setIsModalActive={setIsModalRequestSmsActive} />
                </Modal>
            </div>
            <NavigationMenu
                menuItems={[
                    { name: 'ГЛАВНАЯ', link: '/' },
                    { name: 'СПЕЦИАЛИСТЫ', link: '/specialists' },
                    { name: 'УСЛУГИ', link: '/services' },
                    { name: 'ПРОФОСМОТРЫ', link: '/previews' },
                    { name: 'КОНТАКТЫ', link: '/contacts' }
                ]}
                isMobile={isMobile}
            />
        </>
    )
}
Header.propTypes = {
    isMobile: PropTypes.bool
}

export default Header
