import React from 'react'
import Slider from '../../Components/Slider'
import Service from '../../Components/Service'
import slider1Image from '../../images/slider1.png'
import slider2Image from '../../images/slider2.png'
import slider3Image from '../../images/slider3.png'
import slider4Image from '../../images/slider4.png'
import styles from './styles.css'

const ServicesPage = () => {
    return (
        <div className={styles.mainPage}>
            <Slider menuItems={[slider1Image, slider2Image, slider3Image, slider4Image]} />
            <div className={styles.headerText} id='titleText'>
                Услуги
            </div>
            <div className={styles.listServices}>
                <Service
                    img={require('../../images/speleoterapiya.jpg')}
                    title={'Спелеотерапия'}
                    arrList={[
                        'Восстановление проходимости бронхов;',
                        'Повышение общего и местного иммунитета;',
                        'Облегчение отхождения мокроты, снижение аллергии;',
                        'Противовоспалительное действие;',
                        'Стабилизация психоэмоционального состояния человека;',
                        'Нормализация артериального давления в начальных стадиях.'
                    ]}
                    objText={{
                        text_one:
                            'Высокоэффективный метод лечения без лекарств вдыханием воздуха, насыщенного сухим аэрозолем хлорида натрия.',
                        text_two: 'Результаты спелеотерапии:',
                        text_three:
                            'Спелеотерапия (соляная шахта) не вызывает побочных действий, поэтому может применяться при лечении маленьких детей и беременных женщин.',
                        text_four:
                            'Воздействие спелеотерапии усиливается при сочетании с лечебной физкультурой, массажем, иглорефлексотерапией, позволяет отказаться от лекарственных средств.',
                        text_five:
                            'Спелеотерапия восстанавливает компенсаторные резервы организма, предупреждает обострение имеющихся хронических заболеваний и снижает риск возникновения простудных заболеваний, особенно у детей дошкольного возраста.',
                        text_six:
                            'Курс лечения 10-15 сеансов по 30 минут. Больным с хронической патологией органов дыхания верхних дыхательных путей проводится 2 раза в год.'
                    }}
                />
                <Service
                    img={require('../../images/apparatnyij-limfodrenazh.jpg')}
                    title={'Аппаратный лимфодренаж'}
                    arrList={[
                        'Уменьшению отечности тканей, нормализации водного баланса в них;',
                        'Активизации процессов крово- и лимфообращения;',
                        'Нормализации обменных процессов в организме',
                        'Снижению веса;',
                        'Повышению тонуса кожи, устранению дряблости и целлюлита;',
                        'Повышению общего тонуса организма, стрессоустойчивости и иммунитета.'
                    ]}
                    objText={{
                        text_one:
                            'Данная процедура является эффективным и безопасным способом оздоровления организма и способствует:'
                    }}
                />
                <Service
                    img={require('../../images/tambukanskaya-gryaz.jpg')}
                    title={'Тамбуканская грязь'}
                    arrList={[
                        'Остеохондрозе позвоночника;',
                        'Артрозах и артритах крупных суставов;',
                        'Заболеваниях желудочно-кишечного тракта;',
                        'Заболеваниях нервной системы;',
                        'Заболеваниях сосудистой системы;',
                        'Заболеваниях органов дыхания нетуберкулезного характера;',
                        'Заболеваниях кожи.'
                    ]}
                    objText={{
                        text_one: 'Применение показано при:'
                    }}
                />
                <Service
                    img={require('../../images/lechenie-bez-lekarstv.jpg')}
                    title={'Лечение без лекарств'}
                    arrList={[
                        'Массаж классический для детей и взрослых,',
                        'Гидромассаж незаменим при лечении и реабилитации пациентов с заболеваниями позвоночника. Гидромассаж снимает стресс, улучшает настроение, обладает выраженным косметическим воздействием на состояние кожи.'
                    ]}
                    objText={{}}
                />
                <Service
                    img={require('../../images/kedrovaya-bochka.jpg')}
                    title={'Мини-сауна «Кедровая бочка»'}
                    arrList={[]}
                    objText={{
                        text_one:
                            'Мини-сауна «Кедровая бочка» - сочетание воздействия горячего пара, кедра при необходимости лекарственных трав. Поскольку голова пациента во время процедуры находится снаружи «кедровой бочки», и он дышит обычным воздухом, лечение хорошо переносится. «Кедровая бочка» улучшает кровообращение, нормализует обмен веществ, восстанавливает иммунитет, выводит токсины из организма. Решает проблему лишнего веса, очищает и омолаживает кожу. Одним из показаний является хронические заболевания органов женской половой системы.'
                    }}
                />
                <Service
                    img={require('../../images/holter.jpg')}
                    title={'Холтер'}
                    arrList={[]}
                    objText={{
                        text_one:
                            'Холтер — это портативный монитор, с помощью которого осуществляется длительная запись сердечного ритма. Обычно холтер фиксируется на теле пациента на срок от 24 часов до 3 суток. Все это время прибор точно фиксирует все особенности сердечного ритма, которые впоследствии расшифровывает лечащий врач-кардиолог. Исследование при помощи холтер-монитора показано в случае, когда обычная кардиограмма не может дать достаточно сведений о состоянии сердца пациента.',
                        text_two:
                            'При установке холтер-монитора к грудной клетке пациента прилепляются электроды, соединенные с записывающим устройством. Ношение холтер-монитора причиняет лишь незначительное неудобство, при этом само исследование является очень точным и информативным, что позволяет лечащему врачу поставить правильный диагноз.'
                    }}
                />
            </div>
            <div className={styles.titleService}>УЗИ, ЭКГ и многое другое</div>
        </div>
    )
}

export default ServicesPage
