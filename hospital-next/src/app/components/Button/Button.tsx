import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    title: string;
    icon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ title, icon }) => {
    return (
        <div className={styles.buttonContainer}>
            <div className={styles.buttonText}>{title}</div>
            {icon ? icon : <></>}
        </div>
    );
};

export default Button;
