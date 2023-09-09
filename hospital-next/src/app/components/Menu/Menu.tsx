import React from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface MenuProps {
    items?: any[];
}
const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperTitle}>
                <ul>
                    <li>
                        <h1>Консультативно-диагностическая Поликлиника</h1>
                        <Image src="/hospital.png" width={20} height={20} alt="Picture of the author" />
                    </li>

                    <li>
                        <span>
                            Вы не можете решить возникшие проблемы со здоровьем или хотите его сохранить? Мы знаем, как
                            это сделать!
                        </span>
                    </li>
                </ul>
            </div>
            <div className={styles.wrapperMenu}>
                <ul>
                    {items &&
                        items.map((item) => (
                            <li key={item}>
                                <Link href={`/${item.url}`}>{item.title}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
