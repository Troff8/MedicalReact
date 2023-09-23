'use client';
import React from 'react';
import styles from './Textarea.module.css';
import clsx from 'clsx';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    disabled?: boolean;
    forwardRef?: React.Ref<HTMLTextAreaElement>;
}

// eslint-disable-next-line react/display-name
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, id, required, register, errors, disabled, ...props }, ref) => {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <div className={styles.inputWrapper}>
                    <textarea
                        ref={ref}
                        id={id}
                        autoComplete={id}
                        disabled={disabled}
                        {...props}
                        className={clsx(`
                    ${styles.input}

                    ${disabled && styles.inputDisabled}
                `)}
                    ></textarea>
                </div>
            </div>
        );
    },
);
