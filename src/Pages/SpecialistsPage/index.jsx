import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getListAPI } from '../../core/api/apiDcp'
import Slider from '../../Components/Slider'
import Modal from '../../Components/Modal'
import Button from '../../Components/Button'
import Specialist from '../../Components/Specialist'
import RequestCall from '../../Components/RequestCall'
import TypeDoctor from '../../Components/TypeDoctor'
import slider1Image from '../../images/slider1.png'
import slider2Image from '../../images/slider2.png'
import slider3Image from '../../images/slider3.png'
import slider4Image from '../../images/slider4.png'
import styles from './styles.css'

const SpecialistsPage = ({ availabilitySlider }) => {
    const [isModalActive, setIsModalActive] = useState(false)
    const [direction, setDirection] = useState('')
    const [listDoctors, setListDoctors] = useState()
    const [isModalValidationFalseActive, setIsModalValidationFalseActive] = useState(false)
    const getListDoctors = async (title) => {
        setDirection(title)
        const arrDoctors = await getListAPI(title)
        const arrlistDoctors = []
        for (let i = 0; i < arrDoctors.length; i++) {
            arrlistDoctors.push([
                arrDoctors[i].name,
                arrDoctors[i].surname,
                arrDoctors[i].patronymic,
                arrDoctors[i].direction,
                arrDoctors[i].experience,
                arrDoctors[i].city
            ])
        }
        setListDoctors(arrlistDoctors)
        document.getElementById('direction').scrollIntoView({
            behavior: 'smooth'
        })
    }
    const viewListDoctors = (listDoctors) => {
        return listDoctors.map((item, index) => {
            return (
                <Specialist
                    key={index}
                    name={item[0]}
                    surname={item[1]}
                    patronymic={item[2]}
                    direction={item[3]}
                    experience={item[4]}
                    city={item[5]}
                    number={item[5] === '????????????????' ? '+7(84639) 3-00-92' : '+7 (927) 750-56-56'}
                />
            )
        })
    }
    return (
        <div className={styles.specialistsPage}>
            {!availabilitySlider ? <Slider menuItems={[slider1Image, slider2Image, slider3Image, slider4Image]} /> : null}
            <div className={styles.headerText} id='titleText'>
                ??????????????????????
            </div>
            <div className={styles.discriptionText}>
                ???????? ?????????????????????? - ???????? ???? ???????????? ?? ?????????????????? ?????????????? ?? ???? ?????????? ?????????????????? ?????????????????????????? ???????????? ?????????????????? ??????????
                ?????????????? ??????????????????????????????????, ?????????????????? ???????????? ?? ???????????????????????? ?????????????????????????? ?? ???????????? ??????????????????. ?? ???? ????????????????
                ?????????????????????? ????????????????????, ???????????????????????????????? ?? ?????????? ??????????????.
            </div>
            <div className={styles.discriptionText}>
                ?????? ?????????????????????????? ?????????? ???????????????? ???????????????????????? ?????????????????????? ?? ???????????????? ???????????? ???? ???????? ?????? ???? ???????????????????? ??????????????????????.
                ???????????? ???????????????? ?? ?????????????????????????? ?????????????????????? ???????? ??????????, ?? ?????????? ?????????????? ?????????????????????????????? ?????????? ????????????????????????, ??
                ?????????? ?????????? ???????????????????? ???????????????? ?????????? ???????????? ?????????????? ?????????????????????? ?????????????????? ??????????????.
            </div>
            <div className={styles.discriptionText}>
                ???????? ???? ???????????? ???????????????? ???????????????????????????????? ???????????? ?????????? ??????????????????????; ???????? ?????? ?????????? ?????????????????????????????????? ??????????????????????
                ????????????; ???????? ???? ???????? ?????? ???? ????????????, ???????? ???????????????? ???????????? ?? ?????????? ????????????????,
                <span className={styles.textLinkRequest} onClick={() => setIsModalActive(true)}>
                    ?????????????????? ??????.
                </span>
            </div>
            <div className={styles.discriptionText}>
                ???? ?????????? ?????????? ?????????????? ?????????????? ?????????????????????????????? ?? ?????????????????????????????? ?????????? ???????????????????????? ?? ?????? ?????????????? ?????????????? ????????????,
                ?????????????? ???? ???????????????????????? ???? ???????????????????? ???????????? ??????.
            </div>
            <div className={styles.headerText}>??????????????????????:</div>
            <div className={styles.blockMenuSpecialists}>
                <div className={styles.menuSpecialists}>
                    <TypeDoctor title={'????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'??????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'??????????????????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'???????????????????????????? ??????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????-??????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'???????????????????????????? ??????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'????????????????????????'} handler={getListDoctors} />
                    <TypeDoctor title={'??????????????????'} handler={getListDoctors} />
                </div>
            </div>
            <div className={styles.listSpecialists}>
                <div className={styles.headerText} id='direction'>
                    {direction}
                </div>
                {listDoctors && viewListDoctors(listDoctors)}
            </div>
            <Modal isActive={isModalActive} setActive={setIsModalActive} isClosable={false}>
                <RequestCall
                    setIsModalActive={setIsModalActive}
                    setIsModalValidationFalseActive={setIsModalValidationFalseActive}
                />
            </Modal>
            <Modal isActive={isModalValidationFalseActive} setActive={setIsModalValidationFalseActive} isClosable={false}>
                <div className={styles.requestContainer}>
                    <div className={styles.orderItem}>
                        <div className={styles.blockHeaderText}>????????????</div>
                    </div>
                    <div className={styles.blockText}>???????????????????????? ???????? ????????????</div>
                    <div className={styles.requestButtonsContainer}>
                        <Button textButton='??????????????' handler={() => setIsModalValidationFalseActive(false)} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}
SpecialistsPage.propTypes = {
    availabilitySlider: PropTypes.bool
}

export default SpecialistsPage
