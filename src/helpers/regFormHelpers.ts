import { ChangeEvent, KeyboardEvent } from 'react';
import { FormikHelpers } from 'formik';

export const handleDateInput = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<unknown>['setFieldValue'],
    fieldName: string,
) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 8) {
        value = value.slice(0, 8);
    }

    if (value.length >= 2) {
        value = `${value.slice(0, 2)}-${value.slice(2)}`;
    }

    if (value.length >= 5) {
        value = `${value.slice(0, 5)}-${value.slice(5)}`;
    }

    setFieldValue(fieldName, value);
};

export const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<unknown>['setFieldValue'],
    fieldName: string,
) => {
    const { value } = e.currentTarget;
    if (e.key === 'Backspace' && value.endsWith('-')) {
        e.preventDefault();
        setFieldValue(fieldName, value.slice(0, -1));
    }
};

export const handlePhoneInput = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<any>['setFieldValue'],
    fieldName: string,
) => {
    let { value } = e.target;

    const digitsOnly = value.replace(/\D/g, '');

    if (digitsOnly.length > 11) {
        return;
    }

    if (digitsOnly.length === 0) {
        value = '7';
    } else if (!digitsOnly.startsWith('7')) {
        value = `7${digitsOnly}`;
    }

    setFieldValue(fieldName, value);
};
