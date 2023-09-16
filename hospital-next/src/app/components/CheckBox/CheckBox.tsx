'use client';
import React from 'react';
import styles from './CheckBox.module.css';
import clsx from 'clsx';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckBoxProps {
    label?: string;
    id: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    disabled?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, id, required, register, errors, disabled }) => {
    return (
        <label htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                autoComplete={id}
                disabled={disabled}
                className={clsx(`
            ${styles.input}

            ${disabled && styles.inputDisabled}
        `)}
            />
            <span className={styles.textCheckBox}>{label}</span>
        </label>
    );
};

export default CheckBox;
