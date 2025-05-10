// регулярка для имени и даты
export const dateRegExp = /^\d{2}-\d{2}-\d{4}$/;
export const nameRegExp = /^[A-Za-zА-Яа-яёЁ]{2,30}$/;

// регулярка для паспортных данных
export const passportNumberRegExp = /^\d{6}$/;
export const passportSeriesRegExp = /^\d{4}$/;
export const issuedByRegExp = /^(?!\s)[А-Яа-яЁё\s]+(?<!\s)$/;

// регулярка для адреса
export const addressRegExp = /^(?!\s)[A-Za-zА-Яа-яёЁ\s]+(?<!\s)$/;
export const houseAndApartmentRegExp = /^(?!0$)\d{1,4}$/;
export const postcodeRegExp = /^\d{6}$/;

// регулярка для телефона и почты
export const phoneRegExp = /^7\d{10}$/;
export const emailRegExp =
    /^(?!.*\.\.)(?!.*\.$)(?!.*\s)(?!.*--)(?!.*_-)(?!.*-_)(?!^-)(?!.*\s@).*([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\.([a-zA-Z]{2,3})$/;
