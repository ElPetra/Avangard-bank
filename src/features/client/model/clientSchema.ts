import * as Yup from 'yup';

import {
    dateRegExp,
    nameRegExp,
    passportNumberRegExp,
    passportSeriesRegExp,
    issuedByRegExp,
    addressRegExp,
    houseAndApartmentRegExp,
    postcodeRegExp,
    phoneRegExp,
    emailRegExp,
} from 'shared/lib/regex/regex';

const isValidDate = (dateString: string) => {
    const [day, month, year] = dateString.split('-').map(Number);
    const currentYear = new Date().getFullYear();

    if (year < 1900 || year > currentYear) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) return false;

    return true;
};

const step1Schema = Yup.object().shape({
    firstName: Yup.string()
        .matches(nameRegExp, 'Имя должно содержать от 2 до 30 символов')
        .required('Имя обязательно'),
    lastName: Yup.string()
        .matches(nameRegExp, 'Фамилия должна содержать от 2 до 30 символов')
        .required('Фамилия обязательна'),
    patronymic: Yup.string()
        .matches(nameRegExp, 'Отчество должно содержать от 2 до 30 символов')
        .required('Отчество обязательно'),
    gender: Yup.string()
        .oneOf(['MALE', 'FEMALE'], 'Пол обязателен')
        .required('Пол обязателен'),
    dateOfBirth: Yup.string()
        .matches(dateRegExp, 'Дата рождения должна быть в формате DD-MM-YYYY')
        .test('valid-date', 'Не корректная дата рождения', (value) => {
            if (!value) return false;
            return isValidDate(value);
        })
        .test('not-future-date', 'Не корректная дата рождения', (value) => {
            if (!value) return false;

            const [day, month, year] = value.split('-').map(Number);
            const birthDate = new Date(year, month - 1, day);
            const today = new Date();

            return birthDate <= today;
        })
        .required('Дата рождения обязательна'),
});

const step2Schema = Yup.object().shape({
    passport: Yup.object().shape({
        number: Yup.string()
            .matches(
                passportNumberRegExp,
                'Номер паспорта должен содержать 6 цифр',
            )
            .required('Номер паспорта обязателен'),
        series: Yup.string()
            .matches(
                passportSeriesRegExp,
                'Серия паспорта должна содержать 4 цифры.',
            )
            .required('Серия паспорта обязательна.'),

        issuanceDate: Yup.string()
            .matches(dateRegExp, 'Дата выдачи должна быть в формате DD-MM-YYYY')
            .required('Дата выдачи обязательна.')
            .test(
                'is-valid-date',
                'Неверная дата выдачи паспорта.',
                (value) => {
                    if (!value) return false;

                    return isValidDate(value);
                },
            )
            .test(
                'is-not-later-than-today',
                'Дата выдачи не может быть позднее текущей даты.',
                (value) => {
                    const today = new Date();
                    const [day, month, year] = value.split('-').map(Number);
                    const issuanceDate = new Date(year, month - 1, day);
                    return issuanceDate <= today;
                },
            )
            .test(
                'is-not-earlier-than-birth',
                'Дата выдачи не может быть раньше даты рождения.',
                function (value) {
                    const { dateOfBirth } = this.options.context;

                    if (!value || !dateOfBirth) return true;

                    const [dayOfBirth, monthOfBirth, yearOfBirth] = dateOfBirth
                        .split('-')
                        .map(Number);
                    const [dayOfIssuance, monthOfIssuance, yearOfIssuance] =
                        value.split('-').map(Number);

                    const dateBirth = new Date(
                        yearOfBirth,
                        monthOfBirth - 1,
                        dayOfBirth,
                    );
                    const dateIssuance = new Date(
                        yearOfIssuance,
                        monthOfIssuance - 1,
                        dayOfIssuance,
                    );

                    if (dateIssuance < dateBirth) {
                        return this.createError({
                            message:
                                'Дата выдачи не может быть раньше даты рождения.',
                        });
                    }

                    return true;
                },
            ),
        issuedBy: Yup.string()
            .matches(
                issuedByRegExp,
                'Введите допустимые значение, символы A-Я.',
            )
            .min(10, 'Кем выдано должно содержать минимум 10 символов.')
            .max(100, 'Кем выдано не должно превышать 100 символов.')
            .required('Кем выдано обязательно.'),

        citizenship: Yup.string().required('Гражданство обязательно'),
    }),
});

const step3Schema = Yup.object().shape({
    address: Yup.object().shape({
        country: Yup.string()
            .matches(addressRegExp, 'Введите допустимые значение')
            .min(5, 'Поле должно должно содержать минимум 5 символов')
            .max(30, 'Поле должно должно содержать не более 30 символов')
            .required('Страна проживания обязательна'),
        region: Yup.string()
            .matches(addressRegExp, 'Введите допустимые значение')
            .min(5, 'Поле должно содержать минимум 5 символов')
            .max(30, 'Поле должно содержать не более 30 символов')
            .required('Регион проживания обязателен'),
        city: Yup.string()
            .matches(addressRegExp, 'Введите допустимые значение')
            .min(5, 'Поле должно содержать минимум 5 символов')
            .max(30, 'Поле должно содержать не более 30 символов')
            .required('Город проживания обязателен'),
        street: Yup.string()
            .matches(addressRegExp, 'Введите допустимые значение')
            .min(5, 'Поле должно содержать минимум 5 символов')
            .max(30, 'Поле должно содержать не более 30 символов')
            .required('Улица проживания обязательна'),
        houseNumber: Yup.string()
            .matches(
                houseAndApartmentRegExp,
                'Номер дома должен содержать от 1 до 4 цифр.',
            )
            .required('Номер дома обязателен'),
        apartmentNumber: Yup.string()
            .matches(
                houseAndApartmentRegExp,
                'Номер квартиры должен содержать от 1 до 4 цифр.',
            )
            .required('Номер квартиры обязателен'),
        postcode: Yup.string()
            .matches(
                postcodeRegExp,
                'Почтовый индекс должен состоять из 6 цифр.',
            )
            .required('Почтовый индекс обязателен'),
    }),
});

const step4Schema = Yup.object().shape({
    profile: Yup.object().shape({
        email: Yup.string()
            .matches(emailRegExp, 'Неверный формат email')
            .max(50, 'Email не должен превышать 50 символов')
            .min(2, 'Email должен содержать минимум 2 символа')
            .required('Email обязателен'),
        mobilePhone: Yup.string()
            .matches(
                phoneRegExp,
                'Телефон должен начинаться с 7 и содержать 11 цифр',
            )
            .required('Телефон обязателен'),
        emailNotification: Yup.string(),
        pushNotification: Yup.string(),
    }),
});

export const clientSchema = [
    step1Schema,
    step2Schema,
    step3Schema,
    step4Schema,
];
