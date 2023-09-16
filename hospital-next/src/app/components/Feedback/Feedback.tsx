'use client';
import React, { useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import styles from './Feedback.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';
import Link from 'next/link';

const Feedback: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            family: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input label="Имя" register={register} id={'name'} errors={errors} />
            <Input label="Фамилия" register={register} id={'family'} errors={errors} />
            <Input label="Email" register={register} id={'email'} errors={errors} type="email" />
            <Input label="Телефон" register={register} id={'phone'} errors={errors} />
            <Textarea label="Ваше сообщение" register={register} id={'message'} errors={errors} />
            <div>
                <Input register={register} id={'phone'} errors={errors} type="checkBox" />
                <p>
                    Отправляя запрос, вы соглашаетесь с нашей{' '}
                    <Link href={'/privacyPolicy'}>политикой конфиденциальности</Link>
                </p>
            </div>
            <Button title="Отправить" disabled={loading} type="submit"></Button>
        </form>
    );
};

export default Feedback;
