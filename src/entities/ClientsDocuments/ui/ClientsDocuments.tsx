import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { CardItem } from 'shared/ui/CardItem';
import { classNames } from 'shared/lib/classNames/classNames';
import * as styles from './ClientsDocuments.module.scss';

export const ClientsDocuments = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.clinets__panel_info)}>
            <CardItem alignItems="flex-start" gap="xs">
                <Text color="dark-gray" size="xs">
                    {t('Паспорт (Серия и номер)')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    5060 345363
                </div>
            </CardItem>
            <CardItem alignItems="flex-start" gap="xs">
                <Text color="dark-gray" size="xs">
                    {t('ИНН')}
                </Text>
                <div className={classNames(styles.clinets__panel_info_field)}>
                    ************
                </div>
            </CardItem>
            <Button size="medium" variant="primary">
                {t('Добавить ')}
            </Button>
        </div>
    );
};
