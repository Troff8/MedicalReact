'use client';
import React from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
    type?: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    disabled?: boolean;
    forwardRef?: React.Ref<HTMLInputElement>;
}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, id, type, required, register, errors, disabled, ...props }, ref) => {
        return (
            <div className={styles.container}>
                <label htmlFor={id}>{label}</label>
                <div className={styles.inputWrapper}>
                    <input
                        id={id}
                        type={type}
                        autoComplete={id}
                        disabled={disabled}
                        {...props}
                        className={clsx(`
                    ${styles.input}

                    ${disabled && styles.inputDisabled}
                `)}
                        ref={ref}
                    />
                </div>
            </div>
        );
    },
);
