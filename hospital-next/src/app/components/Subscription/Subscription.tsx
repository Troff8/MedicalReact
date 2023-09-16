'use client';
import React, { useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import styles from './Subscription.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Subscription: React.FC = () => {
    const [submit, setSubmit] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {};
    return (
        <div className={styles.subscriptionContainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <form
                        className={`${styles.subscription} ${submit ? styles.done : styles.test}`}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input register={register} id={'Email'} errors={errors} type="email" />
                        <button
                            className={styles.submitEmail}
                            type="button"
                            onClick={() => {
                                setSubmit(true);
                            }}
                        >
                            <span className={styles.beforeSubmit}>Подписаться</span>
                            <span className={styles.afterSubmit}>Спасибо за подписку!</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
