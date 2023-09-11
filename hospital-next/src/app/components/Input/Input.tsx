'use client';
import React from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>, 
    errors?: FieldErrors,
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type, required, register, errors, disabled }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className={styles.inputWrapper}>
                <input id={id}
                type={type}
                autoComplete={id}
                disabled={disabled}
                className={clsx(`
                    ${styles.input}

                    ${disabled && styles.inputDisabled}
                `)}
                />
            </div>
        </div>
    );
};

export default Input;
