export interface ClientAddress {
    country: string;
    region: string;
    city: string;
    street: string;
    houseNumber: string;
    apartmentNumber: number;
    postcode: string;
}

export interface ClientPassport {
    series: string;
    number: string;
    citizenship: string;
    issuanceDate: string;
    issuedBy: string;
}

export interface ClientProfile {
    email: string;
    mobilePhone: string;
}

export interface ClientData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: 'MALE' | 'FEMALE';
    dateOfBirth: string;
    emailNotification: boolean;
    pushNotification: boolean;
    address: ClientAddress;
    passport: ClientPassport;
    profile: ClientProfile;
}
