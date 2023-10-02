'use client';
import React, { useState } from 'react';
import { FieldValues, useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import clsx from 'clsx';
import styles from './Subscription.module.css';
import { Input } from '../Input/Input';
import toast from 'react-hot-toast';

const sendSubscription = async (subscription: any) => {
    try {
        const res = await fetch('http://localhost:3000/api/subscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(subscription),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return null;
    }
};

const Subscription: React.FC = () => {
    const [subscriptionCache, setSubscriptionCache] = useLocalStorage('subscription');
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        if (subscriptionCache !== true) {
            const res = await sendSubscription(values);
            if (res) {
                setSubscriptionCache(true);
                toast.success('Спасибо за подписку!');
            } else {
                toast.error('Ошибка отправки данных,попробуйте позже');
            }
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
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input id={'email'} errors={errors} type="email" {...field} />
                            )}
                        />
                        <button className={styles.submitEmail} type="submit">
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
