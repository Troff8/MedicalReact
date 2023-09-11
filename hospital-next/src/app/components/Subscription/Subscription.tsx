'use client';
import React, { useState } from 'react';
import styles from './Subscription.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Subscription: React.FC = () => {
    const [submit, setSubmit] = useState(false);
    return (
        <div className={styles.subscriptionContainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <form className={`${styles.subscription} ${submit ? styles.done : styles.test}`}>
                        <Input type="email" placeholder="ivanov@mail.ru" />
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
