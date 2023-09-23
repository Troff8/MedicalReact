'use client';
import React, { useState } from 'react';
import { FieldValues, useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './Feedback.module.css';
import { Input } from '../Input/Input';
import Button from '../Button/Button';
import {Textarea} from '../Textarea/Textarea';
import CheckBox from '../CheckBox/CheckBox';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Feedback: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        toast.success('Заявка успешно создана!');
        console.log(data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Controller
                name="name"
                control={control}
                rules={{
                    minLength: 3,
                    required: true,
                }}
                render={({ field }) => (
                    <Input label="Имя" id={'name'} errors={errors} type="text" {...field} disabled={loading} />
                )}
            />
            <Controller
                name="surname"
                control={control}
                rules={{
                    minLength: 3,
                    required: true,
                }}
                render={({ field }) => (
                    <Input label="Фамилия" id={'surname'} errors={errors} type="text" {...field} disabled={loading} />
                )}
            />
            <Controller
                name="email"
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field }) => (
                    <Input label="Email" id={'email'} errors={errors} type="email" {...field} disabled={loading} />
                )}
            />
            <Controller
                name="phone"
                control={control}
                rules={{
                    minLength: 4,
                    required: true,
                }}
                render={({ field }) => (
                    <Input label="Телефон" id={'phone'} errors={errors} type="string " {...field} disabled={loading} />
                )}
            />
            <Controller
                name="message"
                control={control}
                rules={{
                    minLength: 4,
                    required: true,
                }}
                render={({ field }) => (
                    <Textarea label="Ваше сообщение" id={'message'} errors={errors} {...field} disabled={loading} />
                )}
            />
            <CheckBox
                label={'Я согласен с использованием необходимых технологий Cookie для обработки моего запроса.'}
                id={'phone'}
                errors={errors}
            />
            <p>
                Отправляя запрос, вы соглашаетесь с нашей{' '}
                <Link href={'/privacyPolicy'}>политикой конфиденциальности</Link>
            </p>
            <Button title="Отправить" disabled={loading} type="submit"></Button>
        </form>
    );
};

export default Feedback;
