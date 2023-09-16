'use client';
import React from 'react';
import styles from './Textarea.module.css';
import clsx from 'clsx';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface TextareaProps {
    label: string;
    id: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    disabled?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, required, register, errors, disabled }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className={styles.inputWrapper}>
                <textarea
                    id={id}
                    autoComplete={id}
                    disabled={disabled}
                    className={clsx(`
                    ${styles.input}

                    ${disabled && styles.inputDisabled}
                `)}
                ></textarea>
            </div>
        </div>
    );
};

export default Textarea;
