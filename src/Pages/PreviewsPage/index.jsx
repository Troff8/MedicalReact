import React from 'react'
import Slider from '../../Components/Slider'
import slider1Image from '../../images/slider1.png'
import slider2Image from '../../images/slider2.png'
import slider3Image from '../../images/slider3.png'
import slider4Image from '../../images/slider4.png'
import styles from './styles.css'

const PreviewsPage = () => {
    return (
        <div className={styles.mainPage}>
            <Slider menuItems={[slider1Image, slider2Image, slider3Image, slider4Image]} />
            <div className={styles.headerText} id='titleText'>
                Профосмотры
            </div>
            <div className={styles.discriptionText}>
                Специалистами клиники осуществляется проведение комплексных профилактических осмотров частных лиц и сотрудников
                предприятий.
            </div>
            <div className={styles.discriptionText}>
                Опыт и профессионализм наших специалистов, наличие всей необходимой материально-технической базы и высокая
                мобильность позволяют нам оказывать услуги в короткие сроки и на самом высоком уровне.
            </div>
            <div className={styles.headerText}>Наши клиенты</div>
            <div className={styles.clientText}>- Завод ООО «Фармопол-Волга»</div>
            <div className={styles.clientText}>- Страховая группа ЗАО «Уралсиб»</div>
            <div className={styles.clientText}>- Завод ОАО «Промсинтез»</div>
            <div className={styles.clientText}>- ФКП «Чапаевский механический завод»</div>
            <div className={styles.clientText}>- ФКП «Приволжский государственный боеприпасный испытательный полигон»</div>
            <div className={styles.clientText}>- ОАО «Теплоэнергокомпания» и многие другие.</div>
            <div className={styles.discriptionText}>
                Детали проведения профосмотров вы можете узнать, связавшись с нами по телефонам, указанным на странице контактов,
                или оставив свое сообщение на сайте.
            </div>
        </div>
    )
}

export default PreviewsPage
