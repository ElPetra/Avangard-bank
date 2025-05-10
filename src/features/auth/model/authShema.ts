import * as Yup from 'yup';
import { emailRegExp } from 'shared/lib/regex/regex';

export const authShema = Yup.object().shape({
    email: Yup.string()
        .matches(emailRegExp, 'Пожалуйста, введите корректный Email')
        .max(255, 'Email не должен превышать 255 символов')
        .required('Email обязателен'),
    password: Yup.string()
        .trim()
        .min(8, 'Пароль должен содержать не менее 8 символов')
        .max(255, 'Пароль не должен превышать 255 символов')
        .required('Пароль обязателен'),
});
