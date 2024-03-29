'use client';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import styles from './AuthForm.module.css';
import {Input} from '../Input/Input';
import Button from '../Button/Button';
import toast from 'react-hot-toast';

type Variant = 'REGISTER' | 'LOGIN';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [loading, setLoading] = useState(false);
    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        toast.error('Авторизация временно недоступна!');

        if (variant === 'LOGIN') {
            // login
        } else {
            // axios
        }
    };
    const socialAction = (action: string) => {
        setLoading(true);
    };
    return (
        <div className={styles.wrapperAuth}>
            <div className={styles.auth}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && <Input label="Имя" register={register} id={'name'} errors={errors} />}
                    <Input label="Email" register={register} id={'Email'} errors={errors} type="email" />
                    <Input label="Пароль" register={register} id={'Password'} errors={errors} type="password" />
                    <div>
                        <Button
                            title={variant === 'REGISTER' ? 'Регистрация' : 'Вход'}
                            disabled={loading}
                            type="submit"
                        ></Button>
                    </div>
                </form>
            </div>
            <div className={styles.socialButton}>
                <Button title={'Войти через '} icon={<Image src="/search.png" width={20} height={20} alt="google" />} />
            </div>
            <div className={styles.bottom}>
                <div onClick={toggleVariant}>
                    {variant !== 'REGISTER' ? <span>Нету аккаунта? Регистрация</span> : <span>Войти</span>}
                </div>
            </div>
        </div>
    );
};
export default AuthForm;
