import { TFunction } from 'i18next';

export const getButtonText = (step: number, t: TFunction): string => {
    if (step === 1) return t('Запросить код подтверждения');
    if (step === 2) return t('Далее');
    return t('На главную');
};

export const getErrorMessage = (step: number, t: TFunction): string => {
    if (step === 1) return t('Учетной записи с данным адресом не существует.');
    if (step === 2) return t('Неверный код подтверждения.');
    return t('Не удалось сбросить пароль.');
};
