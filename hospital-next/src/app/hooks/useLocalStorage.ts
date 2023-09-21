import { useCallback, useState } from 'react';

import { safelyParseJson } from '../utils/safelyParseJson';

export type Subscription = boolean | null;

type SetValue<TValue> = (value: TValue | ((previousValue: TValue) => TValue)) => void;

interface StorageKey {
    subscription: Subscription;
}

export function useLocalStorage<T extends keyof StorageKey>(
    storageKey: T,
    defaultValue?: any,
): [StorageKey[T], SetValue<StorageKey[T]>] {
    const safelySetStorage = useCallback(
        (valueToStore: string) => {
            try {
                window.localStorage.setItem(storageKey, valueToStore);
            } catch (e) {}
        },
        [storageKey],
    );

    const [storedValue, setStoredValue] = useState<StorageKey[T]>(() => {
        let valueToStore: string;
        try {
            valueToStore = window.localStorage.getItem(storageKey) || JSON.stringify(defaultValue);
        } catch (e) {
            valueToStore = JSON.stringify(defaultValue);
        }

        safelySetStorage(valueToStore);
        return safelyParseJson(valueToStore);
    });

    const setValue: SetValue<StorageKey[T]> = useCallback(
        (value) => {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            safelySetStorage(JSON.stringify(valueToStore));
            setStoredValue(valueToStore);
        },
        [safelySetStorage, storedValue],
    );

    return [storedValue, setValue];
}
