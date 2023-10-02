'use client';

import { FieldValues, useForm, SubmitHandler, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import Modal from '../Modal/Modal';
import useRequestCallModal from '../../hooks/useRequestCallModal';
import styles from './RequestCallModal.module.css';
import Button from '../Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';

const sendRequest = async (request: any) => {
    try {
        const res = await fetch('http://localhost:3000/api/requestCall', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return null;
    }
};

const RequestCallModal = () => {
    const [loading, setLoading] = useState(false);
    const requestModal = useRequestCallModal();
    const onChange = (open: boolean) => {
        if (!open) {
            requestModal.onClose();
        }
    };
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            number: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        setLoading(true);
        const res = await sendRequest(values);
        if (res) {
            toast.success('Заявка успешно создана! Скоро вам перезвонит оператор');
        } else {    
            toast.error('Ошибка отправки данных,попробуйте позже');
        }
        reset();
        requestModal.onClose();
    };
    return (
        <Modal isOpen={requestModal.isOpen} onChange={onChange}>
            <div className={styles.plan}>
                <div className={styles.inner}>
                    <span className={styles.pricing}>
                        <span>Заявка на звонок</span>
                    </span>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    minLength: 3,
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <Input
                                        label="Имя"
                                        id={'name'}
                                        errors={errors}
                                        type="text"
                                        {...field}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Controller
                                name="number"
                                control={control}
                                rules={{
                                    minLength: 7,
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <Input
                                        label="Телефон"
                                        id={'number'}
                                        errors={errors}
                                        type="string "
                                        {...field}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Button title="Оставить заявку" type="submit" disabled={loading} />
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default RequestCallModal;
