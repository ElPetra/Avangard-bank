import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import * as styles from './ClientsPanelInfo.module.scss';

export const ClientsPanelInfo = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.clinets__panel_info)}>
            <div className={classNames(styles.clinets__panel_info_left)}>
                <Text color="dark-gray" size="xs">
                    {t('ФИО')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    {t('Ковальчук Алиса Васильевна')}
                </div>
                <Text color="dark-gray" size="xs">
                    {t('Пол')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    {t('Женский')}
                </div>
                <Text color="dark-gray" size="xs">
                    {t('Email')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    {t('alisa90@rambler.ru')}
                </div>
                <Text color="dark-gray" size="xs">
                    {t('Дата рождения')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    08.04.1990
                </div>
            </div>

            <div className={classNames(styles.clinets__panel_info_right)}>
                <Text tag="span" color="dark-gray" size="xs">
                    {t('Номер телефона')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    +7 | (931) 000-0000
                </div>
                <Text tag="span" color="dark-gray" size="xs">
                    {t('Адресс')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    {t('г.Москва, ул.Тверская 12, кв 13')}
                </div>
                <Button size="medium" variant="primary">
                    {t('Редактировать')}
                </Button>
            </div>
        </div>
    );
};
