// features/recovery-pass/model/validationSchemas.ts
import * as Yup from 'yup';

export const validationSchemas = [
    Yup.object().shape({
        email: Yup.string()
            .email('Некорректный email')
            .required('Поле обязательно'),
    }),
    Yup.object().shape({
        code: Yup.string()
            .length(6, 'Код должен быть 6 символов')
            .required('Поле обязательно'),
    }),
    Yup.object().shape({
        newPassword: Yup.string()
            .min(8, 'Минимум 8 символов')
            .required('Поле обязательно'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword')], 'Пароли не совпадают')
            .required('Поле обязательно'),
    }),
];
