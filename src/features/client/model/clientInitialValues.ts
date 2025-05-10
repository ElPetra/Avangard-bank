import { ClientData } from './clientTypes';

export const initialValues: ClientData = {
    firstName: '',
    lastName: '',
    patronymic: '',
    gender: 'MALE',
    dateOfBirth: '',
    emailNotification: false,
    pushNotification: false,
    address: {
        country: '',
        region: '',
        city: '',
        street: '',
        houseNumber: '',
        apartmentNumber: 0,
        postcode: '0',
    },
    passport: {
        series: '',
        number: '',
        citizenship: 'Россия',
        issuanceDate: '',
        issuedBy: '',
    },
    profile: {
        email: '',
        mobilePhone: '',
    },
};
