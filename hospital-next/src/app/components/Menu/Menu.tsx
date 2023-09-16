'use client';
import React from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface MenuProps {
    items?: any[];
}
const Menu: React.FC<MenuProps> = ({ items }) => {
    const pathName = usePathname();
    return (
        <div className={styles.container}>
            <div className={styles.wrapperTitle}>
                <ul>
                    <li>
                        <h1>Консультативно-диагностическая Поликлиника</h1>
                        <Image src="/heartLogo.png" width={20} height={20} alt="heart" />
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
                            <Link key={item.title} href={`/${item.url}`}>
                                <li className={pathName === `/${item.url}` ? styles.active : styles.werw}>{item.title}</li>
                            </Link>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
