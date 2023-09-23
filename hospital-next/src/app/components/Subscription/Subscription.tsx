'use client';
import React, { useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import clsx from 'clsx';
import styles from './Subscription.module.css';
import {Input} from '../Input/Input';
import toast from 'react-hot-toast';

const Subscription: React.FC = () => {
    const [subscriptionCache, setSubscriptionCache] = useLocalStorage('subscription');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (subscriptionCache !== true) {
            setSubscriptionCache(true);
            toast.success('Спасибо за подписку!');
        }
    };
    return (
        <div className={styles.subscriptionContainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <form
                        className={clsx(`
                        ${styles.subscription}
            
                        ${subscriptionCache && styles.done}
                    `)}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input register={register} id={'Email'} errors={errors} type="email" />
                        <button className={styles.submitEmail} type="button" onClick={onSubmit}>
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
