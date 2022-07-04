import React from 'react'
import SpecialistsPage from '../SpecialistsPage'
import Slider from '../../Components/Slider'
import CardHospital from '../../Components/CardHospital'
import slider1Image from '../../images/slider1.png'
import slider2Image from '../../images/slider2.png'
import slider3Image from '../../images/slider3.png'
import slider4Image from '../../images/slider4.png'
import styles from './styles.css'

const MainPage = () => {
    return (
        <>
            <div className={styles.mainPage}>
                <Slider menuItems={[slider1Image, slider2Image, slider3Image, slider4Image]} />
                <div className={styles.blockText}>
                    <div id='titleText' className={styles.headerText}>
                        Консультативно-диагностическая поликлиника
                    </div>
                    <div className={styles.smallHeaderText}>
                        Вы не можете решить возникшие проблемы со здоровьем или хотите его сохранить? Мы знаем, как это сделать!
                    </div>
                    <div className={styles.discriptionText}>
                        ООО «Консультативно-диагностическая поликлиника» осуществляет медицинские услуги для населения и
                        организаций Самарской области с 2009 года. За это время мы сформировали дружный коллектив профессионалов,
                        способных оказать качественную, квалифицированную и оперативную консультационную и лечебную помощь
                        гражданам в самых разных ситуациях.
                    </div>
                    <div className={styles.discriptionText}>
                        На базе клиники проводятся консультации, ведение пациентов, а также их лечение с помощью новейших техник и
                        методик, в том числе - без лекарств.
                    </div>
                    <div className={styles.headerText}>Мы находимся:</div>{' '}
                </div>

                <div className={styles.cardsHospital}>
                    <CardHospital
                        title={'Чапаевск'}
                        address={'Чапаевск, ул. Ватутина, д. 11'}
                        timeJobs={'Будни:8:00-19:00'}
                        phoneNumber={'+7 (84639) 3-00-92 '}
                    />
                    <CardHospital
                        title={'Безенчук'}
                        address={'Безенчук, ул. Советская, д. 56'}
                        timeJobs={'Будни:8:00-19:00,Суббота 8:00-17:00'}
                        phoneNumber={'+7 (927) 750-56-56'}
                    />
                </div>
            </div>
            <SpecialistsPage availabilitySlider={true} />
        </>
    )
}
export default MainPage
