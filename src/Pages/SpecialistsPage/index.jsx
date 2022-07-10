import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Slider from '../../Components/Slider'
import Modal from '../../Components/Modal'
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
                    <TypeDoctor title={'НЕВРОЛОГ'} />
                    <TypeDoctor title={'ОФТАЛЬМОЛОГ'} />
                    <TypeDoctor title={'ДЕРМАТОВЕНЕРОЛОГ'} />
                    <TypeDoctor title={'ОТОРИНОЛАРИНГОЛОГ'} />
                    <TypeDoctor title={'УРОЛОГ'} />
                    <TypeDoctor title={'ТЕРАПЕВТ'} />
                    <TypeDoctor title={'РЕВМАТОЛОГ'} />
                    <TypeDoctor title={'ХИРУРГ'} />
                    <TypeDoctor title={'РЕВМАТОЛОГ'} />
                    <TypeDoctor title={'ФУНКЦИОНАЛЬНАЯ ДИАГНОСТИКА'} />
                    <TypeDoctor title={'АКУШЕР-ГИНЕКОЛОГ'} />
                    <TypeDoctor title={'УЛЬТРАЗВУКОВАЯ ДИАГНОСТИКА'} />
                    <TypeDoctor title={'ЭНДОКРИНОЛОГ'} />
                    <TypeDoctor title={'КАРДИОЛОГ'} />
                </div>
            </div>
            <div className={styles.listSpecialists}>
                <div className={styles.headerText}>Направление</div>
                <Specialist
                    name={'Илья'}
                    surname={'Трофимов'}
                    patronymic={'Сергеевич'}
                    direction={'Узи'}
                    experience={1}
                    number={'12131'}
                />
            </div>
            <Modal isActive={isModalActive} setActive={setIsModalActive} isClosable={false}>
                <RequestCall setIsModalActive={setIsModalActive} />
            </Modal>
        </div>
    )
}
SpecialistsPage.propTypes = {
    availabilitySlider: PropTypes.bool
}

export default SpecialistsPage
