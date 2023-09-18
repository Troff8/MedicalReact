'use client';
// TODO: no use react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carousel.module.css';
import CardSpecialist from '../CardSpecialist/CardSpecialist';

const specialists = [
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
    { title: 'Профессор, доктор мед. наук Марк Блохинг', direction: 'Отоларингология' },
];
export default function CarouselCustom() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <div className={styles.container}>
            <Carousel responsive={responsive} infinite={true}>
                {specialists.map((specialist) => (
                    <CardSpecialist title={specialist.title} direction={specialist.direction} key={specialist.title}/>
                ))}
            </Carousel>
        </div>
    );
}
