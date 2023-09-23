'use client';

import { FieldValues, useForm, SubmitHandler, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import Modal from '../Modal/Modal';
import useRecordHospitalModal from '../../hooks/useRecordHospitalModal';
import styles from './RecordHospitalModal.module.css';
import Button from '../Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';
import Select from '../Select/Select';

const RecordHospitalModal = () => {
    const [loading, setLoading] = useState(false);
    const recordModal = useRecordHospitalModal();
    const onChange = (open: boolean) => {
        if (!open) {
            recordModal.onClose();
        }
    };
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            number: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = (values) => {
        setLoading(true);
        toast.success('Вы записались! Скоро вам перезвонит оператор');
        recordModal.onClose();
    };
    return (
        <Modal isOpen={recordModal.isOpen} onChange={onChange}>
            <div className={styles.plan}>
                <div className={styles.inner}>
                    <span className={styles.pricing}>
                        <span>Чапаевск</span>
                    </span>
                    <p className={styles.title}>Запись на прием</p>
                    <p className={styles.info}>Заполните анкету</p>
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
                                name="surname"
                                control={control}
                                rules={{
                                    minLength: 4,
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <Input
                                        label="Фамилия"
                                        id={'surname'}
                                        errors={errors}
                                        type="text"
                                        {...field}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <Input
                                        label="Email"
                                        id={'email'}
                                        errors={errors}
                                        type="email"
                                        {...field}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Controller
                                name="number"
                                control={control}
                                rules={{
                                    minLength: 4,
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
                            <Controller
                                name="date"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <Input
                                        label="Дата"
                                        id={'date'}
                                        errors={errors}
                                        type="date"
                                        {...field}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Button title="Записаться" type="submit" disabled={loading} />
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default RecordHospitalModal;
