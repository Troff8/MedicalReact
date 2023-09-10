// TODO: no use react-slick
import styles from './Carousel.module.css';
export default function Carousel({ children }:any) {
    return <div className={styles.carousel}>{children}</div>;
}
