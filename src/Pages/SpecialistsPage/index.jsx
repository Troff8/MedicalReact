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
                    number={item[5] === 'Чапаевск' ? '+7(84639) 3-00-92' : '+7 (927) 750-56-56'}
                />
            )
        })
    }
    return (
        <div className={styles.specialistsPage}>
            {!availabilitySlider ? <Slider menuItems={[slider1Image, slider2Image, slider3Image, slider4Image]} /> : null}
            <div className={styles.headerText} id='titleText'>
                Специалисты
            </div>
            <div className={styles.discriptionText}>
                Наши специалисты - одни из лучших в Самарской области и по праву заслужили благодарность многих пациентов своим
                высоким профессионализмом, точностью работы и человеческой отзывчивостью к нуждам пациентов. И мы гордимся
                коллективом работников, сформировавшимся в нашей клинике.
            </div>
            <div className={styles.discriptionText}>
                При необходимости можно получить консультации специалиста и провести осмотр на дому или на территории предприятия.
                Оценив качество и оперативность оказываемых нами услуг, а также высокий профессионализм наших специалистов, в
                число наших постоянных клиентов вошли многие крупные организации Самарской области.
            </div>
            <div className={styles.discriptionText}>
                Если вы хотите провести профилактический осмотр своих сотрудников; если вам нужна квалифицированная медицинская
                помощь; если вы пока еще не знаете, кому доверить заботу о своем здоровье,
                <span className={styles.textLinkRequest} onClick={() => setIsModalActive(true)}>
                    позвоните нам.
                </span>
            </div>
            <div className={styles.discriptionText}>
                Вы очень скоро сумеете оценить профессионализм и ответственность наших специалистов и тот высокий уровень работы,
                который мы поддерживаем на протяжении многих лет.
            </div>
            <div className={styles.headerText}>Направления:</div>
            <div className={styles.blockMenuSpecialists}>
                <div className={styles.menuSpecialists}>
                    <TypeDoctor title={'НЕВРОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'ОФТАЛЬМОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'ДЕРМАТОВЕНЕРОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'ОТОРИНОЛАРИНГОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'УРОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'ТЕРАПЕВТ'} handler={getListDoctors} />
                    <TypeDoctor title={'РЕВМАТОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'ХИРУРГ'} handler={getListDoctors} />
                    <TypeDoctor title={'РЕВМАТОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА'} handler={getListDoctors} />
                    <TypeDoctor title={'АКУШЕР-ГИНЕКОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'УЛЬТРАЗВУКОВАЯ ДИАГНОСТИКА'} handler={getListDoctors} />
                    <TypeDoctor title={'ЭНДОКРИНОЛОГ'} handler={getListDoctors} />
                    <TypeDoctor title={'КАРДИОЛОГ'} handler={getListDoctors} />
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
                        <div className={styles.blockHeaderText}>Ошибка</div>
                    </div>
                    <div className={styles.blockText}>Некорректный ввод данных</div>
                    <div className={styles.requestButtonsContainer}>
                        <Button textButton='Закрыть' handler={() => setIsModalValidationFalseActive(false)} />
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
