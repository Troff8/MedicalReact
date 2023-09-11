'use client';
import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps {
    title?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
    danger?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
}
const Button: React.FC<ButtonProps> = ({ title, icon, children, onClick, danger, disabled, type }) => {
    return (
        <button className={styles.button} type={type} disabled={disabled} onClick={onClick}>
            <div
                className={clsx(`${styles.buttonContainer} 

        ${danger && styles.buttonContainerDanger}
        ${disabled && styles.buttonContainerDisabled}`)}
            >
                {title}
                {icon ? icon : <></>}
                {children}
            </div>
        </button>
    );
};

export default Button;
